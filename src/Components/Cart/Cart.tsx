import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid';
import { Button, Card, CardContent, Typography, Box, Divider,} from '@mui/material';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';

interface Icart {
  listingId: number
  title: string
  price: number
  image: string
}

function Cart() {
  const [cartItems, setCartItems] = useState<Icart[]>([])

  useEffect(() => {
    console.log(localStorage.getItem('cart'))
    setCartItems(JSON.parse(localStorage.getItem('cart') || ''))
  }, [])

  const removeFromCart = (listingId: number) => {
      let updatedCart = cartItems.filter(item => item.listingId !== listingId)
      localStorage.setItem('cart', JSON.stringify(updatedCart))
      setCartItems(updatedCart)
  }


  return (
    <Grid container justifyContent='center' sx={{marginTop: 2}}>
      <Grid item xs={12} sx={{ textAlign: 'center'}}>
        <Typography sx={{color: 'white', fontSize: '1.8rem',}}>
          Subtotal: $25.98
        </Typography>
        <Button variant='outlined' sx={{color: "#66FCF1", marginTop: 1, marginX: 'auto'}}>
          Proceed to checkout
        </Button>
      </Grid>
      <Grid item xs={12} sx={{marginTop: '1em'}}>
        <Card sx={{width: 350, marginX: 'auto', bgcolor: '#242526' }} className='card-bg'>
          <CardContent>
            {cartItems.map(item => (
              <div key={item.listingId}>
                <Grid container>
                  <Grid item xs={4} className='borders'>
                    <Box
                    component="img"
                    sx={{
                      height: 105,
                      width: 105,
                      maxHeight: { xs: 400, md: 600 },
                      maxWidth: { xs: 350, md: 350 },
                      borderRadius: 1
                    }}
                    alt="Listing image"
                    src={item.image}
                    />
                  </Grid>
                  <Grid item xs={4} className='borders' sx={{ textAlign: 'center'}} >
                      <Typography sx={{color: '#C1C1C1', fontSize: '.8rem', textAlign: 'center'}}>
                        {item.title}
                      </Typography>
                      <Button variant='outlined' size='small' color='warning' endIcon={<DeleteSharpIcon />} sx={{marginTop: '2.5em'}} onClick={() => removeFromCart(item.listingId)}>
                        Delete
                      </Button>
                  </Grid>
                  <Grid item xs={4} className='borders'>
                    <Typography sx={{textAlign: 'right', color: '#C1C1C1',}}>
                      {`$ ${item.price}`}
                    </Typography>
                  </Grid>
              </Grid>
              <Divider sx={{bgcolor: "#45A29E", marginY: '1em'}}/>
            </div>
            ))}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Cart

