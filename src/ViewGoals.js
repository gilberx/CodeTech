import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './ViewGoals.css';

const ViewGoals = () => {
  const linkStyle = {
    textDecoration: 'none',
    color: '#ffffff',
  };

  const [goals, setGoals] = useState([]);
  const [completedGoalsCount, setCompletedGoalsCount] = useState(0);

  useEffect(() => {
    // Fetch goals when the component mounts
    fetch("http://localhost:8080/userGoals/getAllUserGoals")
      .then((response) => response.json())
      .then((goalsData) => {
        // Assuming goalsData is an array of goals from the database
        const storedGoals = JSON.parse(localStorage.getItem('goals')) || [];

        // Update goals with completion state from localStorage
        const updatedGoals = goalsData.map(goal => {
          const storedGoal = storedGoals.find(savedGoal => savedGoal.sid === goal.sid);
          const completed = storedGoal ? storedGoal.completed : false;
          return { ...goal, completed };
        });

        // Count completed goals
        const count = updatedGoals.filter(goal => goal.completed).length;
        setCompletedGoalsCount(count);

        setGoals(updatedGoals);

        // Save goals to localStorage
        localStorage.setItem('goals', JSON.stringify(updatedGoals));
      })
      .catch((error) => {
        console.error("Error fetching goals:", error);
      });
  }, []);

  const handleCompleteClick = (sid) => {
    setGoals(prevGoals =>
      prevGoals.map(goal =>
        goal.sid === sid ? { ...goal, completed: true } : goal
      )
    );

    // Update completion state in localStorage
    const updatedGoals = goals.map(goal =>
      goal.sid === sid ? { ...goal, completed: true } : goal
    );
    localStorage.setItem('goals', JSON.stringify(updatedGoals));

    // Update completed goals count
    const count = updatedGoals.filter(goal => goal.completed).length;
    setCompletedGoalsCount(count);
  };

  const handleDeleteClick = (sid) => {
    // Make a DELETE request to the server to delete the goal
    fetch(`http://localhost:8080/userGoals/deleteUserGoals/${sid}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          // If the deletion was successful, update state and local storage
          const updatedGoals = goals.filter((goal) => goal.sid !== sid);
          setGoals(updatedGoals);
          setCompletedGoalsCount(updatedGoals.filter((goal) => goal.completed).length);
          localStorage.setItem('goals', JSON.stringify(updatedGoals));
        } else {
          // Handle error response from the server
          console.error('Error deleting goal:', response.status, response.statusText);
        }
      })
      .catch((error) => {
        console.error('Error deleting goal:', error);
      });
  };

  return (
    <div className="viewgoals-page">
      <div className="viewgoals-sidebar">
        <Link to="/progress" style={linkStyle}>
          <button>Progress</button>
        </Link>
        <Link to="/goals" style={linkStyle}>
          <button>Goals</button>
        </Link>
      </div>
      <div className="user-viewgoals">
        <h2>Goals</h2>
        <p style={{ color: '#53ffe8' }}>{completedGoalsCount} OUT OF {goals.length}</p>
        {goals.map((goal) => (
          <div style={{ color: 'black' }} key={goal.sid} className='goalList'>
            <div className='list'>{goal.userGoals}</div>
            <div className="viewgoalsButtons">
              <button
                onClick={() => handleCompleteClick(goal.sid)}
                disabled={goal.completed}
              >
                {goal.completed ? 'Completed' : 'Complete'}
              </button>
              <Link to={`/editgoals/${goal.sid}`} style={linkStyle}>
              <button>Edit</button>
              </Link>
              <button style={{ backgroundColor: 'red' }}
                onClick={() => handleDeleteClick(goal.sid)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewGoals;