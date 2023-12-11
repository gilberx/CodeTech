import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './Goals.css';

const Goals = () => {

  const linkStyle = {
    textDecoration: 'none',
    color: '#ffffff',
  };

  return (
    <div className="goals-page">
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
