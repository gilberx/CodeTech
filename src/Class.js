import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Class.css';

const TeacherPage = () => {
  const [showQuizContainer, setShowQuizContainer] = useState(false);
  const [showLessonContainer, setShowLessonContainer] = useState(false);

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
      <div className="header-container">
        <p className="header-text">CSIT321-G1</p>
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
