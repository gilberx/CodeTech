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
import './Courses.css';
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
    <main class='courses-main-bg'>
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
          <img onClick={() => navigate('/')}
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
      <div style={{display:'flex', 
                    flexDirection:'column',
                    justifyContent:'center', 
                    alignItems:'center', 
                    paddingTop:'18vh'}}>
        <Typography variant='h4' style={{fontWeight:'800', 
                                        fontFamily:'Montserrat, sans-serif', 
                                        textAlign:'center', 
                                        color:'#F5FFFD'}}>
            Courses
        </Typography>
      </div>
      <div style={{display:'flex', flexDirection:'column'}}>
        <div style={{display:'flex', 
                    flexDirection: 'rows', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    paddingTop:'20vh',}}>
          <Paper sx={{ maxWidth: 270, 
                      borderRadius:'25px', 
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center', 
                      marginRight:'20px',
                      marginLeft:'50px',
                      height:290 }}>
              <img src='./BeginnerLogo.png' alt='icon' style={{width:'100vh', 
                                                              marginTop:'-10vh'}}/>
              <Button onClick={() => navigate('/Courses=BeginnerPage')} 
                      style={{backgroundColor:'#458C83', 
                              color:'#FFFFFF', 
                              borderRadius:'25px', 
                              width:'120px',
                              marginTop:'-18vh', 
                              marginBottom:'40px', 
                              fontSize:'15px', 
                              width:'150px', 
                              height:'45px', 
                              fontWeight:'600', 
                              textTransform:'none', 
                              fontFamily:'Montserrat, sans-serif'}}>Beginner</Button>
          </Paper>
          <Paper sx={{ maxWidth: 270, 
                      borderRadius:'25px', 
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center', 
                      marginRight:'40px', 
                      height:290, marginLeft:'20px' }}>
              <img src='./IntermediateLogo.png' alt='icon' style={{width:'90vh', marginTop:'-12vh'}}/>
              <Button onClick={() => navigate('/Courses=IntermediatePage')}
                     style={{backgroundColor:'#458C83', 
                              color:'#FFFFFF', 
                              borderRadius:'25px', 
                              width:'120px',marginTop:'-12vh', 
                              marginBottom:'30px', 
                              fontSize:'15px', 
                              width:'150px', 
                              height:'43px', 
                              fontWeight:'600', 
                              textTransform:'none', 
                              fontFamily:'Montserrat, sans-serif'}}>
                  Intermediate
              </Button>
          </Paper>
        </div>
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop:'25vh', height:'51vh'}}>
          <img src='/CoursesImage.png' style={{width:'100vh'}}/>
        </div>
        <div style={{marginBottom:'-100px'}}>
          <Box style={{maxWidth:'100%', height: '48vh', display:'flex', flexDirection:'rows', }}>
            <div style={{paddingTop:'20vh', paddingLeft:'15vh', paddingRight:'10vh'}}>
              <div style={{display: 'flex', flexDirection: 'row'}}>
                <img src={faviconPath} style={{height:"70px", width:"70px",}}/>
                <p style={{marginTop:'15px', marginLeft:'5px', fontSize:'35px', fontWeight:'600', fontFamily:'Montserrat, sans-serif', color: '#F0F0F0'}}>CodeTech</p>
              </div>
              <div>
                <p style={{color:'#F0F0F0', marginLeft:'20px'}}>Code learning just got better.</p>
              </div>
            </div>
            <Divider orientation="vertical" variant="middle" flexItem style={{backgroundColor: '#EDEDED', height: '33vh', marginTop:'90px'}} />
            <div style={{paddingTop:'15vh'}}>
              <div style={{display:'flex', flexDirection:'column', marginLeft:'20vh'}}>
                <p style={{marginBottom:'20px', fontSize:'19px', fontWeight:'600', color:'#F5FFFD'}}>Get in Touch</p>
                <div style={{display:'flex', flexDirection:'row'}}>
                  <img src="/foot1.png" alt="Icon" style={{height:'19px', width:'15px'}} />
                  <p style={{marginBottom:'20px', color:'#F5FFFD', marginLeft:'19px'}}>N. Bacalso Avenue, Cebu City, Cebu 6000</p>
                </div>
                <div style={{display:'flex', flexDirection:'row'}}>
                  <img src="/foot2.png" alt="Icon" style={{height:'19px', width:'15px'}} />
                  <p style={{marginBottom:'20px', color:'#F5FFFD', marginLeft:'19px'}}>+63 929 843 0999</p>
                </div>
                <div style={{display:'flex', flexDirection:'row'}}>
                  <img src="/foot3.png" alt="Icon" style={{height:'19px', width:'24px'}} />
                  <p style={{marginBottom:'20px', color:'#F5FFFD', marginLeft:'10px'}}>css@cit.edu</p>
                </div>
              </div>
            </div>
            <Divider orientation="vertical" variant="middle" flexItem style={{backgroundColor: '#EDEDED', height: '33vh', marginTop:'90px', marginLeft:'15vh'}} />
            <div style={{paddingTop:'15vh', marginLeft:'-5vh'}}>
              <div style={{display:'flex', flexDirection:'column', marginLeft:'20vh'}}>
                <p style={{marginBottom:'20px', fontSize:'19px', fontWeight:'600', color:'#F5FFFD'}}>Other Links</p>
                <div style={{display:'flex', flexDirection:'row'}}>
                  <img src="/foot1.png" alt="Icon" style={{height:'19px', width:'15px'}} />
                  <p style={{marginBottom:'20px', color:'#F5FFFD', marginLeft:'19px'}}>Terms and Conditions</p>
                </div>
                <div style={{display:'flex', flexDirection:'row'}}>
                  <img src="/foot2.png" alt="Icon" style={{height:'19px', width:'15px'}} />
                  <p style={{marginBottom:'20px', color:'#F5FFFD', marginLeft:'19px'}}>Help Center</p>
                </div>
              </div>
            </div>
          </Box>
        </div>
      </div>
    </main>
  );
}
export default Courses;