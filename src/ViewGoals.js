import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './ViewGoals.css';
import UserContext from './Register/UserContext';
import Navbar from './Navbar';

const ViewGoals = () => {
  const linkStyle = {
    textDecoration: 'none',
    color: '#ffffff',
  };

  const [goals, setGoals] = useState([]);
  const [completedGoalsCount, setCompletedGoalsCount] = useState(0);
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    console.log("logged in user: ", user);
  }, [user]);

  useEffect(() => {
    const getCourseGroupFromPath = () => {
      if (window.location.pathname.includes("/cppGroup")) {
        return "cpp";
      } else if (window.location.pathname.includes("/cGroup")) {
        return "c";
      } else if (window.location.pathname.includes("/csGroup")) {
        return "cs";
      }
      return "none";
    };

    // Fetch goals when the component mounts
    fetch("http://localhost:8080/userGoals/getAllUserGoals")
      .then((response) => response.json())
      .then((goalsData) => {
        const storedGoals = JSON.parse(localStorage.getItem('goals')) || [];
        const courseGroup = getCourseGroupFromPath();
        console.log("Course Group:", courseGroup);

        // Filter goals based on the course group in the URL
        const filteredGoals = goalsData.filter((goal) => {
          const included = courseGroup ? goal.goalCourse === courseGroup : true;
          console.log(`Goal ${goal.sid}: ${goal.userGoals} - ${included ? 'Included' : 'Excluded'}`);
          return included;
        });

        // Update goals with completion state from localStorage
        const updatedGoals = filteredGoals.map(goal => {
          const storedGoal = storedGoals.find(savedGoal => savedGoal.sid === goal.sid);
          const completed = storedGoal ? storedGoal.completed : false;
          return { ...goal, completed };
        });

      const count = filteredGoals.filter((goal) => goal.goalStatus === 'complete').length;
      setCompletedGoalsCount(count);

        console.log("Filtered Goals:", filteredGoals);
        console.log("All Updated Goals:", updatedGoals);
        setGoals(updatedGoals);

        // Save goals to localStorage
        localStorage.setItem('goals', JSON.stringify(updatedGoals));
      })
      .catch((error) => {
        console.error("Error fetching goals:", error);
      });
  }, [user]); // Include user in the dependency array if needed

  const handleCompleteClick = async (sid) => {
    try {
      // Make a PUT request to your backend to update the goal status
      const response = await fetch(`http://localhost:8080/userGoals/updateGoalStatus?sid=${sid}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ goalStatus: 'complete' }), // Send the new status
      });
  
      if (response.ok) {
        // If the update is successful, update the local state
        setGoals((prevGoals) =>
          prevGoals.map((goal) =>
            goal.sid === sid ? { ...goal, goalStatus: 'complete' } : goal
          )
        );
  
        console.log('Goal status updated successfully:', response.status, response.statusText);
      } else {
        // Handle error response from the server
        console.error('Error updating goal status:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error updating goal status:', error);
    }
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

  if (!user) {
    return (
      <main className='a-notadmin-main'>
        <div className='a-notadmin-container'>
          <form className='a-notadmin-form'>
            <h1 style={{ fontSize: '35px', textAlign: 'center' }}>You are not logged in!</h1>
            <div style={{ marginTop: '10px', marginBottom: '20px', textAlign: 'center', padding: "0 10px" }}>
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
    <div className="viewgoals-page">
      <Navbar />
      <div className="viewgoals-sidebar">
        <Link to="/progress" style={linkStyle}>
          <button>Progress</button>
        </Link>
        <Link to="/goals" style={linkStyle}>
          <button>Goals</button>
        </Link>
      </div>
      <div className="user-viewgoals" style={{overflow: 'auto', maxHeight: '600px'}}>
        <h2>Goals</h2>
        <p style={{ color: '#53ffe8' }}>{completedGoalsCount} OUT OF {goals.length}</p>
        {goals.map((goal) => (
          <div style={{ color: 'black' }} key={goal.sid} className='goalList'>
            <div className='list'>{goal.userGoals}</div>
            <div className="viewgoalsButtons">
              <button
                onClick={() => handleCompleteClick(goal.sid)}
                disabled={goal.goalStatus === 'complete'}
              >
              {goal.goalStatus === 'complete' ? 'Completed' : 'Complete'}
              </button>
              <Link to={`/editgoals/${goal.sid}`} style={linkStyle}>
                <button>Edit</button>
              </Link>
              <button
                style={{ backgroundColor: 'red' }}
                onClick={() => handleDeleteClick(goal.sid)}
              >
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
