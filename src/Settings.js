import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import './Settings.css';
import Navbar from "./Navbar";
import UserContext from "./Register/UserContext";

const Settings = ({ onUpdate }) => {
  const { user, setUser } = useContext(UserContext);

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isCurrentPasswordValid, setIsCurrentPasswordValid] = useState(true);

  const linkStyle = {
    textDecoration: 'none',
    color: '#ffffff',
  };

  useEffect(() => {
    console.log('User data from context:', user);
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setError(''); // Clear any previous error

    switch (name) {
      case 'currentPassword':
        setCurrentPassword(value);
        break;
      case 'newPassword':
        setNewPassword(value);
        break;
      case 'confirmPassword':
        setConfirmPassword(value);
        break;
      default:
        break;
    }
  };

  const handleUpdate = async () => {
    // Check if the current password is correct
    if (currentPassword !== user.password) {
      setError('Incorrect current password');
      setIsCurrentPasswordValid(false);
      return;
    }

    // Check if the new password meets criteria (e.g., length, complexity)
    if (newPassword.length < 8) {
      setError('New password must be at least 8 characters long');
      setIsCurrentPasswordValid(true);
      return;
    }

    // Check if the confirm password matches the new password
    if (newPassword !== confirmPassword) {
      setError('New password and confirm password do not match');
      setIsCurrentPasswordValid(true);
      return;
    }

    const userId = user.userid;

    // Assuming you have an `onUpdate` callback for handling updates
    const updatedUserData = {
      userId,
      role: user.role,
      username: user.username,
      email: user.email,
      password: newPassword, // Update the password
      firstname: user.firstname,
      lastname: user.lastname,
    };

    try {
      const response = await fetch(`http://localhost:8080/user/updateUser?userid=${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedUserData),
      });

      if (response.ok) {
        setIsCurrentPasswordValid(true);
        // Optionally, you can clear the password fields after a successful update
        setCurrentPassword(newPassword);
        setNewPassword('');
        setConfirmPassword('');
        onUpdate(updatedUserData);
      } else {
        console.error('Update failed:', response.statusText);
        setError('Error updating user data');
      }
    } catch (error) {
      console.error('Error during update:', error.message);
    }
  };

  const handleLogout = () => {
        
    setUser(null);
  
    localStorage.removeItem('user');
    window.location.href = "/login";
  };

  return (
    <div className="settings-page">
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
      <div className="user-settings">
        <h2>Settings</h2>
        <div className="passField">
          <h3 style={{ textAlign: 'left', paddingLeft: '10px', color: '#458C83' }}>
            Password
          </h3>
          <input
            type="password"
            name="currentPassword"
            placeholder="Current Password"
            value={currentPassword}
            onChange={handleChange}
          />
          <input
            type="password"
            name="newPassword"
            placeholder="New Password"
            onChange={handleChange}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleChange}
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {!isCurrentPasswordValid && (
          <p style={{ color: 'red' }}>Incorrect current password. Please try again.</p>
        )}
        <div className="userButtons">
          <button onClick={handleUpdate}>Change Password</button>
        </div>
      </div>
    </div>
  );
};

export default Settings;