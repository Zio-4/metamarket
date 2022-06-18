import React, {useEffect, useState, MouseEvent} from 'react'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import ArrowUpwardSharpIcon from '@mui/icons-material/ArrowUpwardSharp';
import Autocomplete from '@mui/material/Autocomplete';
import Typography from '@mui/material/Typography';
import { Auth, API, graphqlOperation } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../../graphql/queries';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { signUpUser } from '../../graphql/mutations';
import { useAppSelector } from '../../Redux-Toolkit/reduxHooks';
import { userState } from '../../Redux-Toolkit/userSlice';
import { useAppDispatch } from '../../Redux-Toolkit/reduxHooks';
import { setCurrentUser } from '../../Redux-Toolkit/userSlice';
import { updateUser } from '../../graphql/mutations';
// import Stripe from 'stripe';
import {loadStripe} from '@stripe/stripe-js';



const Input = styled('input')({
  display: 'none',
});

const listColors = [{color: 'Yellow'}, {color: 'Yellow-Green'}, {color: 'Green'}, {color: 'Blue-Green'}, {color: 'Blue'}, {color: 'Blue-Violet'}, {color: 'Violet'}, {color: 'Red-Violet'}, {color: 'Red'}, {color: 'Red-Orange'}, {color: 'Orange'}, {color: 'Yellow-Orange'}]

const blockchains = [{label: 'Ethereum'}, {label: 'Solana'}, {label: 'Polygon'}, {label: 'Cardano'}, {label: 'Tezos'}]

const categories = [{label: 'Art'}, {label: 'Boats'}, {label: 'Cars'}, {label: 'Clothes'}, {label: 'Land'}, {label: 'Houses'}, {label: 'Items'}, {label: 'Jewelry'}, {label: 'Traits'}]

// interface Iprops {
//   cognitoUser: {
//     cognitoId: string
//     username: string
//     email: string
//   }
// }

type getUserQuery = {
  data: {
    getUser: {
      Nfts?: []
      createdAt: string
      favorited?: []
      owner: string
      updatedAt: string
      userId: string
      username: string
      stripe_id?: string
    }
  }
}

interface IstripeSignUpResponse {
  data: {
    signUpUser: {
      accountId: string
      object: string
      created: number
      expires_at: number
      url: string
    }
  }
}

const ListingForm: React.FC = () => {
  const navigate = useNavigate()
  const userInfo = useAppSelector(userState)
  const dispatch = useAppDispatch()
  const [dialogState, setDialogState] = useState(false)


  useEffect(() => {
    // loading animation or if not signed in/ error return
    if (!userInfo.email) return navigate('/signin')
    // fetch user from db, see if they have a stripe acc (stripe_id)
    console.log("userInfo in ListingForm: ", userInfo)

    

    // Add custom loading animation letting user know their account is being updated
    const getStripeUser = async () => {
      
      // Call lambda func
      // if (stripeAccount.charges_enabled) {
      //   try {
      //     const updateChargesEnabledInDDB = API.graphql({ query: updateUser, variables: { UpdateUserInput: {userId: userInfo.userId, chargesEnabled: true} }})
        
      //     const userInfoFromLocalStorage = JSON.parse(localStorage.getItem('userInfo') || '')
      //     localStorage.setItem('userInfo', JSON.stringify({...userInfoFromLocalStorage, 'chargesEnabled': true}))
  
      //     dispatch(setCurrentUser({...userInfo, chargesEnabled: true}))
  
      //     console.log('Successfully udpated account')
      //   } catch (err) {
      //     console.log('Error updating account from onboarding')
      //   }
      // } else {
      //   // let user know they need to finish onboarding if something went wrong or they did not come back from onboarding
      //   console.log('User did not finish signing up or something went wrong')
      //   navigate('/profile')
      // } 
    }

    if (localStorage.getItem('onboardingInfo')) {
      localStorage.removeItem('onboardingInfo')
      // getStripeUser()
    }

    if (!userInfo.stripeId) {
      setDialogState(true)
    }

    
  },[])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('poop')
  }

  const handleClose = (event: object, reason: string) => {
    if (reason ==="backdropClick" || reason === "escapeKeyDown") return
    console.log('reason', reason)
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
    // call lambda function
    try {
      let signUpResponse = await API.graphql(graphqlOperation(signUpUser, {input: {username: userInfo.username, email: userInfo.email, userId: userInfo.userId} })) as IstripeSignUpResponse
      // console.log('response :', signUpResponse)
      // console.log("response.data : ", signUpResponse.data)
      // console.log("sign up response.data.signUpUser: ", signUpResponse.data.signUpUser)
      let userInStorage = JSON.parse(localStorage.getItem('userInfo') || '')
      // console.log('user in storage: ', userInStorage)
      let updatedUser = {...userInStorage, 'stripeId': signUpResponse.data.signUpUser.accountId}
      // console.log('updated user in storage: ', updatedUser)
      localStorage.setItem('userInfo', JSON.stringify(updatedUser))

      // console.log('user info (redux): ', userInfo)
      let updateUserState = {...userInfo, stripeId: signUpResponse.data.signUpUser.accountId}
      // console.log('updated User state: ', updateUserState)

      localStorage.setItem('onboardingInfo', JSON.stringify({'userCameFromOnboardFlow': true}))
      dispatch(setCurrentUser(updateUserState))
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