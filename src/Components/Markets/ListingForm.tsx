import React, {useEffect, useState, MouseEvent} from 'react'
import { Grid, TextField, Button, Autocomplete, Typography, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@mui/material'
import { styled } from '@mui/material/styles';
import ArrowUpwardSharpIcon from '@mui/icons-material/ArrowUpwardSharp';
import { API, graphqlOperation } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';
import { signUpUser, checkAndUpdateAccount } from '../../graphql/mutations';
import { useAppSelector, useAppDispatch } from '../../Redux-Toolkit/reduxHooks';
import { userState } from '../../Redux-Toolkit/userSlice';
import { useUpdateUser } from '../../Hooks/useUpdateUser';
import { IstripeSignUpResponse, IupdateUserResponse } from '../../lib/Interfaces/ListingFormInterfaces';


const Input = styled('input')({
  display: 'none',
});

const listColors = [{color: 'Yellow'}, {color: 'Yellow-Green'}, {color: 'Green'}, {color: 'Blue-Green'}, {color: 'Blue'}, {color: 'Blue-Violet'}, {color: 'Violet'}, {color: 'Red-Violet'}, {color: 'Red'}, {color: 'Red-Orange'}, {color: 'Orange'}, {color: 'Yellow-Orange'}]

const blockchains = [{label: 'Ethereum'}, {label: 'Solana'}, {label: 'Polygon'}, {label: 'Cardano'}, {label: 'Tezos'}]

const categories = [{label: 'Art'}, {label: 'Boats'}, {label: 'Cars'}, {label: 'Clothes'}, {label: 'Land'}, {label: 'Houses'}, {label: 'Items'}, {label: 'Jewelry'}, {label: 'Traits'}]


const ListingForm: React.FC = () => {
  const navigate = useNavigate()
  const userInfo = useAppSelector(userState)
  const dispatch = useAppDispatch()
  const [dialogState, setDialogState] = useState(false)
  const updateUserHook = useUpdateUser()
  const [formValues, setFormValues] = useState({title: '', price: 0, category: '', colors: [], blockchain: '', xCoordinate: 0, yCoordinate: 0, description: ''})
 

  useEffect(() => {
    // loading animation or if not signed in/ error return
    if (!userInfo.email) return navigate('/signin')
    console.log("userInfo in ListingForm: ", userInfo)

    // Add custom loading animation letting user know their account is being updated
    const updateUser = async () => {
      let updateUserResponse = await API.graphql(graphqlOperation(checkAndUpdateAccount, {input: {stripeAccountId: userInfo.stripeId, userId: userInfo.userId}})) as IupdateUserResponse

      console.log('updateUserResponse: ', updateUserResponse)

      if (updateUserResponse.data.checkAndUpdateAccount === 'SUCCESS') {
        console.log('yay everything went correctly!')
        updateUserHook({chargesEnabled: true})
      } else {
        // let user know their account did not get updated / something went wrong
        console.log('Something went wrong. You can try again from the profile page.')
      }
    }

    if (localStorage.getItem('onboardingInfo')) {
      localStorage.removeItem('onboardingInfo')
      updateUser()
    }

    if (!userInfo.stripeId && !userInfo.chargesEnabled) {
      setDialogState(true)
    }

    if (!userInfo.chargesEnabled) {
      // Tell user to finish the onboarding flow to have account fully set up
      console.log('Finish setting up Stripe account')
    }
  }, [])

  const handleFormChange = (e: any) => {
    if (e.target.name === 'colors') {
      // handle adding to array
    } else {
      setFormValues({...formValues, [e.target.name]: e.target.value})
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('handle submit')
    // Add logic and lambda function(s)
  }

  const handleClose = (event: object, reason: string) => {
    if (reason ==="backdropClick" || reason === "escapeKeyDown") return
    // console.log('reason', reason)
    setDialogState(false);
  };

  const redirect = (event: React.MouseEvent<HTMLElement>) => {
    const eventCast = event.target as Element
    
    if (eventCast.textContent === 'Back to home') return navigate('/')
    else createStripeAccount()
  }

  const redirectToOnboarding = (url: string) => {
    console.log("url in redirect func: ", url)
    window.location.replace(url)
  }

  const createStripeAccount = async () => {
    try {
      let signUpResponse = await API.graphql(graphqlOperation(signUpUser, {input: {username: userInfo.username, email: userInfo.email, userId: userInfo.userId} })) as IstripeSignUpResponse
      updateUserHook({stripeId: signUpResponse.data.signUpUser.accountId})

      localStorage.setItem('onboardingInfo', JSON.stringify({'userCameFromOnboardFlow': true}))
      // redirect the user to the onboarding flow from the url in the response
      redirectToOnboarding(signUpResponse.data.signUpUser.url)
    } catch (err) {
      console.log(err)
    }
    setDialogState(false)
  }



  return (
    <div>
      <Dialog
        open={dialogState}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Create Stripe Connected account?"}
        </DialogTitle>
        <DialogContent >
          <DialogContentText id="alert-dialog-description">
            metaMarket uses Stripe to securely process payments. You must create a Stripe connected account to recieve payments from Nft's that you have sold.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={redirect}>Back to home</Button>
          <Button onClick={redirect} autoFocus>
            Create Account
          </Button>
        </DialogActions>
      </Dialog>
      <Grid container alignItems="center" justifyContent="center" sx={{width: '20rem', marginX: 'auto', }} >
          <form onSubmit={handleSubmit} className='listing-form' >
            <Grid item >
              <TextField variant="outlined" label="Title" required  sx={{ input: {color: 'white', }, width: '13rem', }} />
            </Grid>
            <Grid item>
              <TextField variant="outlined" label="Price" type="number" required helperText="Price in USD"/>
            </Grid>
            <Grid item>
              <Autocomplete
                disablePortal
                options={categories}
                renderInput={(params) => <TextField {...params} label="Categories" required/>}
              />
            </Grid>

            <Grid item>
              <Autocomplete multiple limitTags={1} options={listColors} getOptionLabel={(option) => option.color} renderInput={(params) => (
                <TextField {...params} label="Colors" helperText="Based on the color wheel: https://tinyurl.com/2p8bfymr"/>
              )}/>
            </Grid>
            <Grid item>
              <Autocomplete
                disablePortal
                options={blockchains}
                renderInput={(params) => <TextField {...params} label="Blockchain" required/>}
              />
            </Grid>
            <Typography>
                Land coordinates
            </Typography>
            <Grid item>
              <TextField variant="outlined" label="X coordinate" type="number" />
            </Grid>
            <Grid item>
              <TextField variant="outlined" label="Y coordinate" type="number" />
            </Grid>
            <Grid item>
              <TextField variant="outlined" label="Description" multiline minRows={4}/>
            </Grid>
            <Grid item>
              <label htmlFor="contained-button-file">
                <Input accept="image/*" id="contained-button-file" multiple type="file" />
                <Button variant="contained" component="span" endIcon={<ArrowUpwardSharpIcon/>}>
                  Upload
                </Button>
              </label>
            </Grid>
            <Grid item>
              <Button variant="contained" type="submit">
                List
              </Button>
            </Grid>
          </form>
      </Grid>
    </div>
  ) 
}

export default ListingForm