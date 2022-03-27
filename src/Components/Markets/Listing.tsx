import React from 'react'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { TextField, Divider } from '@mui/material';
import USD from '../../../node_modules/cryptocurrency-icons/svg/black/usd.svg'
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';


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
      <Grid item xs={1}>
        <FavoriteBorderSharpIcon sx={{marginX: 'auto', color: 'white'}}/>
      </Grid>
      <Grid item columns={12} sx={{marginTop: 2, fontSize: '20'}}>
        <Typography sx={{color: 'white', fontSize: '1.8rem', textAlign: 'center'}}>
          Some Kind of Ape Club #361
        </Typography>
        <Card sx={{width: 350, backgroundColor: '#231F20',  marginX: 'auto', color: 'white'}}>
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
               12 / .003 ETH
            </Typography>
            <Divider sx={{bgcolor: "#45A29E"}} ></Divider>
            <Typography>
              Blockchain: ETHEREUM
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{width: 350, marginTop: 1, marginX: 'auto', backgroundColor: '#231F20', color: 'white'}}>
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