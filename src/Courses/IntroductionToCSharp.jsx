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
import { useEffect } from 'react'


const pages = ['Join a Class', 'Courses', 'How it Works', 'About Us'];

function Courses() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const faviconPath = process.env.PUBLIC_URL + '/favicon.ico';
  const [isDrawerOpen1, setDrawerOpen1] = React.useState(false);
  const [isDrawerOpen2, setDrawerOpen2] = React.useState(false);
  const [isDrawerOpen3, setDrawerOpen3] = React.useState(false);
  const [isDrawerOpen4, setDrawerOpen4] = React.useState(false);
  const [isDrawerOpen5, setDrawerOpen5] = React.useState(false);
  const [isDrawerOpen6, setDrawerOpen6] = React.useState(false);


  const toggleDrawer1 = () => {
    setDrawerOpen1(!isDrawerOpen1);
  };

  const toggleDrawer2 = () => {
    setDrawerOpen2(!isDrawerOpen2);
  };

  const toggleDrawer3 = () => {
    setDrawerOpen3(!isDrawerOpen3);
  };

  const toggleDrawer4 = () => {
    setDrawerOpen4(!isDrawerOpen4);
  };

  const toggleDrawer5 = () => {
    setDrawerOpen5(!isDrawerOpen5);
  };

  const toggleDrawer6 = () => {
    setDrawerOpen6(!isDrawerOpen6);
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

  useEffect(() => {
    document.title = "CodeTech";
  }, []);

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
            <img src="/19.png" style={{height:'110px'}}/>
          </div>
          <div style={{maxWidth:'70%', paddingLeft:'20px'}}>
            <Paper style={{borderRadius:'25px', backgroundColor:'#6FDDCF', width:'270px', height:'45px'}}>
                <p style={{fontSize:'25px', 
                fontWeight:'800', 
                fontFamily:'Montserrat, sans-serif', 
                textTransform:'none', color:'black', textAlign:'center', paddingTop:'7px'}}>Introduction to C#</p>
            </Paper>
            <p style={{fontFamily:'Montserrat, sans-serif', fontSize:'15px', paddingTop:'10px'}}>C# is a general-purpose, object-oriented programming 
            language used to develop a wide variety of 
            applications, including desktop, web, mobile, and
            game applications.</p>
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
        borderRadius:'30px',
        boxShadow:'0px 2px 4px rgba(0,0,0,0.2)'}}>Take Course</Button>
      </div>
      <div style={{display:'flex', 
      justifyContent:'center', 
      alignItems:'center', 
      flexDirection:'column', 
      marginTop:'50px'}}>
        <button class='buttoncontainer' onClick={toggleDrawer1}>
          <img src='./topiclogo.png' style={{height:'35px', marginLeft:'-10px'}}/>
          Getting Started
          <img src='./dropdownlogo.png' style={{height:'30px', marginLeft:'156px'}}/>
        </button>
        {isDrawerOpen1 && (
          <div>
            <Paper class='papercontainer'>
              <div style={{display:'flex', flexDirection:'row'}}>
                <div style={{display:'flex', justifyContent:'left', alignItems:'center', maxWidth:'80%'}}>
                  <img src='./lessonlogo.png' style={{height:'30px'}}/>
                  <div style={{display:'flex', flexDirection:'column'}}>
                    <p>Lessons</p>What is C?
                  </div>
                </div>
                <div style={{display:'flex', justifyContent:'right', alignItems:'center'}}>
                  <img src='lessonlocklogo.png' style={{height:'30px', marginLeft:'210px'}}/>
                </div>
              </div>
            </Paper>
            <Paper class='papercontainer'>
              <div style={{display:'flex', flexDirection:'row'}}>
                <div style={{display:'flex', justifyContent:'left', alignItems:'center', maxWidth:'80%'}}>
                  <img src='./lessonlogo.png' style={{height:'30px'}}/>
                  <div style={{display:'flex', flexDirection:'column'}}>
                    <p>Lessons</p>Hello World!
                  </div>
                </div> 
                <div style={{display:'flex', justifyContent:'right', alignItems:'center'}}>
                  <img src='lessonlocklogo.png' style={{height:'30px', marginLeft:'198px'}}/> 
                </div>
              </div>
            </Paper>
            <Paper class='papercontainer'>
              <div style={{display:'flex', flexDirection:'row'}}>
                <div style={{display:'flex', justifyContent:'left', alignItems:'center', maxWidth:'80%'}}>
                  <img src='./lessonlogo.png' style={{height:'30px'}}/>
                  <div style={{display:'flex', flexDirection:'column'}}>
                    <p>Lessons</p>Data Types
                  </div>
                </div>
                <div style={{display:'flex', justifyContent:'right', alignItems:'center'}}>
                  <img src='lessonlocklogo.png' style={{height:'30px', marginLeft:'207px'}}/>
                </div>
              </div>
            </Paper>
            <Paper class='papercontainer'>
              <div style={{display:'flex', flexDirection:'row'}}>
                <div style={{display:'flex', justifyContent:'left', alignItems:'center', maxWidth:'80%'}}>
                  <img src='./lessonlogo.png' style={{height:'30px'}}/>
                  <div style={{display:'flex', flexDirection:'column'}}>
                    <p>Lessons</p>Input & Output
                  </div>
                </div>
                <div style={{display:'flex', justifyContent:'right', alignItems:'center'}}>
                  <img src='lessonlocklogo.png' style={{height:'30px', marginLeft:'176px'}}/>
                </div>
              </div>
            </Paper>
            <Paper class='papercontainer'>
              <div style={{display:'flex', flexDirection:'row'}}>
                <div style={{display:'flex', justifyContent:'left', alignItems:'center', maxWidth:'80%'}}>
                  <img src='./lessonlogo.png' style={{height:'30px'}}/>
                  <div style={{display:'flex', flexDirection:'column'}}>
                    <p>Lessons</p>Comments
                  </div>
                </div>
                <div style={{display:'flex', justifyContent:'right', alignItems:'center'}}>
                  <img src='lessonlocklogo.png' style={{height:'30px', marginLeft:'209px'}}/>
                </div>
              </div>
            </Paper>
            <Paper class='papercontainer'>
              <div style={{display:'flex', flexDirection:'row'}}>
                <div style={{display:'flex', justifyContent:'left', alignItems:'center', maxWidth:'80%'}}>
                  <img src='./lessonlogo.png' style={{height:'30px'}}/>
                  <div style={{display:'flex', flexDirection:'column'}}>
                    <p>Lessons</p>Operators
                    </div>
                </div> 
                <div style={{display:'flex', justifyContent:'right', alignItems:'center'}}>   
                  <img src='lessonlocklogo.png' style={{height:'30px', marginLeft:'217px'}}/>
                </div>
              </div>
            </Paper>
            <Paper class='papercontainer'>
              <div style={{display:'flex', flexDirection:'row'}}>
                <div style={{display:'flex', justifyContent:'left', alignItems:'center', maxWidth:'80%'}}>
                  <img src='./lessonlogo.png' style={{height:'30px'}}/>
                  <div style={{display:'flex', flexDirection:'column', color:'red'}}>
                    <p>Lessons</p>Module Quiz
                  </div>
                </div>
                <div style={{display:'flex', justifyContent:'right', alignItems:'center'}}>
                  <img src='lessonlocklogo.png' style={{height:'30px', marginLeft:'196px'}}/>
                  </div>
              </div>
            </Paper> 
          </div>
        )}
      </div>
      <div style={{display:'flex', 
      justifyContent:'center', 
      alignItems:'center', 
      flexDirection:'column'}}>
        <button class='buttoncontainer' onClick={toggleDrawer2}>
          <img src='./topiclogo.png' style={{height:'35px', marginLeft:'-10px'}}/>
          Operators & Strings
          <img src='./dropdownlogo.png' style={{height:'30px', marginLeft:'115px'}}/>
        </button>
        {isDrawerOpen2 && (
          <div>
          <Paper class='papercontainer'>
            <div style={{display:'flex', flexDirection:'row'}}>
              <div style={{display:'flex', justifyContent:'left', alignItems:'center', maxWidth:'80%'}}>
                <img src='./lessonlogo.png' style={{height:'30px'}}/>
                <div style={{display:'flex', flexDirection:'column'}}>
                  <p>Lessons</p>What is C?
                </div>
              </div>
              <div style={{display:'flex', justifyContent:'right', alignItems:'center'}}>
                <img src='lessonlocklogo.png' style={{height:'30px', marginLeft:'210px'}}/>
              </div>
            </div>
          </Paper>
          <Paper class='papercontainer'>
            <div style={{display:'flex', flexDirection:'row'}}>
              <div style={{display:'flex', justifyContent:'left', alignItems:'center', maxWidth:'80%'}}>
                <img src='./lessonlogo.png' style={{height:'30px'}}/>
                <div style={{display:'flex', flexDirection:'column'}}>
                  <p>Lessons</p>Hello World!
                </div>
              </div> 
              <div style={{display:'flex', justifyContent:'right', alignItems:'center'}}>
                <img src='lessonlocklogo.png' style={{height:'30px', marginLeft:'198px'}}/> 
              </div>
            </div>
          </Paper>
          <Paper class='papercontainer'>
            <div style={{display:'flex', flexDirection:'row'}}>
              <div style={{display:'flex', justifyContent:'left', alignItems:'center', maxWidth:'80%'}}>
                <img src='./lessonlogo.png' style={{height:'30px'}}/>
                <div style={{display:'flex', flexDirection:'column'}}>
                  <p>Lessons</p>Data Types
                </div>
              </div>
              <div style={{display:'flex', justifyContent:'right', alignItems:'center'}}>
                <img src='lessonlocklogo.png' style={{height:'30px', marginLeft:'207px'}}/>
              </div>
            </div>
          </Paper>
          <Paper class='papercontainer'>
            <div style={{display:'flex', flexDirection:'row'}}>
              <div style={{display:'flex', justifyContent:'left', alignItems:'center', maxWidth:'80%'}}>
                <img src='./lessonlogo.png' style={{height:'30px'}}/>
                <div style={{display:'flex', flexDirection:'column'}}>
                  <p>Lessons</p>Input & Output
                </div>
              </div>
              <div style={{display:'flex', justifyContent:'right', alignItems:'center'}}>
                <img src='lessonlocklogo.png' style={{height:'30px', marginLeft:'176px'}}/>
              </div>
            </div>
          </Paper>
          <Paper class='papercontainer'>
            <div style={{display:'flex', flexDirection:'row'}}>
              <div style={{display:'flex', justifyContent:'left', alignItems:'center', maxWidth:'80%'}}>
                <img src='./lessonlogo.png' style={{height:'30px'}}/>
                <div style={{display:'flex', flexDirection:'column'}}>
                  <p>Lessons</p>Comments
                </div>
              </div>
              <div style={{display:'flex', justifyContent:'right', alignItems:'center'}}>
                <img src='lessonlocklogo.png' style={{height:'30px', marginLeft:'209px'}}/>
              </div>
            </div>
          </Paper>
          <Paper class='papercontainer'>
            <div style={{display:'flex', flexDirection:'row'}}>
              <div style={{display:'flex', justifyContent:'left', alignItems:'center', maxWidth:'80%'}}>
                <img src='./lessonlogo.png' style={{height:'30px'}}/>
                <div style={{display:'flex', flexDirection:'column'}}>
                  <p>Lessons</p>Operators
                  </div>
              </div> 
              <div style={{display:'flex', justifyContent:'right', alignItems:'center'}}>   
                <img src='lessonlocklogo.png' style={{height:'30px', marginLeft:'217px'}}/>
              </div>
            </div>
          </Paper>
          <Paper class='papercontainer'>
            <div style={{display:'flex', flexDirection:'row'}}>
              <div style={{display:'flex', justifyContent:'left', alignItems:'center', maxWidth:'80%'}}>
                <img src='./lessonlogo.png' style={{height:'30px'}}/>
                <div style={{display:'flex', flexDirection:'column', color:'red'}}>
                  <p>Lessons</p>Module Quiz
                </div>
              </div>
              <div style={{display:'flex', justifyContent:'right', alignItems:'center'}}>
                <img src='lessonlocklogo.png' style={{height:'30px', marginLeft:'196px'}}/>
                </div>
            </div>
          </Paper> 
        </div>
        )}
      </div>
      <div style={{display:'flex', 
      justifyContent:'center', 
      alignItems:'center', 
      flexDirection:'column'}}>
        <button class='buttoncontainer' onClick={toggleDrawer3}>
          <img src='./topiclogo.png' style={{height:'35px', marginLeft:'-10px'}}/>
          Decision Making
          <img src='./dropdownlogo.png' style={{height:'30px', marginLeft:'144px'}}/>
        </button>
        {isDrawerOpen3 && (
          <div>
          <Paper class='papercontainer'>
            <div style={{display:'flex', flexDirection:'row'}}>
              <div style={{display:'flex', justifyContent:'left', alignItems:'center', maxWidth:'80%'}}>
                <img src='./lessonlogo.png' style={{height:'30px'}}/>
                <div style={{display:'flex', flexDirection:'column'}}>
                  <p>Lessons</p>What is C?
                </div>
              </div>
              <div style={{display:'flex', justifyContent:'right', alignItems:'center'}}>
                <img src='lessonlocklogo.png' style={{height:'30px', marginLeft:'210px'}}/>
              </div>
            </div>
          </Paper>
          <Paper class='papercontainer'>
            <div style={{display:'flex', flexDirection:'row'}}>
              <div style={{display:'flex', justifyContent:'left', alignItems:'center', maxWidth:'80%'}}>
                <img src='./lessonlogo.png' style={{height:'30px'}}/>
                <div style={{display:'flex', flexDirection:'column'}}>
                  <p>Lessons</p>Hello World!
                </div>
              </div> 
              <div style={{display:'flex', justifyContent:'right', alignItems:'center'}}>
                <img src='lessonlocklogo.png' style={{height:'30px', marginLeft:'198px'}}/> 
              </div>
            </div>
          </Paper>
          <Paper class='papercontainer'>
            <div style={{display:'flex', flexDirection:'row'}}>
              <div style={{display:'flex', justifyContent:'left', alignItems:'center', maxWidth:'80%'}}>
                <img src='./lessonlogo.png' style={{height:'30px'}}/>
                <div style={{display:'flex', flexDirection:'column'}}>
                  <p>Lessons</p>Data Types
                </div>
              </div>
              <div style={{display:'flex', justifyContent:'right', alignItems:'center'}}>
                <img src='lessonlocklogo.png' style={{height:'30px', marginLeft:'207px'}}/>
              </div>
            </div>
          </Paper>
          <Paper class='papercontainer'>
            <div style={{display:'flex', flexDirection:'row'}}>
              <div style={{display:'flex', justifyContent:'left', alignItems:'center', maxWidth:'80%'}}>
                <img src='./lessonlogo.png' style={{height:'30px'}}/>
                <div style={{display:'flex', flexDirection:'column'}}>
                  <p>Lessons</p>Input & Output
                </div>
              </div>
              <div style={{display:'flex', justifyContent:'right', alignItems:'center'}}>
                <img src='lessonlocklogo.png' style={{height:'30px', marginLeft:'176px'}}/>
              </div>
            </div>
          </Paper>
          <Paper class='papercontainer'>
            <div style={{display:'flex', flexDirection:'row'}}>
              <div style={{display:'flex', justifyContent:'left', alignItems:'center', maxWidth:'80%'}}>
                <img src='./lessonlogo.png' style={{height:'30px'}}/>
                <div style={{display:'flex', flexDirection:'column'}}>
                  <p>Lessons</p>Comments
                </div>
              </div>
              <div style={{display:'flex', justifyContent:'right', alignItems:'center'}}>
                <img src='lessonlocklogo.png' style={{height:'30px', marginLeft:'209px'}}/>
              </div>
            </div>
          </Paper>
          <Paper class='papercontainer'>
            <div style={{display:'flex', flexDirection:'row'}}>
              <div style={{display:'flex', justifyContent:'left', alignItems:'center', maxWidth:'80%'}}>
                <img src='./lessonlogo.png' style={{height:'30px'}}/>
                <div style={{display:'flex', flexDirection:'column'}}>
                  <p>Lessons</p>Operators
                  </div>
              </div> 
              <div style={{display:'flex', justifyContent:'right', alignItems:'center'}}>   
                <img src='lessonlocklogo.png' style={{height:'30px', marginLeft:'217px'}}/>
              </div>
            </div>
          </Paper>
          <Paper class='papercontainer'>
            <div style={{display:'flex', flexDirection:'row'}}>
              <div style={{display:'flex', justifyContent:'left', alignItems:'center', maxWidth:'80%'}}>
                <img src='./lessonlogo.png' style={{height:'30px'}}/>
                <div style={{display:'flex', flexDirection:'column', color:'red'}}>
                  <p>Lessons</p>Module Quiz
                </div>
              </div>
              <div style={{display:'flex', justifyContent:'right', alignItems:'center'}}>
                <img src='lessonlocklogo.png' style={{height:'30px', marginLeft:'196px'}}/>
                </div>
            </div>
          </Paper> 
        </div>
        )}
      </div>
      <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
      <button class='buttoncontainer' onClick={toggleDrawer4}>
          <img src='./topiclogo.png' style={{height:'35px', marginLeft:'-10px'}}/>
          Loops
          <img src='./dropdownlogo.png' style={{height:'30px', marginLeft:'236px'}}/>
        </button>
        {isDrawerOpen4 && (
          <div>
          <Paper class='papercontainer'>
            <div style={{display:'flex', flexDirection:'row'}}>
              <div style={{display:'flex', justifyContent:'left', alignItems:'center', maxWidth:'80%'}}>
                <img src='./lessonlogo.png' style={{height:'30px'}}/>
                <div style={{display:'flex', flexDirection:'column'}}>
                  <p>Lessons</p>What is C?
                </div>
              </div>
              <div style={{display:'flex', justifyContent:'right', alignItems:'center'}}>
                <img src='lessonlocklogo.png' style={{height:'30px', marginLeft:'210px'}}/>
              </div>
            </div>
          </Paper>
          <Paper class='papercontainer'>
            <div style={{display:'flex', flexDirection:'row'}}>
              <div style={{display:'flex', justifyContent:'left', alignItems:'center', maxWidth:'80%'}}>
                <img src='./lessonlogo.png' style={{height:'30px'}}/>
                <div style={{display:'flex', flexDirection:'column'}}>
                  <p>Lessons</p>Hello World!
                </div>
              </div> 
              <div style={{display:'flex', justifyContent:'right', alignItems:'center'}}>
                <img src='lessonlocklogo.png' style={{height:'30px', marginLeft:'198px'}}/> 
              </div>
            </div>
          </Paper>
          <Paper class='papercontainer'>
            <div style={{display:'flex', flexDirection:'row'}}>
              <div style={{display:'flex', justifyContent:'left', alignItems:'center', maxWidth:'80%'}}>
                <img src='./lessonlogo.png' style={{height:'30px'}}/>
                <div style={{display:'flex', flexDirection:'column'}}>
                  <p>Lessons</p>Data Types
                </div>
              </div>
              <div style={{display:'flex', justifyContent:'right', alignItems:'center'}}>
                <img src='lessonlocklogo.png' style={{height:'30px', marginLeft:'207px'}}/>
              </div>
            </div>
          </Paper>
          <Paper class='papercontainer'>
            <div style={{display:'flex', flexDirection:'row'}}>
              <div style={{display:'flex', justifyContent:'left', alignItems:'center', maxWidth:'80%'}}>
                <img src='./lessonlogo.png' style={{height:'30px'}}/>
                <div style={{display:'flex', flexDirection:'column'}}>
                  <p>Lessons</p>Input & Output
                </div>
              </div>
              <div style={{display:'flex', justifyContent:'right', alignItems:'center'}}>
                <img src='lessonlocklogo.png' style={{height:'30px', marginLeft:'176px'}}/>
              </div>
            </div>
          </Paper>
          <Paper class='papercontainer'>
            <div style={{display:'flex', flexDirection:'row'}}>
              <div style={{display:'flex', justifyContent:'left', alignItems:'center', maxWidth:'80%'}}>
                <img src='./lessonlogo.png' style={{height:'30px'}}/>
                <div style={{display:'flex', flexDirection:'column'}}>
                  <p>Lessons</p>Comments
                </div>
              </div>
              <div style={{display:'flex', justifyContent:'right', alignItems:'center'}}>
                <img src='lessonlocklogo.png' style={{height:'30px', marginLeft:'209px'}}/>
              </div>
            </div>
          </Paper>
          <Paper class='papercontainer'>
            <div style={{display:'flex', flexDirection:'row'}}>
              <div style={{display:'flex', justifyContent:'left', alignItems:'center', maxWidth:'80%'}}>
                <img src='./lessonlogo.png' style={{height:'30px'}}/>
                <div style={{display:'flex', flexDirection:'column'}}>
                  <p>Lessons</p>Operators
                  </div>
              </div> 
              <div style={{display:'flex', justifyContent:'right', alignItems:'center'}}>   
                <img src='lessonlocklogo.png' style={{height:'30px', marginLeft:'217px'}}/>
              </div>
            </div>
          </Paper>
          <Paper class='papercontainer'>
            <div style={{display:'flex', flexDirection:'row'}}>
              <div style={{display:'flex', justifyContent:'left', alignItems:'center', maxWidth:'80%'}}>
                <img src='./lessonlogo.png' style={{height:'30px'}}/>
                <div style={{display:'flex', flexDirection:'column', color:'red'}}>
                  <p>Lessons</p>Module Quiz
                </div>
              </div>
              <div style={{display:'flex', justifyContent:'right', alignItems:'center'}}>
                <img src='lessonlocklogo.png' style={{height:'30px', marginLeft:'196px'}}/>
                </div>
            </div>
          </Paper> 
        </div>
        )}
      </div>
      <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
      <button class='buttoncontainer' onClick={toggleDrawer5}>
          <img src='./topiclogo.png' style={{height:'35px', marginLeft:'-10px'}}/>
          Methods
          <img src='./dropdownlogo.png' style={{height:'30px', marginLeft:'214px'}}/>
        </button>
        {isDrawerOpen5 && (
          <div>
          <Paper class='papercontainer'>
            <div style={{display:'flex', flexDirection:'row'}}>
              <div style={{display:'flex', justifyContent:'left', alignItems:'center', maxWidth:'80%'}}>
                <img src='./lessonlogo.png' style={{height:'30px'}}/>
                <div style={{display:'flex', flexDirection:'column'}}>
                  <p>Lessons</p>What is C?
                </div>
              </div>
              <div style={{display:'flex', justifyContent:'right', alignItems:'center'}}>
                <img src='lessonlocklogo.png' style={{height:'30px', marginLeft:'210px'}}/>
              </div>
            </div>
          </Paper>
          <Paper class='papercontainer'>
            <div style={{display:'flex', flexDirection:'row'}}>
              <div style={{display:'flex', justifyContent:'left', alignItems:'center', maxWidth:'80%'}}>
                <img src='./lessonlogo.png' style={{height:'30px'}}/>
                <div style={{display:'flex', flexDirection:'column'}}>
                  <p>Lessons</p>Hello World!
                </div>
              </div> 
              <div style={{display:'flex', justifyContent:'right', alignItems:'center'}}>
                <img src='lessonlocklogo.png' style={{height:'30px', marginLeft:'198px'}}/> 
              </div>
            </div>
          </Paper>
          <Paper class='papercontainer'>
            <div style={{display:'flex', flexDirection:'row'}}>
              <div style={{display:'flex', justifyContent:'left', alignItems:'center', maxWidth:'80%'}}>
                <img src='./lessonlogo.png' style={{height:'30px'}}/>
                <div style={{display:'flex', flexDirection:'column'}}>
                  <p>Lessons</p>Data Types
                </div>
              </div>
              <div style={{display:'flex', justifyContent:'right', alignItems:'center'}}>
                <img src='lessonlocklogo.png' style={{height:'30px', marginLeft:'207px'}}/>
              </div>
            </div>
          </Paper>
          <Paper class='papercontainer'>
            <div style={{display:'flex', flexDirection:'row'}}>
              <div style={{display:'flex', justifyContent:'left', alignItems:'center', maxWidth:'80%'}}>
                <img src='./lessonlogo.png' style={{height:'30px'}}/>
                <div style={{display:'flex', flexDirection:'column'}}>
                  <p>Lessons</p>Input & Output
                </div>
              </div>
              <div style={{display:'flex', justifyContent:'right', alignItems:'center'}}>
                <img src='lessonlocklogo.png' style={{height:'30px', marginLeft:'176px'}}/>
              </div>
            </div>
          </Paper>
          <Paper class='papercontainer'>
            <div style={{display:'flex', flexDirection:'row'}}>
              <div style={{display:'flex', justifyContent:'left', alignItems:'center', maxWidth:'80%'}}>
                <img src='./lessonlogo.png' style={{height:'30px'}}/>
                <div style={{display:'flex', flexDirection:'column'}}>
                  <p>Lessons</p>Comments
                </div>
              </div>
              <div style={{display:'flex', justifyContent:'right', alignItems:'center'}}>
                <img src='lessonlocklogo.png' style={{height:'30px', marginLeft:'209px'}}/>
              </div>
            </div>
          </Paper>
          <Paper class='papercontainer'>
            <div style={{display:'flex', flexDirection:'row'}}>
              <div style={{display:'flex', justifyContent:'left', alignItems:'center', maxWidth:'80%'}}>
                <img src='./lessonlogo.png' style={{height:'30px'}}/>
                <div style={{display:'flex', flexDirection:'column'}}>
                  <p>Lessons</p>Operators
                  </div>
              </div> 
              <div style={{display:'flex', justifyContent:'right', alignItems:'center'}}>   
                <img src='lessonlocklogo.png' style={{height:'30px', marginLeft:'217px'}}/>
              </div>
            </div>
          </Paper>
          <Paper class='papercontainer'>
            <div style={{display:'flex', flexDirection:'row'}}>
              <div style={{display:'flex', justifyContent:'left', alignItems:'center', maxWidth:'80%'}}>
                <img src='./lessonlogo.png' style={{height:'30px'}}/>
                <div style={{display:'flex', flexDirection:'column', color:'red'}}>
                  <p>Lessons</p>Module Quiz
                </div>
              </div>
              <div style={{display:'flex', justifyContent:'right', alignItems:'center'}}>
                <img src='lessonlocklogo.png' style={{height:'30px', marginLeft:'196px'}}/>
                </div>
            </div>
          </Paper> 
        </div>
        )}
      </div>
      <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
        <button class='buttoncontainer' onClick={toggleDrawer6} style={{color:"red", fontWeight:'600'}}>
            <img src='./topiclogo.png' style={{height:'35px', marginLeft:'-10px'}}/>
            Final Exam
            <img src='./dropdownlogo.png' style={{height:'30px', marginLeft:'185px'}}/>
        </button>
        {isDrawerOpen6 && (
          <div>
          <Paper class='papercontainer'>
            <div style={{display:'flex', flexDirection:'row'}}>
              <div style={{display:'flex', justifyContent:'left', alignItems:'center', maxWidth:'80%'}}>
                <img src='./lessonlogo.png' style={{height:'30px'}}/>
                <div style={{display:'flex', flexDirection:'column'}}>
                  <p>Lessons</p>What is C?
                </div>
              </div>
              <div style={{display:'flex', justifyContent:'right', alignItems:'center'}}>
                <img src='lessonlocklogo.png' style={{height:'30px', marginLeft:'210px'}}/>
              </div>
            </div>
          </Paper>
          <Paper class='papercontainer'>
            <div style={{display:'flex', flexDirection:'row'}}>
              <div style={{display:'flex', justifyContent:'left', alignItems:'center', maxWidth:'80%'}}>
                <img src='./lessonlogo.png' style={{height:'30px'}}/>
                <div style={{display:'flex', flexDirection:'column'}}>
                  <p>Lessons</p>Hello World!
                </div>
              </div> 
              <div style={{display:'flex', justifyContent:'right', alignItems:'center'}}>
                <img src='lessonlocklogo.png' style={{height:'30px', marginLeft:'198px'}}/> 
              </div>
            </div>
          </Paper>
          <Paper class='papercontainer'>
            <div style={{display:'flex', flexDirection:'row'}}>
              <div style={{display:'flex', justifyContent:'left', alignItems:'center', maxWidth:'80%'}}>
                <img src='./lessonlogo.png' style={{height:'30px'}}/>
                <div style={{display:'flex', flexDirection:'column'}}>
                  <p>Lessons</p>Data Types
                </div>
              </div>
              <div style={{display:'flex', justifyContent:'right', alignItems:'center'}}>
                <img src='lessonlocklogo.png' style={{height:'30px', marginLeft:'207px'}}/>
              </div>
            </div>
          </Paper>
          <Paper class='papercontainer'>
            <div style={{display:'flex', flexDirection:'row'}}>
              <div style={{display:'flex', justifyContent:'left', alignItems:'center', maxWidth:'80%'}}>
                <img src='./lessonlogo.png' style={{height:'30px'}}/>
                <div style={{display:'flex', flexDirection:'column'}}>
                  <p>Lessons</p>Input & Output
                </div>
              </div>
              <div style={{display:'flex', justifyContent:'right', alignItems:'center'}}>
                <img src='lessonlocklogo.png' style={{height:'30px', marginLeft:'176px'}}/>
              </div>
            </div>
          </Paper>
          <Paper class='papercontainer'>
            <div style={{display:'flex', flexDirection:'row'}}>
              <div style={{display:'flex', justifyContent:'left', alignItems:'center', maxWidth:'80%'}}>
                <img src='./lessonlogo.png' style={{height:'30px'}}/>
                <div style={{display:'flex', flexDirection:'column'}}>
                  <p>Lessons</p>Comments
                </div>
              </div>
              <div style={{display:'flex', justifyContent:'right', alignItems:'center'}}>
                <img src='lessonlocklogo.png' style={{height:'30px', marginLeft:'209px'}}/>
              </div>
            </div>
          </Paper>
          <Paper class='papercontainer'>
            <div style={{display:'flex', flexDirection:'row'}}>
              <div style={{display:'flex', justifyContent:'left', alignItems:'center', maxWidth:'80%'}}>
                <img src='./lessonlogo.png' style={{height:'30px'}}/>
                <div style={{display:'flex', flexDirection:'column'}}>
                  <p>Lessons</p>Operators
                  </div>
              </div> 
              <div style={{display:'flex', justifyContent:'right', alignItems:'center'}}>   
                <img src='lessonlocklogo.png' style={{height:'30px', marginLeft:'217px'}}/>
              </div>
            </div>
          </Paper>
          <Paper class='papercontainer'>
            <div style={{display:'flex', flexDirection:'row'}}>
              <div style={{display:'flex', justifyContent:'left', alignItems:'center', maxWidth:'80%'}}>
                <img src='./lessonlogo.png' style={{height:'30px'}}/>
                <div style={{display:'flex', flexDirection:'column', color:'red'}}>
                  <p>Lessons</p>Module Quiz
                </div>
              </div>
              <div style={{display:'flex', justifyContent:'right', alignItems:'center'}}>
                <img src='lessonlocklogo.png' style={{height:'30px', marginLeft:'196px'}}/>
                </div>
            </div>
          </Paper> 
        </div>
        )}
      </div>
      <div style={{marginTop:'150px'}}>
        <Paper style={{
          maxWidth:'100%', height:'350px', backgroundColor:'#458C83', display:'flex', flexDirection:'rows', paddingTop:'-10px'
        }}>
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
        </Paper>
      </div>
    </div>
  );
}
export default Courses;