import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Class.css';
import Navbar from './Navbar';

const TeacherPage = () => {
  const [showQuizContainer, setShowQuizContainer] = useState(false);
  const [showLessonContainer, setShowLessonContainer] = useState(false);
  const [classInfo, setClassInfo] = useState(null);

  useEffect(() => {
    const fetchClassInfo = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/createClass/getClassByCode/CSIT321-G1`);
        setClassInfo(response.data);
      } catch (error) {
        console.error('An error occurred while fetching class information:', error);
      }
    };

    fetchClassInfo();
  }, []);

  // Define classname and use it in the JSX
const classname = classInfo && classInfo.classname ? classInfo.classname : 'Class Name Loading...';

  const handleViewQuiz = () => {
    setShowQuizContainer(true);
    setShowLessonContainer(false); // Close Lesson container if open
  };

  const handleViewLesson = () => {
    setShowLessonContainer(true);
    setShowQuizContainer(false); // Close Quiz container if open
  };

  const handleAddQuiz = () => {
    // Implement logic for adding quiz
  };

  const handleAddLesson = () => {
    // Implement logic for adding lesson
  };

  return (
    <div>
      <Navbar/>
      <div className="header-container5">
        <p className="header-text">{classname}</p>
      </div>
      <button className='ViewQuiz' onClick={handleViewQuiz}>
        Quiz
      </button>
      <button className='ViewLesson' onClick={handleViewLesson}>
        Lesson
      </button>

      {showQuizContainer && (
        <div className='container1'>
          <div>
            <Link to="/AddQuiz">
              <button className='AddQuiz' onClick={handleAddQuiz}>
                +
              </button>
            </Link>
          </div>
        </div>
      )}

      {showLessonContainer && (
        <div className='container2'>
          <div>
            <Link to="/AddLesson">
              <button className='AddLesson' onClick={handleAddLesson}>
                +
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeacherPage;
