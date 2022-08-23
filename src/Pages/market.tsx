import { useParams } from "react-router-dom"
import { Box } from "@mui/system"
import { Typography, Divider, Grid } from "@mui/material"
// import Grid from "@mui/material"
import MarketListings from "../Components/Markets/MarketListings"

const Market = () => {
 const { marketname } = useParams()

  return (
    <Box>
        <Typography variant="h3" sx={{textAlign: 'center', color: '#C5C6C7', marginTop: 5, textTransform: 'capitalize'}}>
            explore {marketname}
        </Typography>
        <Box sx={{ width: '65%', margin: 'auto', marginTop: 6}}>
            <Typography sx={{color: '#C5C6C7'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris vitae ultricies leo integer. Quis risus sed vulputate odio ut. In egestas erat imperdiet sed euismod nisi porta lorem. Nulla facilisi cras fermentum odio eu feugiat.
            </Typography>
        </Box>
        <Divider variant="middle" sx={{marginY: 8, bgcolor: "gray"}} className='market-divider'></Divider>
        <Grid container spacing={{md: 1}} sx={{paddingX: 4, paddingTop: 3 }}>
            <MarketListings />
        </Grid>
    </Box>
  )
}

export default Market
