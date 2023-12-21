import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Lesson.css';
import Navbar from './Navbar';

const Lesson = () => {
  const [lesson, setLesson] = useState(null);
  const { lid } = useParams();
  console.log('Lesson ID from URL:', lid);
  
  useEffect(() => {
    const fetchLessonDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/lesson/getLesson/${lid}`);
        console.log('Lesson Details Response:', response.data);
        setLesson(response.data);
      } catch (error) {
        console.error('Error fetching lesson details:', error);
      }
    };
  
    fetchLessonDetails();
  }, [lid]);

  if (!lesson) {
    return (
      <div>
        <Navbar />
        <div className="header-container4">
          {/* You can add content or components for the header here */}
        </div>
        <div className='container33'>
          Loading lesson details...
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="header-container4">
      </div>
      <div className='container33'>
        <h2>{lesson.title}</h2>
        <p>{lesson.content}</p>
      </div>
    </div>
  );
};

export default Lesson;
