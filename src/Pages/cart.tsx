import { Grid, Typography, Button, Card, CardContent } from "@mui/material"
import CartItems from '../Components/Cart/CartItems'

const Cart = () => {
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
            <CartItems />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Cart