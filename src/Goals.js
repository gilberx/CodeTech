import React, { useState, useContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './Goals.css';
import UserContext from './Register/UserContext';
import Navbar from './Navbar';

const Goals = () => {

  const linkStyle = {
    textDecoration: 'none',
    color: '#ffffff',
  };
  const {user, setUser} = useContext(UserContext);
  useEffect(() => {
    console.log("logged in user: ", user);
  }, [user]);
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
    <div className="goals-page">
      <Navbar/>
      <div className="goals-sidebar">
            <Link to="/progress" style={linkStyle}>
              <button>Progress</button>
            </Link>
            <Link to="/goals" style={linkStyle}>
              <button>Goals</button>
            </Link>
          </div>
    <div className="user-goals">
        <h2>Goals</h2>
        <div className="goalsButtons">
        <div className='cppGroup'>
        <img
          src="/17.png"
          alt="cpp"
          style={{ width: "125px", height: "65px", marginRight: "10px" }}
        />
        <Link to="/viewgoals/cppGroup" style={linkStyle}>
        <button>
          View Goals
        </button>
        </Link>
        <Link to="/creategoals/cppGroup" style={linkStyle}>
        <button
          style={{ marginLeft: "10px" }}
        >
          Create Goals
        </button>
        </Link>
        </div>
        <div className='cGroup'>
        <img
          src="/18.png"
          alt="c"
          style={{ width: "125px", height: "65px", marginRight: "10px" }}
        />
        <Link to="/viewgoals/cGroup" style={linkStyle}>
        <button>
          View Goals
        </button>
        </Link>
        <Link to="/creategoals/cGroup" style={linkStyle}>
        <button
          style={{ marginLeft: "10px" }}
        >
          Create Goals
        </button>
        </Link>
        </div>
        <div className='csGroup'>
        <img
          src="/19.png"
          alt="cs"
          style={{ width: "150px", height: "80px", marginRight: "10px" }}
        />
        <Link to="/viewgoals/csGroup" style={linkStyle}>
        <button>
          View Goals
        </button>
        </Link>
        <Link to="/creategoals/csGroup" style={linkStyle}>
        <button
          style={{ marginLeft: "10px" }}
        >
          Create Goals
        </button>
        </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Goals;
