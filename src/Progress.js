import React, { useState } from 'react';
import { LinearProgress } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './Progress.css';

const Progress = () => {
  const [progress, setProgress] = useState(0);

  const updateProgress = () => {
    setProgress((prevProgress) => (prevProgress + 20 <= 100 ? prevProgress + 20 : 100));
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#ffffff',
  };

  return (
    <div className="progress-page">
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
