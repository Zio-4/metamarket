import React, {useState} from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import StorefrontSharpIcon from '@mui/icons-material/StorefrontSharp';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import AccountBoxSharpIcon from '@mui/icons-material/AccountBoxSharp';
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'



function NavBar() {

  return (
    // <Box sx={{ flexGrow: 1 }}>
    //     <AppBar position="static" sx={{ bgcolor: "#1F2833" }}>
    //         <Toolbar>
    //         <Typography  variant="h4" sx={{color: "#66FCF1", fontFamily: 'MuseoModerno', ml: 3, p: 1}} component="div">metaMarket</Typography>
    //         <Breadcrumbs sx={{color: "#66FCF1", marginLeft: "auto", paddingRight: 10, fontFamily: 'MuseoModerno'}}>
    //             <div>Market</div>
    //             <div>Cart</div>
    //             <div>Account</div>
    //         </Breadcrumbs>
    //         </Toolbar>
    //     </AppBar>
    // </Box>

  <AppBar position="static" sx={{ bgcolor: "#1F2833" }}>
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        <Typography
          variant="h6"
          noWrap
          component={Link}
          to={'/'}
          sx={{ mr: 130, display: { xs: 'none', md: 'flex' }, color: "#66FCF1", fontFamily: 'MuseoModerno', textDecoration: 'none' }}
        >
          metaMarket
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"

            color="inherit"
          >
            <MenuIcon />
          </IconButton>
        </Box>

        <Typography
          variant="h6"
          noWrap
          component={Link}
          to={'/'}
          sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, color: "#66FCF1", fontFamily: 'MuseoModerno', textDecoration: 'none' }}
        >
          metaMarket
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: 3 }}>
          <Button 
            sx={{ my: 2, display: 'block', color: "#66FCF1", fontFamily: 'Cambay' }}
            component={Link}
            to={'/marketlist'}
          >
            Markets <StorefrontSharpIcon fontSize='small'/>
          </Button>

          <Button
            sx={{ my: 2, display: 'block', color: "#66FCF1", fontFamily: 'Cambay' }}
            component={Link}
            to={'/cart'}
          >
            Cart <Badge badgeContent={3} color="warning">
                  <ShoppingCartSharpIcon fontSize='small'/>
                </Badge>
          </Button>


          <Button
            sx={{ my: 2, display: 'block', color: "#66FCF1", fontFamily: 'Cambay' }}
            component={Link}
            to={'/login'}
          >
            Login <AccountBoxSharpIcon fontSize='small'/>
          </Button>
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
  )
}

export default NavBar