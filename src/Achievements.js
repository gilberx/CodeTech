import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Achievements.css';

const Achievements = () => {

  const linkStyle = {
    textDecoration: 'none',
    color: '#ffffff',
  };

  return (
    <div className="achievement-page">
      <div className="sidebar">
            <Link to="/" style={linkStyle}>
              <button>Profile</button>
            </Link>
            <Link to="/achievements" style={linkStyle}>
              <button>Achievements</button>
            </Link>
            <Link to="/progress" style={linkStyle}>
              <button>Progress</button>
            </Link>
            <Link to="/settings" style={linkStyle}>
              <button>Settings</button>
            </Link>
          </div>
    <div className="user-achievements">
      <h2>Achievements</h2>
    </div>
    </div>
  );
};

export default Achievements;