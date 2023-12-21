import React, { useState, useContext } from 'react';
import axios from 'axios';
import './Quiz.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import UserContext from './Register/UserContext';

const Quiz = () => {
  const { user, setUser } = useContext(UserContext);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const [titleError, setTitleError] = useState('');
  const [contentError, setContentError] = useState('');

  const handleAddLesson = async (event) => {
    event.preventDefault();

    // Validate required fields 
    if (!title || !content) {
      alert("All fields are required");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/quiz/addQuiz", {
        title: title,
        content: content,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      alert("Lesson added successfully");
      setTitle("");
      setContent("");

      console.log('Lesson added successfully:', response.data);
    } catch (error) {
      console.error('Error adding lesson:', error);
    }
  };
  if (!user) {
    return (
    <main className='a-notadmin-main'>
        <div className='a-notadmin-container'>
            <form className='a-notadmin-form'>
                <h1 style={{fontSize:'35px',textAlign:'center'}}>You are not logged in!</h1>
                <div style={{marginTop:'10px', marginBottom:'20px', textAlign:'center', padding:"0 10px"}}>
                    <span className="small-text">Log in to access your personalized profile and unlock exclusive features!</span>
                </div>
                <Link to="/login" className='link-btn'>
                    <button className="btn">Go to login</button>
                </Link>
            </form>
        </div>
    </main>
    );
  }
  if (user.role==='learner') {
    return (
        <main className='a-notadmin-main'>
        <div className='a-notadmin-container'>
            <form className='a-notadmin-form'>
                <h1 style={{fontSize:'35px',textAlign:'center'}}>Off Access!</h1>
                <div style={{marginTop:'10px', marginBottom:'20px', textAlign:'center', padding:"0 10px"}}>
                    <span className="small-text">This page is for admin-only access. You don't have the necessary privileges to view this content.</span>
                </div>
                <Link to="/" className='link-btn'>
                    <button className="btn">Go back</button>
                </Link>
            </form>
        </div>
    </main>
    );
  }
  return (
    <div>
      <Navbar/>
        <div className="header-container4">
         {/* You can add content or components for the header here */}
        </div>
        <div className='container23'>
            <p className='text'>Test Yourself with Exercises</p>
            <div className='container24'>
                quiz ni diri
            </div>
        </div>
    </div>
  );
};

export default Quiz;
