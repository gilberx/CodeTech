import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';
import './App.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import LeftArrow from "./prev.png";
import RightArrow from "./next.png";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Navbar from './Navbar';



const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  <img src={LeftArrow} alt="prevArrow" {...props} style={{height:'45px',width:'60px'}}/>
);

const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <img src={RightArrow} alt="nextArrow" {...props} style={{height:'45px',width:'60px'}} />
);

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
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1, 
    prevArrow: true,
    nextArrow: true,
    nextArrow: <SlickArrowRight />,
    prevArrow: <SlickArrowLeft />
  };

  useEffect(() => {
    document.title = "CodeTech";
  }, []);
  

  return (
    <div>
      <div>
      <Navbar />
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
      <Button onClick={() => navigate('/Courses')}
          style={{my: 2,
                  backgroundColor: '#F5FFFD',
                  color: '#212121',
                  display: 'block',
                  borderRadius: '35px',
                  width: '200px',
                  height: '50px', 
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                  fontSize: 18,
                  textTransform: 'none',
                  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)', 
                  marginTop:'5px'
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
          <div style={{ position: 'absolute', marginLeft: '175vh', marginTop: '-40px'}}>
            <Button style={{backgroundColor: '#458C83',color: '#F5FFFD',borderRadius: '50px', fontSize: '45px', width: '80px', height: '80px', fontWeight: 'semi-bold', }}>?</Button>
          </div>
          <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 1,
              width: 400,
              height: 100, 
              marginTop:'10vh',
            },
          }}>
          <div style={{display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',}}>
            <Paper elevation={2} style={{
                width: '300px',
                height:'150px',
                backgroundColor: '#474747', 
                color:'white',  
                marginLeft: '120vh',
                maginTop: '30px', 
                paddingLeft:'0px', 
                fontSize: '20px', 
                fontFamily: 'Montserrat, sans-serif', 
                paddingTop: '20px', 
                borderRadius:'20px',textAlign:'10px'
              }}>
                  <p style={{marginLeft:'35px', marginBottom:'30px', fontWeight:'600', fontSize:'18px'}}>Unlocks your Potential</p>
            <Divider style={{backgroundColor: '#EDEDED', marginBottom:'10px'}}/>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center',marginTop:'30px'}}>
            <Paper style={{backgroundColor: 'rgba(163, 163, 163, 0.33)', width:'260px', height:'100px',borderRadius:'20px', marginLeft:'10px', marginRight:'10px',display:'flex', justifyContent:'center', alignItems:'center'}}>
              <Paper style={{backgroundColor: 'rgba(163, 163, 163, 0.33)', width:'220px', height:'135px',borderRadius:'20px', marginRight:'0px',}}>
                <Paper style={{backgroundColor:'#A3A3A3', borderRadius:'20px',width:'300px', height:'150px', marginTop:'38px',  marginLeft:'-40px'}}>
                  <p style={{fontSize:'15px', paddingTop:'20px', paddingLeft:'10px', paddingRight:'15px', fontWeight:'600'}}>CodeTech provides <t style={{color:'#458C83', fontWeight:'600'}}>structured coding lessons and tutorials</t>, offering a comprehensive foundation in programming languages.</p>
                </Paper>
              </Paper>
            </Paper>
            </div>
            </Paper>
            <Paper elevation={2} style={{
                width: '300px',
                height:'150px',
                backgroundColor: '#458C83', 
                color:'white',  
                marginLeft: '120px',
                maginTop: '20px', 
                paddingLeft:'0px', 
                fontSize: '20px', 
                fontFamily: 'Montserrat, sans-serif', 
                paddingTop: '20px', 
                borderRadius:'20px',textAlign:'10px'
              }}>
                  <p style={{marginLeft:'45px', marginBottom:'10px', fontWeight:'600', fontSize:'18px'}}>Interactive Learning Experience</p>
            <Divider style={{backgroundColor: '#EDEDED', marginBottom:'10px'}}/>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center',marginTop:'30px'}}>
            <Paper style={{backgroundColor: 'rgba(163, 163, 163, 0.33)', width:'260px', height:'100px',borderRadius:'20px', marginLeft:'10px', marginRight:'10px',display:'flex', justifyContent:'center', alignItems:'center'}}>
              <Paper style={{backgroundColor: 'rgba(163, 163, 163, 0.33)', width:'220px', height:'135px',borderRadius:'20px', marginRight:'0px',}}>
                <Paper style={{backgroundColor:'#A3A3A3', borderRadius:'20px',width:'300px', height:'150px', marginTop:'38px',  marginLeft:'-40px'}}>
                  <p style={{fontSize:'15px', paddingTop:'20px', paddingLeft:'10px', paddingRight:'15px', fontWeight:'600'}}>With <t style={{color:'#458C83', fontWeight:'600'}}>quizzes and coding challenges</t>after each lesson, CodeTech ensures active engagement and reinforces 
your understanding.</p>
                </Paper>
              </Paper>
            </Paper>
            </div>
            </Paper>
            <Paper elevation={2} style={{
                width: '300px',
                height:'150px',
                backgroundColor: '#474747', 
                color:'white',  
                marginLeft: '120px',
                maginTop: '20px', 
                paddingLeft:'0px', 
                fontSize: '20px', 
                fontFamily: 'Montserrat, sans-serif', 
                paddingTop: '20px', 
                borderRadius:'20px',textAlign:'10px'
              }}>
                  <p style={{marginLeft:'35px', marginBottom:'30px', fontWeight:'600', fontSize:'18px'}}>Track, Achieve, Succeed</p>
            <Divider style={{backgroundColor: '#EDEDED', marginBottom:'10px'}}/>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center',marginTop:'30px'}}>
            <Paper style={{backgroundColor: 'rgba(163, 163, 163, 0.33)', width:'260px', height:'100px',borderRadius:'20px', marginLeft:'10px', marginRight:'10px',display:'flex', justifyContent:'center', alignItems:'center'}}>
              <Paper style={{backgroundColor: 'rgba(163, 163, 163, 0.33)', width:'220px', height:'135px',borderRadius:'20px', marginRight:'0px',}}>
                <Paper style={{backgroundColor:'#A3A3A3', borderRadius:'20px',width:'300px', height:'150px', marginTop:'38px',  marginLeft:'-40px'}}>
                  <p style={{fontSize:'15px', paddingTop:'20px', paddingLeft:'10px', paddingRight:'15px', fontWeight:'600'}}>CodeTech offers robust <t style={{color:'#458C83', fontWeight:'600'}}>progress tracking</t>features, allowing you to monitor your advancement through completed lessons
and quiz scores.</p>
                </Paper>
              </Paper>
            </Paper>
            </div>
            </Paper>
          </div>
          </Box>
        </Box>
    </div>
    <div style={{
        paddingLeft: '10vh', 
        marginBottom: '10vh'
      }}>
          <p style={{
              fontFamily:'Montserrat, sans-serif', 
              fontSize: '44px', 
              color: 'black', 
              marginTop: '80px'
            }}>Dive into <t style={{
                fontFamily:'Montserrat, sans-serif', 
                fontSize: '44px', 
                fontWeight: 'Bold', 
                color:'#458C83'
              }}>
                CodeTech's
                <br></br>
                  Courses!
                  </t>
                  </p>
    </div>
    <div>
    <div style={{
      maxWidth: '85%',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',

    }}>
        <Slider {...settings}>
          <div>
            <Button style={{
              border: '10px solid white',
              borderRadius: '20px',
              height: '300px',
              width: '210px',
              backgroundColor: '#F1F1F1',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft:'15px'
            }}>
              <div>
                <img src="/18.png" alt="Icon" style={{ marginTop:'-30px',height: '90px', width: '155px' }} />
              </div>
              <div style={{marginTop:'20px', maxWidth:'90%'}}>
                <p style={{fontSize:'19px',fontWeight: '600',fontFamily:'Montserrat, sans-serif', color: '#353535', textTransform: 'none'}}>
                  Introduction to C
                </p>
              </div>
            </Button>
          </div>
          <div>
            <Button style={{
              border: '10px solid white',
              borderRadius: '20px',
              height: '300px',
              width: '210px',
              backgroundColor: '#F1F1F1',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft:'15px'
            }}>
              <div>
                <img src="/19.png" alt="Icon" style={{ marginTop:'-30px',height: '100px', width: '175px' }} />
              </div>
              <div style={{marginTop:'20px', maxWidth:'90%'}}>
                <p style={{fontSize:'19px',fontWeight: '600',fontFamily:'Montserrat, sans-serif', color: '#353535', textTransform: 'none'}}>
                  Introduction to C#
                </p>
              </div>
            </Button>
          </div>
          <div>
          <Button style={{
              border: '10px solid white',
              borderRadius: '20px',
              height: '300px',
              width: '210px',
              backgroundColor: '#F1F1F1',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft:'15px'
            }}>
              <div>
                <img src="/17.png" alt="Icon" style={{ marginTop:'-30px',height: '100px', width: '175px' }} />
              </div>
              <div style={{marginTop:'20px', maxWidth:'90%'}}>
                <p style={{fontSize:'19px',fontWeight: '600',fontFamily:'Montserrat, sans-serif', color: '#353535', textTransform: 'none'}}>
                  Introduction to C++
                </p>
              </div>
            </Button>
          </div>
          <div>
          <Button style={{
              border: '10px solid white',
              borderRadius: '20px',
              height: '300px',
              width: '210px',
              backgroundColor: '#F1F1F1',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft:'15px'
            }}>
              <div>
                <img src="/19.png" alt="Icon" style={{ marginTop:'-30px',height: '100px', width: '175px' }} />
              </div>
              <div style={{marginTop:'20px', maxWidth:'90%'}}>
                <p style={{fontSize:'19px',fontWeight: '600',fontFamily:'Montserrat, sans-serif', color: '#353535', textTransform: 'none'}}>
                  C Intermediate
                </p>
              </div>
            </Button>
          </div>
          <div>
          <Button style={{
              border: '10px solid white',
              borderRadius: '20px',
              height: '300px',
              width: '210px',
              backgroundColor: '#F1F1F1',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft:'15px'
            }}>
              <div>
                <img src="/19.png" alt="Icon" style={{ marginTop:'-30px',height: '100px', width: '175px' }} />
              </div>
              <div style={{marginTop:'20px', maxWidth:'90%'}}>
                <p style={{fontSize:'19px',fontWeight: '600',fontFamily:'Montserrat, sans-serif', color: '#353535', textTransform: 'none'}}>
                  C# Intermediate
                </p>
              </div>
            </Button>
          </div>
          <div>
          <Button style={{
              border: '10px solid white',
              borderRadius: '20px',
              height: '300px',
              width: '210px',
              backgroundColor: '#F1F1F1',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft:'15px'
            }}>
              <div>
                <img src="/19.png" alt="Icon" style={{ marginTop:'-30px',height: '100px', width: '175px' }} />
              </div>
              <div style={{marginTop:'20px', maxWidth:'90%'}}>
                <p style={{fontSize:'19px',fontWeight: '600',fontFamily:'Montserrat, sans-serif', color: '#353535', textTransform: 'none'}}>
                  C++ Intermediate
                </p>
              </div>
            </Button>
          </div>
        </Slider>
      </div>
    </div>
    <div style={{backgroundColor:'#FFFFFF', height:'110vh'}}>
      <div style={{paddingLeft: '10vh', marginBottom: '5vh', marginTop:'10vh', textAlign: 'right', marginRight: '20vh'}}>
        <p style={{fontFamily:'Montserrat, sans-serif', fontSize: '44px', color: 'black', marginTop: '80px'}}>Why <t style={{fontFamily:'Montserrat, sans-serif', fontSize: '44px', fontWeight: 'Bold', color:'#458C83'}}>Code</t><t style={{fontFamily:'Montserrat, sans-serif', fontSize: '44px', color: 'black', marginTop: '80px'}}>?</t></p>
      </div>
      <div style={{ 
        marginTop: '40px',
        maxWidth: '80%',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around', 
        }}>
      <Card sx={{ maxWidth: 300 }}>
        <CardMedia
          sx={{ height: 140 }}
        />
        <CardContent style={{display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'}}>
          <img src='./2.png' alt='icon' style={{width:'250px', marginTop:'-19vh'}}/>
          <Typography gutterBottom variant="h5" component="div">
          It’s popular
          </Typography>
          <Typography variant="body2" color="text.secondary" >
          Technical skills are in high demand. Over 60% of new jobs worldwide will require tech skills.
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ maxWidth: 300 }}>
        <CardMedia
          sx={{ height: 140 }}
        />
        <CardContent style={{display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'}}>
          <img src='./1.png' alt='icon' style={{width:'250px', marginTop:'-19vh'}}/>
          <Typography gutterBottom variant="h5" component="div">
            
          It’s promising
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Unlock your earning potential! Entry-level programmers in the Philippines earn on average over P30,000 in salary.
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ maxWidth: 300 }}>
        <CardMedia
          sx={{ height: 140 }}
        />
        <CardContent style={{display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'}}>
          <img src='./3.png' alt='icon' style={{width:'250px', marginTop:'-19vh'}}/>
          <Typography gutterBottom variant="h5" component="div">
          It’s fun
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Imagine combining your passion and skill with your creativity, and making something new everyday!
          </Typography>
        </CardContent>
      </Card>
      </div>
      <div style={{marginTop: '20vh', marginBottom: '5vh', textAlign: 'center'}}>
        <p  style={{color: '#939393'}}>
          Start here on CodeTech by joining a class or<br></br>starting a course!
        </p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom:'14vh' }}>
        <Button style={{backgroundColor: '#F5FFFD',color:'#212121', height:'55px',width:'225px',fontSize:'20px',fontWeight:'520', fontFamily:'Inter, sans-serif',borderRadius:'28px',boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', textTransform: 'none'}}>
          Start  Learning
        </Button>
      </div>
    </div>
    <div>
      <Box style={{maxWidth:'100%', height: '50vh', display:'flex', flexDirection:'rows', }}>
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
  );
}
export default ResponsiveAppBar;
