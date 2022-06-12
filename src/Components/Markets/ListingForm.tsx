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
  object: string
  created: string
  expires_at: string
  url: string
}

const ListingForm: React.FC = () => {
  const navigate = useNavigate()
  const userInfo = useAppSelector(userState)
  const [dialogState, setDialogState] = useState(false)

  useEffect(() => {
    // loading animation or if not signed in/ error return
    if (!userInfo.email) return navigate('/signin')
    // fetch user from db, see if they have a stripe acc (stripe_id)

    const getUserDataFromDb = async () => {
      const data = await API.graphql({ query: getUser, variables: { userId: userInfo.userId } }) as getUserQuery
      if (!data.data.getUser.stripe_id) {
        console.log(data.data.getUser)
        setDialogState(true)
      }
    }
    
    getUserDataFromDb()
    .catch(err => console.log("error fetching data: ", err))
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
    window.location.replace(`${url}`)
  }

  const createStripeAccount = async () => {
    // call lambda function
    try {
      let signUpResponse = await API.graphql(graphqlOperation(signUpUser, {input: {username: userInfo.username, email: userInfo.email, userId: userInfo.userId} })) as IstripeSignUpResponse
      console.log("sign up response: ", signUpResponse)
      // redirect the user to the onboarding flow from the url in the response
      redirectToOnboarding(signUpResponse.url)
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
            metaMarket uses Stripe to securely process payments. You must create a Stripe Connected account to recieve your payments from Nft's that you have sold.
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