import React from 'react'
import Grid from '@mui/material/Grid';
import { Button, Card, CardContent, Typography, Box, Divider,} from '@mui/material';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';


function Cart() {
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
            <Grid container>
              <Grid item xs={4} className='borders'>
                {/* vertically align image */}
                <Box
                component="img"
                sx={{
                  height: 105,
                  width: 105,
                  maxHeight: { xs: 400, md: 600 },
                  maxWidth: { xs: 350, md: 350 },
                  borderRadius: 1
                }}
                alt="Crypto punk mutant whatever"
                src="https://d2eohwa6gpdg50.cloudfront.net/wp-content/uploads/sites/3/2022/01/13201724/Mutant-975x1024-1.jpeg"
                />
              </Grid>
              <Grid item xs={4} className='borders' sx={{ textAlign: 'center'}} >
                  <Typography sx={{color: '#C1C1C1', fontSize: '.8rem', textAlign: 'center'}}>
                    Crypto mutant punk #361
                  </Typography>
                  <Button variant='outlined' size='small' color='warning' endIcon={<DeleteSharpIcon />} sx={{marginTop: '2.5em'}}>
                    Delete
                  </Button>
              </Grid>
              <Grid item xs={4} className='borders'>
                <Typography sx={{textAlign: 'right', color: '#C1C1C1',}}>
                  $12.99
                </Typography>
              </Grid>
            </Grid>
            <Divider sx={{bgcolor: "#45A29E", marginY: '1em'}}/>
            {/* <Grid container>
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
                alt="Crypto punk mutant whatever"
                src="https://d2eohwa6gpdg50.cloudfront.net/wp-content/uploads/sites/3/2022/01/13201724/Mutant-975x1024-1.jpeg"
                />
              </Grid>
              <Grid item xs={4} className='borders' sx={{ textAlign: 'center'}} >
                  <Typography sx={{color: '#C1C1C1', fontSize: '.8rem', textAlign: 'center'}}>
                    Crypto mutant punk #361
                  </Typography>
                  <Button variant='outlined' size='small' color='warning' endIcon={<DeleteSharpIcon />} sx={{marginTop: '2.5em'}}>
                    Delete
                  </Button>
              </Grid>
              <Grid item xs={4} className='borders'>
                <Typography sx={{textAlign: 'right', color: '#C1C1C1',}}>
                  $12.99
                </Typography>
              </Grid>
            </Grid>  */}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Cart

