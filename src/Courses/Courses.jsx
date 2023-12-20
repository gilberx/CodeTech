import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';
import './Courses.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';


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
    <main className='courses-main-bg'>
      <div>
      <Navbar />
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
         <Footer/>
        </div>
      </div>
    </main>
  );
}
export default Courses;