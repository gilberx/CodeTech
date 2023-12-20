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
      <div id="lesson1_page3">
        <img src="./topicfinished.png" style={{height:'80px'}}/>
        <p style={{fontWeight:'800', paddingTop:'20px'}}>Lesson Completed!</p>
        <p style={{}}>You learned What is C. You’re one step closer to reaching your goal!</p>
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
            <Button onClick={() => navigate('/Courses=IntroductionToC')} 
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
