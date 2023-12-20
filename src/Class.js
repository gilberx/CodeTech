import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Class.css';
import Navbar from './Navbar';

const TeacherPage = () => {
  const navigate = useNavigate(); // Use useNavigate instead of useHistory
  const { classcode } = useParams();
  const [showQuizContainer, setShowQuizContainer] = useState(false);
  const [showLessonContainer, setShowLessonContainer] = useState(false);
  const [classInfo, setClassInfo] = useState(null);

  useEffect(() => {
    const fetchClassInfo = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/createClass/getClassByCode/${classcode}`);
        setClassInfo(response.data);
      } catch (error) {
        console.error('An error occurred while fetching class information:', error);
      }
    };

    fetchClassInfo();
  }, [classcode]);

  // Define classname and use it in the JSX
  const classname = classInfo && classInfo.classname ? classInfo.classname : 'Class Name Loading...';

  const handleViewQuiz = () => {
    setShowQuizContainer(true);
    setShowLessonContainer(false);
  };

  const handleViewLesson = () => {
    setShowLessonContainer(true);
    setShowQuizContainer(false);
  };

  const handleAddQuiz = () => {
    // Navigate to the addQuiz page for the current class
    navigate(`/class/${classcode}/addQuiz`);
  };

  const handleAddLesson = () => {
    // Navigate to the addLesson page for the current class
    navigate(`/class/${classcode}/addLesson`);
  };

  return (
    <div>
      <Navbar />
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
            <button className='AddQuiz' onClick={handleAddQuiz}>
              +
            </button>
          </div>
        </div>
      )}

      {showLessonContainer && (
        <div className='container2'>
          <div>
            <button className='AddLesson' onClick={handleAddLesson}>
              +
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeacherPage;
