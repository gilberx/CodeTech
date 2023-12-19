import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import './Achievements.css';
import Navbar from "./Navbar";
import UserContext from "./Register/UserContext";

const Achievements = () => {
  const { user, setUser } = useContext(UserContext);

  const handleLogout = () => {
        
    setUser(null);
  
    localStorage.removeItem('user');
    window.location.href = "/login";
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#ffffff',
  };

  return (
    <div className="achievement-page">
      <Navbar/>
      <div className="profile-sidebar">
            <Link to="/userProfile" style={linkStyle}>
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
           
              <button onClick={handleLogout}>Logout</button>
            
          </div>
    <div className="user-achievements">
      <h2>Achievements</h2>
    </div>
    </div>
  );
};

export default Achievements;