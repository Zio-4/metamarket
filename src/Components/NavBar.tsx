import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar';
import { Typography } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';



function NavBar() {


  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ bgcolor: "#1F2833" }}>
            <Toolbar>
            <Typography  variant="h4" sx={{color: "#66FCF1", fontFamily: 'MuseoModerno', ml: 3, p: 1}} component="div">metaMarket</Typography>
            <Breadcrumbs sx={{color: "white", marginLeft: "auto", paddingRight: 10}}>
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </Breadcrumbs>
            </Toolbar>
        </AppBar>
    </Box>
  )
}

export default NavBar