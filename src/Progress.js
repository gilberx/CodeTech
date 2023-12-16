import React, { useState, useContext, useEffect } from 'react';
import { LinearProgress } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './Progress.css';
import UserContext from './Register/UserContext';
import Navbar from './Navbar';

const Progress = () => {
  const [progress, setProgress] = useState(0);
  const {user, setUser} = useContext(UserContext);
  useEffect(() => {
    console.log("logged in user: ", user);
  }, [user]);

  const updateProgress = () => {
    setProgress((prevProgress) => (prevProgress + 20 <= 100 ? prevProgress + 20 : 100));
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#ffffff',
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
    <div className="progress-page">
      <Navbar/>
      <div className="progress-sidebar">
            <Link to="/progress" style={linkStyle}>
              <button>Progress</button>
            </Link>
            <Link to="/goals" style={linkStyle}>
              <button>Goals</button>
            </Link>
          </div>
    <div className="user-progress">
      <h2>Progress</h2>
      <LinearProgress variant="determinate" value={progress} sx={{
          height: 20,
          borderRadius: 10,
          backgroundColor: '#458C83',
          '& .MuiLinearProgress-bar': {
            borderRadius: 10,
            backgroundColor: '#53ffe8',
          },
        }} />
      <button onClick={updateProgress}>Update Progress</button>
    </div>
    </div>
  );
};

export default Progress;
