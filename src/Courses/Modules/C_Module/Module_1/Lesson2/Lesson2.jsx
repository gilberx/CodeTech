import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import './Lesson2.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';








function Lesson_1() {
  const navigate = useNavigate();

  const codeString = `#include <stdio.h>

  int main() { 
    printf("Hello, World!\\n"); 
    return 0; 
  }`;

  useEffect(() => {
    document.title = "CodeTech";
  }, []);

  return (
    <main class="main-bg">
      <div id="lesson1">
        <div class="header" style={{display:'flex', flexDirection:'row', marginBottom:'-70px'}}>
          <p id="backbutton" onClick={() => navigate('/Courses=IntroductionToC')} >× </p>
          <p>Hello, World!</p>
          <p id="progressbar">Progress Bar</p>
        </div>
        <div class="IntroToC">
          <p style={{fontSize:'30px',
          fontWeight:'800', 
          paddingTop:'100px', 
          fontFamily:'Montserrat, sans-serif',marginBottom:'10px'}}>Hello World!</p>
          <p>As when learning any new language, the place to start is with<br></br> the classic "Hello World!" program: </p>
          <Paper style={{height:'140px', 
          width:'400px', 
          backgroundColor:'#E3F8F3', 
          display:'flex', 
          justifyContent:'left', 
          alignItems:'center', 
          paddingLeft:'10px', borderRadius:'10px' }}>
            <pre style={{ margin: 0 }}>
                <code style={{ whiteSpace: 'pre-wrap', 
                backgroundColor: '#E3F8F3',}}>
                  {codeString}
                </code>
            </pre>
          </Paper>
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
