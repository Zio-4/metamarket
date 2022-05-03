import React, { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { TextField, Divider, Button } from '@mui/material';
import USD from '../../../node_modules/cryptocurrency-icons/svg/black/usd.svg'
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';
import { useAppSelector } from '../../Redux-Toolkit/reduxHooks'
import { selectCount } from '../../Redux-Toolkit/listingIDSlice'
import { useParams } from 'react-router-dom'
import { useAddToCart } from '../../Hooks/useAddToCart'
import { useRemoveFromCart } from '../../Hooks/useRemoveFromCart'
import RemoveShoppingCartSharpIcon from '@mui/icons-material/RemoveShoppingCartSharp';

interface ItestListing {
  albumId: number
  id: number
  title: string
  url: string
  thumbnailUrl: string
}
 

function Listing() {
  let { id } = useParams()
  // Partial constructs a type with all properties of ItestListing set to optional. Will return a type that represents all subsets of a given type.
  // const [listing, setListing] = useState<Partial<ItestListing>>({})
  const [listing, setListing] = useState<ItestListing>(Object)
  const idsInCart = useAppSelector(selectCount)
  const addToCart = useAddToCart()
  const removeFromCart = useRemoveFromCart()


  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos/${id}`).then((r) => {
      if (r.ok) {
          r.json().then((data) => {
              console.log("photo data: ", data)
              setListing(data)
          })
      } else {
          r.json().then((err) => {
              console.log(err)
          })
      }
      }) 
  }, [id])


  return (
    <Grid container justifyContent='center' sx={{marginTop: 4}}>
      <Grid item columns={12} >
        <Box
          component="img"
          sx={{
            height: 300,
            width: 350,
            maxHeight: { xs: 400, md: 600 },
            maxWidth: { xs: 350, md: 350 },
            borderRadius: 1
          }}
          alt="Crypto punk mutant whatever"
          src={listing.thumbnailUrl}
        />
      </Grid>
      <Grid item xs={1}>
        <FavoriteBorderSharpIcon sx={{marginX: 'auto', color: 'white'}}/>
      </Grid>
      <Grid item columns={12} sx={{marginTop: 2, fontSize: '20'}}>
        <Typography sx={{color: 'white', fontSize: '1.8rem', textAlign: 'center'}}>
          {listing.title}
        </Typography>
        <Card sx={{width: 350, backgroundColor: '#242526',  marginX: 'auto', color: 'white'}}>
          <CardContent>
            <Typography>
              Owned by: Kacii_Eleven
            </Typography>
            <Divider sx={{bgcolor: "#45A29E"}} ></Divider>
            <Typography>
              Listed: 03/08/22 at 12:59pm
            </Typography>
            <Divider sx={{bgcolor: "#45A29E"}} ></Divider>
            <Typography>
              Price
            </Typography>
            {/* <svg>
              {USD}
            </svg> */}
            
            <Typography sx={{fontSize: '1.7rem'}}>
               {listing.id} / .003 ETH
            </Typography>
            <Divider sx={{bgcolor: "#45A29E"}} ></Divider>
            {idsInCart.includes(listing.id) ? <Button variant='contained' sx={{backgroundColor: "#FF6666", marginY: '0.5rem', width: '100%'}} onClick={() => removeFromCart(listing.id)}>
              <RemoveShoppingCartSharpIcon sx={{marginRight: '0.5rem'}}/> Remove from cart
            </Button> : 
            <Button variant='contained' sx={{marginY: '0.5rem', width: '100%'}} onClick={() => addToCart( listing.thumbnailUrl, listing.title, listing.id, listing.id)}>
              <AddShoppingCartSharpIcon sx={{marginRight: '0.5rem'}}/> Add to cart
            </Button>}
            <Typography>
              Blockchain: ETHEREUM
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{width: 350, marginTop: 1, marginX: 'auto', backgroundColor: '#242526', color: 'white'}}>
          <CardContent>
            <Typography>
              Description:
            </Typography>
            <Divider sx={{bgcolor: "#45A29E"}} ></Divider>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris vitae ultricies leo integer. Quis risus sed vulputate odio ut. In egestas erat imperdiet sed euismod nisi porta lorem. Nulla facilisi cras fermentum odio eu feugiat.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Listing