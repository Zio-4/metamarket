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
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

const pages = ['Markets', 'Cart', 'Login'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


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
        component="div"
        sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, color: "#66FCF1", fontFamily: 'MuseoModerno' }}
      >
        metaMarket
      </Typography>

      <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: 'block', md: 'none' },
          }}
        >
          {pages.map((page) => (
            <MenuItem key={page} onClick={handleCloseNavMenu}>
              <Typography textAlign="center">{page}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
      >
        LOGO
      </Typography>
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <Button
            onClick={handleCloseNavMenu}
            sx={{ my: 2, display: 'block', color: "#66FCF1", fontFamily: 'MuseoModerno' }}
          >
            Markets <StorefrontSharpIcon/>
          </Button>
          <Button
            onClick={handleCloseNavMenu}
            sx={{ my: 2, display: 'block', color: "#66FCF1", fontFamily: 'MuseoModerno' }}
          >
            Cart <ShoppingCartSharpIcon />
          </Button>
          <Button
            onClick={handleCloseNavMenu}
            sx={{ my: 2, display: 'block', color: "#66FCF1", fontFamily: 'MuseoModerno' }}
          >
            Login
          </Button>
      </Box>

      <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Open settings">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
          </IconButton>
        </Tooltip>
        <Menu
          sx={{ mt: '45px' }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {settings.map((setting) => (
            <MenuItem key={setting} onClick={handleCloseUserMenu}>
              <Typography textAlign="center">{setting}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </Toolbar>
  </Container>
  </AppBar>
  )
}

export default NavBar