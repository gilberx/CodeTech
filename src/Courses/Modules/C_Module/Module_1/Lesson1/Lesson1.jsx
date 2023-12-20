import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import './Lesson1.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { ProgressBar } from 'react-bootstrap';

function Lesson_1() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "CodeTech";
  }, []);

  return (
    <main class="main-bg">
      <div id="lesson1">
        <div class="header" style={{display:'flex', flexDirection:'row', backgroundColor:'white'}}>
          <p id="backbutton" onClick={() => navigate('/Courses=IntroductionToC')} >× </p>
          <p>What is C?</p>
          <div id="progressbar">
            <ProgressBar variant="success" now={20} />
          </div>
        </div>
        <div class="IntroToC">
          <p style={{fontSize:'40px',fontWeight:'600', paddingTop:'100px'}}>Introducing C</p>
          <p><strong>C</strong> is a general-purpose programming language that has been around for nearly 50 years. </p>
          <p><strong>C</strong> has been used to write everything from operating systems (including Windows and</p>
          <p>many others) to complex programs like the Python interpreter, Git, Oracle database, and</p>
          <p>more.</p>
          <p>The versatility of C is by design. It is a low-level language that relates closely to the way</p>
          <p>machines work while still being easy to learn.</p>
        </div>
      </div>
      <div style={{marginTop:'-18px'}}>
          <Box style={{width:'210vh',
          maxWidth:'100%',
          height:'90px', 
          backgroundColor:'#D9D9D9', 
          position:'absolute',
          display:'flex',
          justifyContent:'center',
          alignItems:'center'}}>
            <Button onClick={() => navigate('/Module1=Lesson1_page2')} 
            style={{backgroundColor:'#458C83', 
            height:'50px', 
            width:'150px', 
            color:'#F0F0F0', 
            fontWeight:'600', 
            borderRadius:'30px',
            fontFamily:'Montserrat, sans-serif'}}>
              Continue
            </Button>
          </Box>
        </div>
    </main>
  );
}
export default Lesson_1;
