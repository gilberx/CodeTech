import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import './Lesson1.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';








function Lesson_1() {
    const navigate = useNavigate();

  

  useEffect(() => {
    document.title = "CodeTech";
  }, []);
  

  return (
    <main class="main-bg">
      <div id="lesson1">
        <div class="header" style={{display:'flex', flexDirection:'row',backgroundColor:'white'}}>
          <p id="backbutton" onClick={() => navigate('/Courses=IntroductionToC')}>× </p>
          <p>What is C?</p>
          <p id="progressbar">Progress Bar</p>
        </div>
        <div class="IntroToC_page2">
          <p style={{paddingTop:'75px', fontSize:'20px'}}><strong>C</strong> is a: </p>
          <Button style={{width:"120vh", fontFamily:'Montserrat, sans-serif', fontSize:'30px', fontWeight:'600', backgroundColor:'white', color:'black', marginTop:'20px', border: '4px solid #808080',}}>
            Client-side scripting language
          </Button>
          <Button style={{width:"120vh", fontFamily:'Montserrat, sans-serif', fontSize:'30px', fontWeight:'600', backgroundColor:'white', color:'black', marginTop:'20px', border: '4px solid #808080',}}>
            Photo editing program
          </Button>
          <Button style={{width:"120vh", fontFamily:'Montserrat, sans-serif', fontSize:'30px', fontWeight:'600', backgroundColor:'white', color:'black', marginTop:'20px', border: '4px solid #808080',}}>
            General purpose programming language
          </Button>
        </div>
      </div>
      <div>
          <Box style={{width:'210vh',
          maxWidth:'100%',
          height:'90px', 
          backgroundColor:'#D9D9D9', 
          position:'absolute',
          display:'flex',
          justifyContent:'center',
          alignItems:'center'}}>
            <Button onClick={() => navigate('/Module1=Lesson1_page1')}
            style={{backgroundColor:'#458C83', 
            height:'50px', 
            width:'150px', 
            color:'#F0F0F0', 
            fontWeight:'600', 
            borderRadius:'30px',
            fontFamily:'Montserrat, sans-serif', marginRight:'30px'}}>
              Back
            </Button>
            <Button onClick={() => navigate('/Module1=Lesson1_page3')} 
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
