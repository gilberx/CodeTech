import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Button from '@mui/material/Button';
import Container from '@mui/system/Container';
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import UserContext from './Register/UserContext';


const Navbar = () => {

  const { user, setUser } = useContext(UserContext);
  const faviconPath = process.env.PUBLIC_URL + '/favicon.ico';
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const navigate = useNavigate();
  const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
  const pages = ['Join a Class', 'Courses', 'How it Works', 'About Us'];
  return (
    <div>
      <AppBar position="fixed" style={{backgroundColor: '#212121', 
        width: '80%', 
        borderRadius: '40px', 
        boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2)',
        left: '50%',
        transform: 'translateX(-50%)', 
        marginTop: '30px'}}>
        <Container maxWidth="100%" >
          <Toolbar disableGutters>
          <img
            src={faviconPath}
            alt="Favicon" onClick={() => navigate('/')}
            style={{ display: { xs: 'none', md: 'flex' }, 
            marginRight: 0, 
            height: '40px', 
            width: '40px', 
            marginRight: '10px',
            marginLeft: '-10px',cursor: 'pointer' }}
          />
            <Typography
              variant="h6"
              noWrap
              component="a"
              onClick={() => navigate('/')}
              sx={{
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'Inter, sans-serif',
                fontWeight: '600',
                color: 'inherit',
                fontSize: '25px',
                textDecoration: 'none',
                mr: 11,
                cursor: 'pointer'
              }}
            >
              CodeTech
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
            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {user !== null && user.role !== 'admin' && (
                <>
                  <Button
                    onClick={() => navigate('/joinclass')}
                    sx={{fontFamily: 'Inter, sans-serif',
                    color: 'inherit',
                    fontSize: '14px',
                    my: 2, 
                    color: 'white', 
                    display: 'block', 
                    mr: 1,
                    textTransform: 'none', 
                    borderRadius: '25px',
                    width: '125px',
                    height: '28px',
                    textTransform: 'none',
                    marginBottom: '20px' 
                    }}
                  >
                    Join a Class
                  </Button>
                  <Button
                    onClick={() => navigate('/Courses')}
                    sx={{fontFamily: 'Inter, sans-serif',
                    color: 'inherit',
                    fontSize: '14px',
                    my: 2, 
                    color: 'white', 
                    display: 'block', 
                    mr: 1,
                    textTransform: 'none', 
                    borderRadius: '25px',
                    width: '125px',
                    height: '28px',
                    textTransform: 'none',
                    marginBottom: '20px' 
                    }}
                  >
                    Courses
                  </Button>
                </>
              )}
                <Button
                  onClick={() => navigate('/helpcenter')}
                  sx={{fontFamily: 'Inter, sans-serif',
                  color: 'inherit',
                  fontSize: '14px',
                  my: 2, 
                  color: 'white', 
                  display: 'block', 
                  mr: 1,
                  textTransform: 'none', 
                  borderRadius: '25px',
                  width: '125px',
                  height: '28px',
                  textTransform: 'none',
                  marginBottom: '20px' }}
                >
                  How it Works
                </Button>
                <Button
                  onClick={() => navigate('/aboutus')}
                  sx={{fontFamily: 'Inter, sans-serif',
                  color: 'inherit',
                  fontSize: '14px',
                  my: 2, 
                  color: 'white', 
                  display: 'block', 
                  mr: 1,
                  textTransform: 'none', 
                  borderRadius: '25px',
                  width: '125px',
                  height: '28px',
                  textTransform: 'none',
                  marginBottom: '20px' }}
                >
                  About Us
                </Button>

                {user !==null && user.role === 'admin' && (
                  <>
                  <Button
                  onClick={() => navigate('/dashboard')}
                  sx={{fontFamily: 'Inter, sans-serif',
                  color: 'inherit',
                  fontSize: '14px',
                  my: 2, 
                  color: 'white', 
                  display: 'block', 
                  mr: 4,
                  textTransform: 'none', 
                  borderRadius: '25px',
                  width: '125px',
                  height: '28px',
                  textTransform: 'none',
                  marginBottom: '20px' }}
                >
                  Dashboard
                </Button>
                  </>
                )}
            </Box>
            {user !== null ? (
              // If user is not null, show these elements
              <>
                <Box>
                  <Button 
                    sx={{
                      my: 2,
                      backgroundColor: '#458C83',
                      color: 'white',
                      display: 'block',
                      borderRadius: '25px',
                      width: '125px',
                      height: '40px',
                      fontWeight: '800',
                      fontSize: 16
                    }}>
                    {user.role}
                  </Button>
                </Box>
                <Box
                  onClick={() => navigate('/userProfile')}
                  style={{ cursor: 'pointer' }}
                >
                  <img src="./ProfileLogo.png" alt="Profile" style={{ height: '50px', marginTop: 4 }} />
                </Box>
              </>
            ) : (
              <>
                <Box>
                  <Button onClick={() => navigate('/register')}
                    sx={{
                      color: 'white',
                      display: 'block',
                      mr: 2,
                      border: '2px solid white',
                      borderRadius: '25px',
                      width: '115px',
                      height: '40px',
                      textTransform: 'none',
                      fontSize: '14px'
                    }}>
                    Sign Up
                  </Button>
                </Box>
                <Box>
                  <Button onClick={() => navigate('/login')}
                    sx={{
                      my: 2,
                      backgroundColor: '#458C83',
                      color: 'white',
                      display: 'block',
                      borderRadius: '25px',
                      width: '115px',
                      height: '40px',
                      textTransform: 'none',
                      fontWeight: '800',
                      fontSize: 16
                    }}>
                    Login
                  </Button>
                </Box>
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Navbar;