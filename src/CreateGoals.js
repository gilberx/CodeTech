import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CreateGoals.css';
import UserContext from './Register/UserContext';
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const CreateGoals = () => {
  const [userGoals, setGoal] = useState('');
  const {user, setUser} = useContext(UserContext);
  useEffect(() => {
    console.log("logged in user: ", user);
  }, [user]);

  const handleInputChange = (e) => {
    setGoal(e.target.value);
  };

  const handleCreateGoal = (e) => {
    e.preventDefault()

    let course;
    if (window.location.pathname.includes("/cppGroup")) {
      course = "cpp";
    } else if (window.location.pathname.includes("/cGroup")) {
      course = "c";
    } else if (window.location.pathname.includes("/csGroup")) {
      course = "cs";
    } else {
      course = "none";
    }

    const createGoal={
      userGoals,
      course,
    }
    console.log(createGoal)
    fetch("http://localhost:8080/userGoals/insertUserGoals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        goals: createGoal,
        course: course,
    }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        alert("Goal created successfully!");
        setGoal(''); 
      })
      .catch(error => {
        console.error('Error:', error);
        alert("Error creating goal. Please try again.");
      });
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
    <div className="creategoals-page">
      <Navbar/>
      <div className="creategoals-sidebar">
        <Link to="/progress" style={linkStyle}>
          <button>Progress</button>
        </Link>
        <Link to="/goals" style={linkStyle}>
          <button>Goals</button>
        </Link>
      </div>
      <div className="user-creategoals">
        <h2>Create Goals</h2>
        <div className='creategoals-textfield'>
          <textarea
            placeholder="Type here..."
            value={userGoals}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="creategoalsButtons">
          <button onClick={handleCreateGoal}>
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateGoals;