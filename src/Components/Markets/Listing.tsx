import React from 'react'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function Listing() {
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
        src="https://d2eohwa6gpdg50.cloudfront.net/wp-content/uploads/sites/3/2022/01/13201724/Mutant-975x1024-1.jpeg"
      />
      </Grid>
      <Grid item columns={12} sx={{marginTop: 2}}>
        <Card sx={{width: 350}}>

        </Card>
      </Grid>
    </Grid>
  )
}

export default Listing