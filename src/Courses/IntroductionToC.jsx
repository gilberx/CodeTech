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
import './Intro.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';


const pages = ['Join a Class', 'Courses', 'How it Works', 'About Us'];

function Courses() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const faviconPath = process.env.PUBLIC_URL + '/favicon.ico';
  const [isDrawerOpen1, setDrawerOpen1] = React.useState(false);
  const [isDrawerOpen2, setDrawerOpen2] = React.useState(false);


  const toggleDrawer1 = () => {
    setDrawerOpen1(!isDrawerOpen1);
  };

  const toggleDrawer2 = () => {
    setDrawerOpen2(!isDrawerOpen2);
  };

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

  return (
    <div class='introC'>
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
              onClick={() => navigate('/')}
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
                <Button
                  onClick={() => navigate('/register')}
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
                  mr: 4,
                  textTransform: 'none', 
                  borderRadius: '25px',
                  width: '125px',
                  height: '28px',
                  textTransform: 'none',
                  marginBottom: '20px' }}
                >
                  Courses
                </Button>
                <Button
                  onClick={() => navigate('/register')}
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
                  How it Works
                </Button>
                <Button
                  onClick={() => navigate('/register')}
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
                  About Us
                </Button>
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
          </Toolbar>
        </Container>
      </AppBar>
      </div>
      <div style={{marginTop:'130px', display:'flex', justifyContent:'center', alignItems:'center'}}>
        <Paper style={{width:'85vh',
        height:'180px', 
        display:'flex', 
        flexDirection:'row', 
        backgroundColor:'#E2F8F3', 
        borderRadius:'15px', paddingTop:'20px'}}>
          <div style={{maxWidth:'25%', paddingTop:'15px', marginLeft:'-20px'}}>
            <img src="/18.png" style={{height:'100px'}}/>
          </div>
          <div style={{maxWidth:'70%', paddingLeft:'20px'}}>
            <Paper style={{borderRadius:'25px', backgroundColor:'#6FDDCF', width:'270px', height:'45px'}}>
                <p style={{fontSize:'25px', 
                fontWeight:'800', 
                fontFamily:'Montserrat, sans-serif', 
                textTransform:'none', color:'black', textAlign:'center', paddingTop:'7px'}}>Introduction to C</p>
            </Paper>
            <p style={{fontFamily:'Montserrat, sans-serif', fontSize:'15px', paddingTop:'10px'}}>C is a general-purpose programming language that is 
              efficient, portable, and powerful. It is used to develop a 
              wide variety of applications, including operating 
              systems, embedded systems, and system software.</p>
          </div>  
        </Paper>
      </div>
      <div style={{
        marginTop:'20px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
      }}>
        <Button style={{fontWeight:'800', 
        fontFamily:'Montserrat, sans-serif', 
        backgroundColor:'#458C83', 
        color:'#FFFFFF',
        width:'200px',
        fontSize:'20px',
        borderRadius:'30px'}}>Take Course</Button>
      </div>
      <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column', marginTop:'50px'}}>
        <button onClick={toggleDrawer1} style={{
          width:'400px', backgroundColor:'transparent', fontSize:'20px', border:'0px solid black'
        }}>Basic Concepts</button>
        <Divider variant="inset" style={{backgroundColor: '#000000', marginTop:'10px'}}/>
        {isDrawerOpen1 && (
          <div>
            <button style={{ display: 'block', marginBottom: '5px' }}>Button 1</button>
            <button style={{ display: 'block', marginBottom: '5px' }}>Button 2</button>
            <button style={{ display: 'block' }}>Button 3</button>
          </div>
        )}
      </div>

      <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
        <button onClick={toggleDrawer2} style={{
          width:'400px', backgroundColor:'transparent', fontSize:'20px', border:'0px solid black'
        }}>Toggle Drawer</button>
        {isDrawerOpen2 && (
          <div>
            <button style={{ display: 'block', marginBottom: '5px' }}>Button 1</button>
            <button style={{ display: 'block', marginBottom: '5px' }}>Button 2</button>
            <button style={{ display: 'block' }}>Button 3</button>
          </div>
        )}
      </div>
    </div>
  );
}
export default Courses;