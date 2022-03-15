import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar';
import { Typography } from '@mui/material';

function NavBar() {


  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ bgcolor: "#1F2833" }}>
            <Typography  variant="h4" sx={{color: "#66FCF1", fontFamily: 'MuseoModerno', ml: 3, p: 1}} component="div">metaMarket</Typography>
        </AppBar>
    </Box>
  )
}

export default NavBar