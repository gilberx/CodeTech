import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from "./Register/UserContext";
import './Achievements.css';
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const Achievements = () => {
  const {user, setUser} = useContext(UserContext);

  const linkStyle = {
    textDecoration: 'none',
    color: '#ffffff',
  };

  const handleLogout = () => {
        
    setUser(null);
  
    localStorage.removeItem('user');
    window.location.href = "/login";
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
      <div className='achievementsLogo'>
      <div style={{marginTop: "13px", marginLeft: "10px", marginRight: "10px" }}>
        <div className='image'><img
          src="/17.png"
          alt="cpp"
          style={{ width: "125px", height: "65px"}}
        /></div>
        <div className='courseTitle'>
          <h4>Introduction to C++</h4>
        </div>
      </div>
      <div style={{marginTop: "13px", marginLeft: "10px", marginRight: "10px" }}>
        <div className='image'><img
          src="/18.png"
          alt="c"
          style={{ width: "125px", height: "65px", marginRight: "10px" }}
        /></div>
        <div className='courseTitle'>
          <h4>Introduction to C</h4>
        </div>
      </div>
      <div style={{marginLeft: "10px", marginRight: "10px" }}>
        <div className='image'><img
          src="/19.png"
          alt="cs"
          style={{ width: "143px", height: "78px", marginRight: "0px" }}
        /></div>
        <div className='courseTitle'>
          <h4>Introduction to C#</h4>
        </div>
      </div>
      </div>
    </div>
    </div>
  );
};

export default Achievements;