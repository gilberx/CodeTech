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
import { useEffect, useState } from 'react';
import Navbar from '../Navbar';


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
  
  useEffect(() => {
    document.title = "CodeTech";
  }, []);

  return (
    <main class='courses-main-bg'>
      <div>
        <div>
        <Navbar/>
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
              Beginner Level
          </Typography>
        </div>
        <div style={{display:'flex', flexDirection:'column'}}>
          <div style={{display:'flex', 
                      flexDirection: 'rows', 
                      justifyContent: 'center',
                      flexDirection:'column', 
                      alignItems: 'center', 
                      paddingTop:'20vh',}}>
            <Paper style={{backgroundColor:'#E2F8F3', 
                          width:'300px', 
                          height:'80px', 
                          display:'flex', 
                          justifyContent:'center', 
                          alignItems:'center', 
                          borderRadius:'15px'}}>
              <Button onClick={() => navigate('/Courses=IntroductionToC')}
              style={{backgroundColor:'#458C83', 
                              color:'#FFFFFF', 
                              width:'220px', 
                              borderRadius:'20px', 
                              textTransform:'none', 
                              fontSize:'16px'}}>
                  Introduction to C
              </Button>
            </Paper>
            <Paper style={{backgroundColor:'#E2F8F3', 
                          width:'300px', 
                          height:'80px', 
                          display:'flex', 
                          justifyContent:'center', 
                          alignItems:'center', 
                          borderRadius:'15px',
                          marginTop:'20px'}}>
              <Button onClick={() => navigate('/Courses=IntroductionToCSharp')}
              style={{backgroundColor:'#458C83', 
                              color:'#FFFFFF', 
                              width:'220px', 
                              borderRadius:'20px', 
                              textTransform:'none', 
                              fontSize:'16px'}}>
                  Introduction to C#
              </Button>
            </Paper>
            <Paper style={{backgroundColor:'#E2F8F3', 
                          width:'300px', 
                          height:'80px', 
                          display:'flex', 
                          justifyContent:'center', 
                          alignItems:'center', 
                          borderRadius:'15px',
                          marginTop:'20px'}}>
              <Button onClick={() => navigate('/Courses=IntroductionToCplusplus')}
              style={{backgroundColor:'#458C83', 
                              color:'#FFFFFF', 
                              width:'220px', 
                              borderRadius:'20px', 
                              textTransform:'none', 
                              fontSize:'16px'}}>
                  Introduction to C++
              </Button>
            </Paper>
          </div>
          <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop:'28vh', height:'51vh'}}>
            <img src='/CoursesImage.png' style={{width:'100vh',}}/>
          </div>
          <div style={{marginBottom:'-100px'}}>
            <Box style={{maxWidth:'100%', height: '47vh', display:'flex', flexDirection:'rows', }}>
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
      </div>
    </main>
  );
}
export default Courses;