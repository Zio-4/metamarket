import React, {useState, } from 'react'
import { AppBar, Box, Toolbar, Typography, Badge, IconButton, Button, ListItemIcon, List, ListItem, ListItemText  } from '@mui/material';
import StorefrontSharpIcon from '@mui/icons-material/StorefrontSharp';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import AccountBoxSharpIcon from '@mui/icons-material/AccountBoxSharp';
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate,} from 'react-router-dom'
import SellSharpIcon from '@mui/icons-material/SellSharp';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import LoginSharpIcon from '@mui/icons-material/LoginSharp';
import { Auth } from 'aws-amplify';
import { useAppSelector, useAppDispatch } from '../../Redux-Toolkit/reduxHooks'
import { selectCount } from '../../Redux-Toolkit/listingIDSlice'
import { removeCurrentUser, userState } from '../../Redux-Toolkit/userSlice'


const NavBar: React.FC = () => {
  let navigate = useNavigate()
  const idsInCart = useAppSelector(selectCount)
  const userInfo = useAppSelector(userState)
  const dispatch = useAppDispatch()
  const [mobileMenuState, setMobileMenuState] = useState(false)


  const setMenu = () => {
    setMobileMenuState(!mobileMenuState)
  }


  const navigateUser = (e: React.MouseEvent) => {
    let buttonClicked = (e.target as Element).textContent!.toLowerCase().replace(/\s/g, '');
    if (buttonClicked === 'sell') {
      navigate(`/listingform`)
    } else {
      // console.log("button clicked: ", buttonClicked)
      navigate(`/${buttonClicked}`, { state: `${buttonClicked}`})
    }
    setMobileMenuState(!mobileMenuState)
  }

  const signOutUser = async () => {
    try {
      let response = await Auth.signOut();
      localStorage.removeItem('userInfo')
      dispatch(removeCurrentUser())
      // signOutCognitoUser()
      console.log("response form signout: ", response)
      // remove user from login status
    } catch (error) {
        console.log('error signing out: ', error);
    }
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
                  <Badge badgeContent={idsInCart.length} color="warning">
                    <ShoppingCartSharpIcon />
                  </Badge>
                </ListItemIcon>
                <ListItemText
                  primary="Cart"
                />
              </ListItem>
              
              {!userInfo.username && <ListItem sx={{color: '#66FCF1'}} onClick={navigateUser}>
                <ListItemIcon sx={{color: '#66FCF1'}}>
                  <LoginSharpIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Sign In"
                />
              </ListItem>}
              {userInfo.username && <ListItem sx={{color: '#66FCF1'}} onClick={navigateUser}>
                <ListItemIcon sx={{color: '#66FCF1'}}>
                  <AccountBoxSharpIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Profile"
                />
              </ListItem>}
              {userInfo.username && <ListItem sx={{color: '#FF6666'}} onClick={signOutUser}>
                <ListItemIcon sx={{color: '#FF6666'}}>
                  <LogoutSharpIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Sign Out"
                />
              </ListItem>}

          </List>
      </div>
    </nav>

    {/* Desktop Menu */}

    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "#1F2833" }}>
        <Toolbar>

          <Typography
            variant="h5"
            noWrap
            component={Link}
            to={'/'}
            sx={{ color: "#66FCF1", fontFamily: 'MuseoModerno', textDecoration: 'none', flexGrow: 1 }}
          >
            metaMarket
          </Typography>

          <Box sx={{ display: { xs: 'none', md: 'block'}}}>
            <Button 
              sx={{ color: "#66FCF1", mr: 1}}
              component={Link}
              to={'/markets'}
              endIcon={<StorefrontSharpIcon />}
            >
              Markets 
            </Button>

            <Button 
              sx={{ color: "#66FCF1", mr: 1}}
              component={Link}
              to={'/listingform'}
              endIcon={<SellSharpIcon />}
            >
              Sell 
            </Button>

            <Button
              sx={{ color: "#66FCF1", mr: 1}}
              component={Link}
              to={'/cart'}
              endIcon={<Badge badgeContent={idsInCart.length} color="warning">
                          <ShoppingCartSharpIcon fontSize='small'/>
                        </Badge>}
            >
              Cart 
            </Button>

            {!userInfo.username && <Button 
              sx={{ color: "#66FCF1", mr: 1}}
              component={Link}
              to={'/signin'}
              endIcon={<LoginSharpIcon />}
              onClick={navigateUser}
            >
              Sign In
            </Button>}

            {userInfo.username && <Button 
              sx={{ color: "#66FCF1", mr: 1}}
              component={Link}
              to={'/profile'}
              endIcon={<AccountBoxSharpIcon />}
            >
              Profile
            </Button>}

            {userInfo.username && <Button 
              sx={{ color: "#FF6666", mr: 1}}
              component={Link}
              to={'/profile'}
              endIcon={<LogoutSharpIcon />}
              onClick={signOutUser}
            >
              Sign Out
            </Button>}
          </Box>

          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ display: { md: 'none'} }}
            onClick={setMenu}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  )
}

export default NavBar