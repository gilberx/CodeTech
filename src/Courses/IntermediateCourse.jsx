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
import { useEffect } from 'react';
import Footer from '../Footer';
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
            Intermediate Level
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
                        alignItems:'center', borderRadius:'15px'}}>
            <Button onClick={() => navigate('/Courses=CIntermediate')}
            style={{backgroundColor:'#458C83', 
                            color:'#FFFFFF', 
                            width:'220px', 
                            borderRadius:'20px', 
                            textTransform:'none', 
                            fontSize:'16px'}}>
                C Intermediate
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
            <Button onClick={() => navigate('/Courses=CSharpIntermediate')}
            style={{backgroundColor:'#458C83', 
                            color:'#FFFFFF', 
                            width:'220px', 
                            borderRadius:'20px', 
                            textTransform:'none', 
                            fontSize:'16px'}}>
                C# Intermediate
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
            <Button onClick={() => navigate('/Courses=CplusplusIntermediate')}
            style={{backgroundColor:'#458C83', 
                            color:'#FFFFFF', 
                            width:'220px', 
                            borderRadius:'20px', 
                            textTransform:'none', 
                            fontSize:'16px'}}>
                C++ Intermediate
            </Button>
          </Paper>
        </div>
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop:'27vh', height:'51vh'}}>
          <img src='/CoursesImage.png' style={{width:'100vh',}}/>
        </div>
        <div style={{marginBottom:'-100px'}}>
          <Footer/>
        </div>
      </div>
    </main>
  );
}
export default Courses;