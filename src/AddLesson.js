import React, { useState, useContext } from 'react';
import axios from 'axios';
import './AddLesson.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import UserContext from './Register/UserContext';

const AddLesson = () => {
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
  return (
    <div>
      <Navbar/>
      <div className="header-container4">
        {/* You can add content or components for the header here */}
      </div>
      <br></br>
      <div className='container3'>
        <div className='input-div3'><br></br><br></br>
          <p className="header-title3">Add Lesson</p>
          <input 
            className='title3'
            placeholder='Title'
            type="text"
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
              setTitleError('');
            }}
            required
          />
          {titleError && <p className="error-message">{titleError}</p>}

          <textarea 
            className='lesson' 
            placeholder='Content' 
            rows="10"
            value={content}
            onChange={(event) => {
              setContent(event.target.value);
              setContentError('');
            }}
            required
          ></textarea>
          {contentError && <p className="error-message">{contentError}</p>}

          <button className='submitbtn2' onClick={handleAddLesson}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default AddLesson;
