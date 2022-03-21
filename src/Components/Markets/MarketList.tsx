import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function MarketList() {

  const categories = [ 'Art', 'Boats', 'Cars', 'Clothes', 'Land', 'Houses', 'Items', 'Jewelry', 'Traits' ]

  return (
    <Box sx={{ flexGrow: 1, marginTop: 15 }}>
    <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{paddingX: 50}}>
    {categories.map((category) => (
      <Grid item xs={2} sm={4} md={4} key={category} >
        <Card sx={{paddingBottom: 10, background: 'linear-gradient(to right bottom, #45A29E, #66FCF1)'}}>
          <CardContent>
            <Typography sx={{color: 'white', fontFamily: 'Cambay', fontWeight: '700', fontSize: 20}} className='marketlist-cards-text'>
              <span>{category}</span>
            </Typography>
          </CardContent>  
        </Card>
      </Grid>
    ))}
    </Grid>
  </Box>
  )
}

export default MarketList

