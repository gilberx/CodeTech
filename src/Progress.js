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
      <div className="goals-sidebar">
            <Link to="/progress" style={linkStyle}>
              <button>Progress</button>
            </Link>
            <Link to="/goals" style={linkStyle}>
              <button>Goals</button>
            </Link>
          </div>
    <div className="user-progress" style={{overflow: 'auto', maxHeight: '600px'}}>
      <h2 style={{marginBottom: '30px'}}>Progress</h2>
      <div style={{height: '200px', marginTop: '20px'}}>
      <div style={{display: 'grid', placeItems: 'center', marginBottom: '10px'}}>
      <div className='image' style={{width: '150px'}}><img
          src="/17.png"
          alt="cpp"
          style={{ width: "125px", height: "65px"}}
        /></div>
        <div className='courseTitle'>
          <h4>Introduction to C#</h4>
        </div>
        </div>
      <LinearProgress variant="determinate" value={100/*progress*/} sx={{
          height: 20,
          borderRadius: 10,
          backgroundColor: '#458C83',
          '& .MuiLinearProgress-bar': {
            borderRadius: 10,
            backgroundColor: '#53ffe8',
          },
        }} />
        </div>
        <div style={{height: '200px', marginTop: '20px'}}>
        <div style={{display: 'grid', placeItems: 'center', marginBottom: '10px'}}>
        <div className='image' style={{width: '150px'}}><img
          src="/18.png"
          alt="cpp"
          style={{ width: "125px", height: "65px"}}
        /></div>
        <div className='courseTitle'>
          <h4>Introduction to C#</h4>
        </div>
        </div>
      <LinearProgress variant="determinate" value={75/*progress*/} sx={{
          height: 20,
          borderRadius: 10,
          backgroundColor: '#458C83',
          '& .MuiLinearProgress-bar': {
            borderRadius: 10,
            backgroundColor: '#53ffe8',
          },
        }} />
        </div>
        <div style={{height: '200px', marginTop: '20px'}}>
        <div style={{display: 'grid', placeItems: 'center', marginBottom: '10px'}}>
        <div className='image' style={{width: '150px'}}><img
          src="/19.png"
          alt="cpp"
          style={{ width: "143px", height: "78px"}}
        /></div>
        <div className='courseTitle'>
          <h4>Introduction to C#</h4>
        </div>
        </div>
      <LinearProgress variant="determinate" value={45/*progress*/} sx={{
          height: 20,
          borderRadius: 10,
          backgroundColor: '#458C83',
          '& .MuiLinearProgress-bar': {
            borderRadius: 10,
            backgroundColor: '#53ffe8',
          },
        }} />
        </div>
    </div>
    </div>
  );
};

export default Progress;
