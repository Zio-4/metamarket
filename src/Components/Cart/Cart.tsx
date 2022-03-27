import React from 'react'
import Grid from '@mui/material/Grid';
import { Button, Card, CardContent, Typography } from '@mui/material';


function Cart() {
  return (
    <Grid container justifyContent='center' sx={{marginTop: 2}}>
      <Grid item>
        <Typography sx={{color: 'white', fontSize: '1.8rem'}}>
          Subtotal: $20.36
        </Typography>
        <Button variant='outlined' sx={{color: "#66FCF1", marginTop: 1}}>
          Proceed to checkout
        </Button>
      </Grid>
      <Grid item>
        <Card>
          <CardContent>
            
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Cart