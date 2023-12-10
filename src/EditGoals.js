import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate} from 'react-router-dom';
import './EditGoals.css';

const EditGoals = () => {
  const linkStyle = {
    textDecoration: 'none',
    color: '#ffffff',
  };

  const { sid } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [goalDetails, setGoalDetails] = useState({
    userGoals: '',
  });

  useEffect(() => {
    setLoading(true);

    fetch(`http://localhost:8080/userGoals/getUserGoals/${sid}`)
      .then((response) => response.json())
      .then((goalData) => {
        setGoalDetails(goalData);
      })
      .catch((error) => {
        console.error('Error fetching goal details:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [sid]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setGoalDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleEditClick = () => {
    fetch(`http://localhost:8080/userGoals/updateUserGoals?sid=${sid}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(goalDetails),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Goal updated successfully');
          navigate(-1);
        } else {
          console.error('Error updating goal:', response.status, response.statusText);
        }
      })
      .catch((error) => {
        console.error('Error updating goal:', error);
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="editgoals-page">
      <div className="sidebar">
        <Link to="/progress" style={linkStyle}>
          <button>Progress</button>
        </Link>
        <Link to="/goals" style={linkStyle}>
          <button>Goals</button>
        </Link>
      </div>
      <div className="user-editgoals">
        <h2>Edit Goal</h2>
        <div className="editgoals-textfield">
          <textarea
            placeholder="Type here..."
            onChange={handleInputChange}
            name="userGoals"
            value={goalDetails.userGoals}
          ></textarea>
        </div>
        <div className="editgoalsButtons">
          <button onClick={handleEditClick}>Edit</button>
        </div>
      </div>
    </div>
  );
};

export default EditGoals;
