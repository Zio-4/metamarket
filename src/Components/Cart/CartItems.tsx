import { useEffect, useState } from 'react'
import { Button, Typography, Box, Divider, Grid } from '@mui/material';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import { useRemoveFromCart } from '../../Hooks/useRemoveFromCart'
import { Icart } from '../../lib/Interfaces/DataInterfaces'

function CartItems () {
  const [cartItems, setCartItems] = useState<Icart[]>([])
  const removeFromCart = useRemoveFromCart()
  const [itemRemoved, setItemRemoved] = useState(false)

  useEffect(() => {
    console.log(localStorage.getItem('cart'))
    setCartItems(JSON.parse(localStorage.getItem('cart') || ''))
  }, [itemRemoved])

  // Rewrite with useCallBack - https://stackoverflow.com/questions/62601538/react-useeffect-passing-a-function-in-the-dependency-array
  const removeListing = (listingId: number) => {
    removeFromCart(listingId)
    setItemRemoved(!itemRemoved)
  }

  return (
    <>
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
                <Button variant='outlined' size='small' color='warning' endIcon={<DeleteSharpIcon />} sx={{marginTop: '2.5em'}} onClick={() => removeListing(item.listingId)}>
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
    </>
  )
}

export default CartItems

