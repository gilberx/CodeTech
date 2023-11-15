import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';

const pages = ['Join a Class', 'Courses', 'How it Works', 'About Us'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const faviconPath = process.env.PUBLIC_URL + '/favicon.ico';

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div>
      <div>
      <AppBar position="fixed" style={{backgroundColor: '#212121', 
        width: '80%', 
        borderRadius: '40px', 
        boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2)',
        left: '50%',
        transform: 'translateX(-50%)', 
        marginTop: '30px'}}>
        <Container maxWidth="100%">
          <Toolbar disableGutters>
          <img
            src={faviconPath}
            alt="Favicon"
            style={{ display: { xs: 'none', md: 'flex' }, 
            marginRight: 0, 
            height: '50px', 
            width: '50px', 
            marginRight: '10px' }}
          />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'Inter, sans-serif',
                fontWeight: '600',
                color: 'inherit',
                fontSize: '30px',
                textDecoration: 'none',
                mr: 60,
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
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'Inter, sans-serif',
                fontWeight: '600',
                color: 'inherit',
                fontSize: '30px',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              CodeTech
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{fontFamily: 'Inter, sans-serif',
                  color: 'inherit',
                  fontSize: '18px',
                  my: 2, 
                  color: 'white', 
                  display: 'block', 
                  mr: 6,
                  textTransform: 'none', 
                  borderRadius: '25px',
                  width: '150px',
                  height: '50px',
                  textTransform: 'none' }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Box>
                <Button onClick={handleCloseNavMenu}
                sx={{
                  color: 'white',
                  display: 'block',
                  mr: 4,
                  border: '2px solid white',
                  borderRadius: '25px',
                  width: '120px',
                  height: '50px',
                  textTransform: 'none',
                  fontSize: 16
                }}>
                  Sign Up
                </Button>
            </Box>
            <Box>
                <Button onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  backgroundColor: '#458C83',
                  color: 'white',
                  display: 'block',
                  borderRadius: '25px',
                  width: '120px',
                  height: '50px',
                  textTransform: 'none',
                  fontWeight: '800',
                  fontSize: 16
                }}>
                  Login
                </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
    <div style={{ marginTop: '50px',display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <p style={{ color: '#353535', fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: 120, textAlign: 'center' }}>
        Code learning<br></br>
        just got better!
      </p>
      <p style={{ color: '#353535', fontFamily: 'Inter, sans-serif', fontSize: 39, textAlign: 'center', marginTop: '-60px' }}>
      Empowering coders, one lesson at a time.<br></br>Join us! It's free.
      </p>
    </div>
    <div style={{marginTop: '200px',display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '80px'}}>
      <Button style={{
                  my: 2,
                  backgroundColor: '#F5FFFD',
                  color: '#212121',
                  display: 'block',
                  borderRadius: '35px',
                  width: '300px',
                  height: '70px', 
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                  fontSize: 22,
                  textTransform: 'none',
                  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)'
                }}>
        Start learning now!
      </Button>
    </div>
    <div>
        <Box sx={{ marginTop: '30px',bgcolor: '#212121', height: 758, borderRadius: '40px', paddingLeft: '80px', paddingTop: '60px', paddingRight: '80px' }}>
          <p style={{color: 'rgba(255, 255, 255, 0.2)', marginLeft: '30px', fontSize: '28px', fontFamily: 'Montserrat, sans-serif', fontWeight: '500'}}>
          What is <t style={{color: '#458C83', fontSize: '31px'}}>CodeTech </t>?</p>
          <div style={{ maxWidth: '90%',marginTop: '10px' }}>
            <Divider variant="inset" style={{backgroundColor: '#EDEDED'}}/>
          </div>
          <div style={{ position: 'absolute', marginLeft: '172vh', marginTop: '-50px'}}>
            <Button style={{backgroundColor: '#458C83',color: '#F5FFFD',borderRadius: '50px', fontSize: '58px', width: '100px', height: '100px', fontWeight: 'semi-bold'}}>?</Button>
          </div>
          <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 1,
              width: 400,
              height: 300, 
              marginTop:'10vh',
            },
          }}>
            <Paper elevation={2} style={{backgroundColor: '#474747', color:'white', marginLeft: '35px',maginTop: '20px', paddingLeft:'30px', fontSize: '28px', fontFamily: 'Montserrat, sans-serif', paddingTop: '10px', borderRadius:'20px'}}>
                  Unlocks your Potential
            <Divider style={{backgroundColor: '#EDEDED'}}/>
            </Paper>
            <Paper elevation={2} style={{backgroundColor: '#458C83', color:'white',marginLeft: '25vh',maginTop: '20px', paddingLeft:'30px', fontSize: '28px', fontFamily: 'Montserrat, sans-serif', paddingTop: '10px', borderRadius:'20px'}}>
                  Interactive Learning <br></br>Experience
            <Divider style={{backgroundColor: '#EDEDED'}}/>
            </Paper>
            <Paper elevation={2} style={{backgroundColor: '#474747', color:'white', marginLeft: '25vh',maginTop: '20px', paddingLeft:'30px', fontSize: '28px', fontFamily: 'Montserrat, sans-serif', paddingTop: '10px', borderRadius:'20px'}}>
                  Track, Achieve, Succeed
            <Divider style={{backgroundColor: '#EDEDED'}}/>
            </Paper>

          </Box>
        </Box>
    </div>
    <div style={{paddingLeft: '10vh', marginBottom: '10vh'}}>
          <p style={{fontFamily:'Montserrat, sans-serif', fontSize: '44px', color: 'black'}}>Dive into <t style={{fontFamily:'Montserrat, sans-serif', fontSize: '44px', fontWeight: 'Bold', color:'#458C83'}}>CodeTech's<br></br>Courses!</t></p>
    </div>
    <div>
    <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 1,
              width: 300,
              height: 400, 
              marginTop:'10vh',
            },
            alignItems: 'center'
          }}>
              <Button style={{backgroundColor: '#F1F1F1', color:'#353535', marginLeft: '10px',maginTop: '20px', fontSize: '28px', fontFamily: 'Montserrat, sans-serif', paddingTop: '10px', border: '10px solid white', borderRadius:'30px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)'}}>
                    Introduction to C
              </Button>
              <Button  style={{backgroundColor: '#F1F1F1', color:'#353535',marginLeft: '10px',maginTop: '20px', fontSize: '28px', fontFamily: 'Montserrat, sans-serif', paddingTop: '10px',  border: '10px solid white', borderRadius:'30px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)'}}>
                    Introduction to C++
              </Button>
              <Button  style={{backgroundColor: '#F1F1F1', color:'#353535', marginLeft: '10px',maginTop: '20px', fontSize: '28px', fontFamily: 'Montserrat, sans-serif', paddingTop: '10px',  border: '10px solid white', borderRadius:'30px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)'}}>
                    Introduction to C#
              </Button>
              <Button style={{backgroundColor: '#F1F1F1', color:'#353535', marginLeft: '10px',maginTop: '20px', fontSize: '28px', fontFamily: 'Montserrat, sans-serif', paddingTop: '10px',  border: '10px solid white', borderRadius:'30px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)'}}>
                    Introduction to C#
              </Button>
              <Button style={{backgroundColor: '#F1F1F1', color:'#353535', marginLeft: '10px',maginTop: '20px', fontSize: '28px', fontFamily: 'Montserrat, sans-serif', paddingTop: '10px',  border: '10px solid white', borderRadius:'30px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)'}}>
                    Introduction to C#
              </Button>
          </Box>
    </div>
  </div>
  );
}
export default ResponsiveAppBar;
