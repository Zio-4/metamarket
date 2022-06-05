import React, {useEffect, useState} from 'react'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import ArrowUpwardSharpIcon from '@mui/icons-material/ArrowUpwardSharp';
import Autocomplete from '@mui/material/Autocomplete';
import Typography from '@mui/material/Typography';
import { Auth, API } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../../graphql/queries';


const Input = styled('input')({
  display: 'none',
});

const listColors = [{color: 'Yellow'}, {color: 'Yellow-Green'}, {color: 'Green'}, {color: 'Blue-Green'}, {color: 'Blue'}, {color: 'Blue-Violet'}, {color: 'Violet'}, {color: 'Red-Violet'}, {color: 'Red'}, {color: 'Red-Orange'}, {color: 'Orange'}, {color: 'Yellow-Orange'}]

const blockchains = [{label: 'Ethereum'}, {label: 'Solana'}, {label: 'Polygon'}, {label: 'Cardano'}, {label: 'Tezos'}]

const categories = [{label: 'Art'}, {label: 'Boats'}, {label: 'Cars'}, {label: 'Clothes'}, {label: 'Land'}, {label: 'Houses'}, {label: 'Items'}, {label: 'Jewelry'}, {label: 'Traits'}]

interface Iprops {
  cognitoUser: {
    cognitoId: string
    username: string
    email: string
  }
}

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
      stripe_id: string
    }
  }
}

const ListingForm: React.FC<Iprops> = ({cognitoUser}) => {
  const navigate = useNavigate()

  useEffect(() => {
    // loading animation or if not signed in/ error return
    if (!cognitoUser.email) return navigate('/signin')
    // fetch user from db, see if they have a stripe acc (stripe_id)
    const getUserDataFromDb = async () => {
      const data = await API.graphql({ query: getUser, variables: { userId: cognitoUser.cognitoId } }) as getUserQuery
      if (!data.data.getUser.stripe_id) return navigate('/profile')
    }
    
    getUserDataFromDb()
    .catch(err => console.log("error fetching data: ", err))
  },[])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('poop')
  }



  return (
    <Grid container alignItems="center" justifyContent="center" sx={{width: '20rem', marginX: 'auto', }} >
      {/* <Paper sx={{ marginTop: 10 }}> */}
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
  ) 
}

export default ListingForm