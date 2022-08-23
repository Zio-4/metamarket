import { Card, Grid, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom'


function MarketCategories() {

  const categories = [ 'art', 'boats', 'cars', 'clothes', 'land', 'houses', 'items', 'jewelry', 'traits' ]

  return (
    <>
      {categories.map((category) => (
        <Grid item xs={2} sm={4} md={4} key={category} component={Link} to={`/markets/${category}`} sx={{textDecoration: 'none'}}>
          <Card sx={{paddingBottom: 10, background: 'linear-gradient(to right bottom, #45A29E, #66FCF1)'}} >
            <CardContent>
              <Typography sx={{color: 'white', fontFamily: 'Cambay', fontWeight: '700', fontSize: 20}} className='marketlist-cards-text'>
                <span >{category}</span>
              </Typography>
            </CardContent>  
          </Card>
        </Grid>
      ))}
    </>
  )
}

export default MarketCategories

