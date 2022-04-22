import React, {useState} from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import StorefrontSharpIcon from '@mui/icons-material/StorefrontSharp';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import AccountBoxSharpIcon from '@mui/icons-material/AccountBoxSharp';
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom'
import SellSharpIcon from '@mui/icons-material/SellSharp';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import ListItemIcon from '@mui/material/ListItemIcon';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

function NavBar() {
  let navigate = useNavigate()
  const [mobileMenuState, setMobileMenuState] = useState(false)

  const setMenu = () => {
    setMobileMenuState(!mobileMenuState)
  }

  const navigateUser = (e: React.MouseEvent) => {
    let buttonClicked = (e.target as Element).textContent!.toLowerCase()
    if (buttonClicked === 'sell') {
      navigate(`listingform`)
    } else {
      navigate(`/${buttonClicked}`)
    }
    setMobileMenuState(!mobileMenuState)
  }


  return (
  <>
    <nav className={`${mobileMenuState ? null : 'menu'}`}>
      <div className='navbar-container'>
        <IconButton onClick={setMenu}>
          <CloseSharpIcon className='mobile-menu-exit' fontSize="large" sx={{color: 'white'}}/>
        </IconButton>

          <List >
              <ListItem sx={{color: '#66FCF1'}} onClick={navigateUser}>
                <ListItemIcon sx={{color: '#66FCF1'}}>
                  <StorefrontSharpIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Markets"
                />
              </ListItem>
              <ListItem sx={{color: '#66FCF1'}} onClick={navigateUser}>
                <ListItemIcon sx={{color: '#66FCF1'}}>
                  <SellSharpIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Sell"
                />
              </ListItem>
              <ListItem sx={{color: '#66FCF1'}} onClick={navigateUser}>
                <ListItemIcon sx={{color: '#66FCF1'}}>
                  <ShoppingCartSharpIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Cart"
                />
              </ListItem>
              <ListItem sx={{color: '#66FCF1'}} onClick={navigateUser}>
                <ListItemIcon sx={{color: '#66FCF1'}}>
                  <AccountBoxSharpIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Login"
                />
              </ListItem>
          </List>
      </div>
    </nav>

    <AppBar position="static" sx={{ bgcolor: "#1F2833" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to={'/'}
            sx={{ mr: 90, display: { xs: 'none', md: 'flex' }, color: "#66FCF1", fontFamily: 'MuseoModerno', textDecoration: 'none' }}
          >
            metaMarket
          </Typography>

          <Typography
            variant="h6"
            noWrap
            component={Link}
            to={'/'}
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, color: "#66FCF1", fontFamily: 'MuseoModerno', textDecoration: 'none' }}
          >
            metaMarket
          </Typography>

          {/* <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}> */}
            <IconButton
              size="large"
              aria-label="menu button"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              edge="end"
              color="inherit"
              sx={{display: {md: 'none'}}}
              onClick={setMenu}
            >
              <MenuIcon />
            </IconButton>
          {/* </Box> */}

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: 3 }}>
            <Button 
              sx={{ my: 2, color: "#66FCF1", fontFamily: 'Cambay' }}
              component={Link}
              to={'/markets'}
              endIcon={<StorefrontSharpIcon />}
              size="large"
            >
              Markets 
            </Button>

            <Button 
              sx={{ my: 2, color: "#66FCF1", fontFamily: 'Cambay' }}
              component={Link}
              to={'/listingform'}
              endIcon={<SellSharpIcon />}
            >
              Sell 
            </Button>

            <Button
              sx={{ my: 2, color: "#66FCF1", fontFamily: 'Cambay' }}
              component={Link}
              to={'/cart'}
              endIcon={<Badge badgeContent={3} color="warning">
                          <ShoppingCartSharpIcon fontSize='small'/>
                        </Badge>}
            >
              Cart 
            </Button>

            <Button
              sx={{ my: 2, color: "#66FCF1", fontFamily: 'Cambay' }}
              component={Link}
              to={'/login'}
              endIcon={<AccountBoxSharpIcon />}
            >
              Login 
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </>
  )
}

export default NavBar