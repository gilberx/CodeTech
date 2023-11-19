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
import { useNavigate } from 'react-router-dom';
import './App.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const pages = ['Join a Class', 'Courses', 'How it Works', 'About Us'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const data = [
  {
    name: 'Introduction to C',
    img: '/public/18.png',
  },
  {
    name: 'Introduction to C#',
    img: '/public/19.png',
  },
  {
    name: 'Introduction to C++',
    img: '/public/17.png'
  },
  {
    name: 'C Intermediate',
    img: '/public/18'
  },
  {
    name: 'C# Intermediate',
    img: '/public/19.png'
  },
  {
    name: 'C++ Intermediate',
    img: '/public/17.png'
  }
]



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

  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
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
            height: '40px', 
            width: '40px', 
            marginRight: '10px',
            marginLeft: '-10px' }}
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
                fontSize: '25px',
                textDecoration: 'none',
                mr: 15,
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
                  {page}
                </Button>
              ))}
            </Box>
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
                <Button onClick={handleCloseNavMenu}
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
          </Toolbar>
        </Container>
      </AppBar>
    </div>
    <div style={{ marginTop: '180px',
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      flexDirection: 'column' 
    }}>
      <p style={{ color: '#353535', 
        fontFamily: 'Montserrat, sans-serif', 
        fontWeight: 800, fontSize: 100, 
        textAlign: 'center', 
      }}>
        Code learning<br></br>
        just got better!
      </p>
      <p style={{ color: '#353535', 
        fontFamily: 'Inter, sans-serif', 
        fontSize: 39, 
        textAlign: 'center', 
        marginTop: '10px' 
      }}>
      Empowering coders, one lesson at a time.<br></br>Join us! It's free.
      </p>
    </div>
    <div style={{marginTop: '90px',
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      marginBottom: '10px'
    }}>
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
          <div style={{ maxWidth: '100%',marginTop: '10px' }}>
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
            <Paper elevation={2} style={{width: '300px',backgroundColor: '#474747', color:'white',  marginLeft: '20px',maginTop: '20px', paddingLeft:'30px', fontSize: '20px', fontFamily: 'Montserrat, sans-serif', paddingTop: '20px', borderRadius:'20px'}}>
                  Unlocks your Potential
            <Divider style={{backgroundColor: '#EDEDED'}}/>
            </Paper>
            <Paper elevation={2} style={{width: '300px',backgroundColor: '#458C83', color:'white',marginLeft: '20vh',maginTop: '20px', paddingLeft:'30px', fontSize: '20px', fontFamily: 'Montserrat, sans-serif', paddingTop: '20px', borderRadius:'20px'}}>
                  Interactive Learning <br></br>Experience
            <Divider style={{backgroundColor: '#EDEDED'}}/>
            </Paper>
            <Paper elevation={2} style={{width: '300px',backgroundColor: '#474747', color:'white', marginLeft: '20vh',maginTop: '20px', paddingLeft:'30px', fontSize: '20px', fontFamily: 'Montserrat, sans-serif', paddingTop: '20px', borderRadius:'20px'}}>
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
      <div style={{ marginTop: '20px' }}>
        <Slider {...settings}>
          {data.map((d) => (
            <div key={d.name} style={{ backgroundColor: 'white', height: '450px', color: 'black', borderRadius: 'xl' }}>
              <div style={{ height: '56px', backgroundColor: 'indigo-500', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 'xl' }}>
                <img src={d.img} alt="" style={{ height: '44px', width: '44px', borderRadius: 'full' }} />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '4px', padding: '4px' }}>
                <p style={{ fontSize: 'xl', fontWeight: 'semibold' }}>{d.name}</p>
                <p style={{ textAlign: 'center' }}>{d.review}</p>
                <button style={{ backgroundColor: 'indigo-500', color: 'white', fontSize: 'lg', padding: '1px 6px', borderRadius: 'xl' }}>Read More</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  </div>
  );
}
export default ResponsiveAppBar;
