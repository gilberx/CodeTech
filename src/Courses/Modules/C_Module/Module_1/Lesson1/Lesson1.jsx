import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from 'react';








function Lesson_1() {


  

  useEffect(() => {
    document.title = "CodeTech";
  }, []);
  

  return (
    <div>
      <div style={{display:'flex', flexDirection:'row'}}>
          <p>× What is C?</p>
          <p>Progress Bar</p>
      </div>
      
    </div>
  );
}
export default Lesson_1;
