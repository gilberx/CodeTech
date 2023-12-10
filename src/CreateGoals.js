import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CreateGoals.css';

const CreateGoals = () => {
  const [userGoals, setGoal] = useState('');

  const handleInputChange = (e) => {
    setGoal(e.target.value);
  };

  const handleCreateGoal = (e) => {
    e.preventDefault()
    const createGoal={userGoals}
    console.log(createGoal)
    fetch("http://localhost:8080/userGoals/insertUserGoals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(createGoal),
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response from the server
        console.log(data);
        alert("Goal created successfully!");
        setGoal(''); // Clear the textarea after successful creation
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

  return (
    <div className="creategoals-page">
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