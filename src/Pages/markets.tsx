import { Box, Grid } from "@mui/material"
import MarketCategories from "../Components/Markets/MarketCategories"


const Markets = () => {
  return (
    <Box sx={{ flexGrow: 1, marginTop: 10 }}>
      <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{paddingX: 3}}>
        <MarketCategories />
      </Grid>
    </Box>
  )
}

export default Markets