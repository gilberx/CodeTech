import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Class.css';

const TeacherPage = () => {
  const handleViewQuiz = () => {

  };

  const handleAddQuiz = () => {

  };

  const handleViewLesson = () => {

  };

  const handleAddLesson = () => {

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
      <div className='container1'>
        <div>
        <Link to="/AddQuiz">
        <button className='AddQuiz' onClick={handleAddQuiz}>
          +
        </button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default TeacherPage;
