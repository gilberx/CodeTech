import * as React from 'react';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';
import './Intro.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from 'react'
import Navbar from '../Navbar';


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
  const [isCourseTaken, setIsCourseTaken] = React.useState(false);


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

  const handleTakeCourse = async () => {
    const courseData = {
      cid: "1",
      title: "Introduction to C",
      desc: "C Programming Language",
      dlevel: "Beginner",
    };

    try {
      const response = await fetch('http://localhost:8080/courses/insertCourse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(courseData),
      });

      if (response.ok) {
        setIsCourseTaken(true);
      } else {
        console.error('Failed to take the course. Server returned:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('An error occurred while taking the course:', error);
    }
  };

  return (
    <div class='introC'>
      <div>
      <Navbar/>
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
        borderRadius:'30px',
        boxShadow:'0px 2px 4px rgba(0,0,0,0.2)'}}
        onClick={handleTakeCourse}>Take Course</Button>
      </div>
      <div style={{display:'flex', 
      justifyContent:'center', 
      alignItems:'center', 
      flexDirection:'column', 
      marginTop:'50px'}}>
        <button class='buttoncontainer' onClick={toggleDrawer1}>
          <img src='./topiclogo.png' style={{height:'35px', marginLeft:'-10px'}}/>
          Basic Concepts
          <img src='./dropdownlogo.png' style={{height:'30px', marginLeft:'155px'}}/>
        </button>
        {isDrawerOpen1 && (
          <div>
            <Paper class='papercontainer' style={{display:'flex', flexDirection:'column', alignItems:'center', paddingTop:'10px', paddingBottom:'10px', height:'auto'}}>
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
              <div>
              {isCourseTaken && (
                  <Button
                    style={{
                      width: '350px',
                      height: '40px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#458C83',
                      borderRadius: '20px',
                      color: '#FFFFFF',
                      fontFamily: 'Montserrat, sans-serif',
                      marginTop: '5px',
                    }}
                  >
                    Learn
                  </Button>
                )}
              </div>
            </Paper>
            <Paper class='papercontainer' style={{display:'flex', flexDirection:'column', alignItems:'center', paddingTop:'10px', paddingBottom:'10px', height:'auto'}}>
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
          Conditional & Loops
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
          Function, Arrays & Pointers
          <img src='./dropdownlogo.png' style={{height:'30px', marginLeft:'50px'}}/>
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
          Strings, Function & Pointers
          <img src='./dropdownlogo.png' style={{height:'30px', marginLeft:'44px'}}/>
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
        <button class='buttoncontainer' onClick={toggleDrawer5} style={{color:"red", fontWeight:'600'}}>
            <img src='./topiclogo.png' style={{height:'35px', marginLeft:'-10px'}}/>
            Final Exam
            <img src='./dropdownlogo.png' style={{height:'30px', marginLeft:'185px'}}/>
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