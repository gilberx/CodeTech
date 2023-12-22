import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Class.css';
import Navbar from './Navbar';
import { useContext } from "react";
import UserContext from './Register/UserContext';


const TeacherPage = () => {
  const navigate = useNavigate();
  const { classcode } = useParams();
  const [showQuizContainer, setShowQuizContainer] = useState(false);
  const [showLessonContainer, setShowLessonContainer] = useState(false);
  const [classInfo, setClassInfo] = useState(null);
  const [quizzes, setQuizzes] = useState([]);
  const [lessons, setLessons] = useState([]);
  const { user, setUser } = useContext(UserContext);


  useEffect(() => {
    const fetchClassInfo = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/createClass/getClassByCode/${classcode}`);
        setClassInfo(response.data);
      } catch (error) {
        console.error('An error occurred while fetching class information:', error);
      }
    };

    const fetchQuizzesAndLessons = async () => {
      try {
        // Fetch quizzes
        const quizzesResponse = await axios.get(`http://localhost:8080/quiz/getAllQuestions`);
        setQuizzes(quizzesResponse.data);

        // Fetch lessons
        const lessonsResponse = await axios.get(`http://localhost:8080/lesson/getAllLessons`);
        setLessons(lessonsResponse.data);
      } catch (error) {
        console.error('An error occurred while fetching quizzes and lessons:', error);
      }
    };

    fetchClassInfo();
    fetchQuizzesAndLessons();
  }, [classcode]);

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
    navigate(`/class/${classcode}/addQuiz`);
  };

  const handleAddLesson = () => {
    navigate(`/class/${classcode}/addLesson`);
  };

  const handleTakeLesson = () => {
    navigate(`/class/${classcode}/lesson`);
  };

  const handleTakeQuiz = () => {
    navigate(`/class/${classcode}/quiz`);
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
            <button className='AddQuiz' onClick={handleAddQuiz}
            disabled={user && user.role == 'learner'}
            style={{
              backgroundColor: user && user.role === 'learner' ? '#ccc' : '#458C83',
              cursor: user && user.role === 'learner' ? 'not-allowed' : 'pointer',
              // Add other styles as needed
            }}>
              +
            </button>
          </div>
          <div>
              {quizzes.map((quiz) => (
                <button className='btnquiz' onClick={handleTakeQuiz}>
                <a key={quiz.id}>{quiz.title}</a>
                </button>
              ))}
          </div>
        </div>
      )}

      {showLessonContainer && (
        <div className='container2'>
          <div>
            <button className='AddLesson' onClick={handleAddLesson}
            disabled={user && user.role == 'learner'}
            style={{
              backgroundColor: user && user.role === 'learner' ? '#ccc' : '#458C83',
              cursor: user && user.role === 'learner' ? 'not-allowed' : 'pointer',
              // Add other styles as needed
            }}>
              +
            </button>
          </div>
          <div>
              {lessons.map((lesson) => (
                <button className='btnlesson' onClick={handleTakeLesson}>
                  <a key={lesson.id}>{lesson.title}</a>
                </button>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TeacherPage;
