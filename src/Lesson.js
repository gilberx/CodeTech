import React, { useState, useContext } from 'react';
import axios from 'axios';
import './Lesson.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import UserContext from './Register/UserContext';

const Lesson = () => {
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
      const response = await axios.post("http://localhost:8080/lesson/addLesson", {
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
      // Handle the error, e.g., show an error message to the user
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
        </div>
        <div className='container33'>
            Lesson ni diri
        </div>
    </div>
  );
};

export default Lesson;
