import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Settings.css';

const Settings = ({ onUpdate }) => {
  const [userId, setUserId] = useState("");
  const [role, setRole] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const linkStyle = {
    textDecoration: 'none',
    color: '#ffffff',
  };

  useEffect(() => {
    fetch("http://localhost:8080/user/getUserById/1")
      .then(response => response.json())
      .then(data => {
        if (data) {
          setUserId(data.userid);
          setRole(data.role);
          setUsername(data.username);
          setEmail(data.email);
          setPassword(data.password);
          setFirstname(data.firstname);
          setLastname(data.lastname);
        }
      })
      .catch(error => console.error("Error fetching user data:", error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setError(""); // Clear any previous error

    switch (name) {
      case "currentPassword":
        setCurrentPassword(value);
        break;
      case "newPassword":
        setNewPassword(value);
        break;
      case "confirmPassword":
        setConfirmPassword(value);
        break;
      default:
        break;
    }
  };

  const handleUpdate = () => {
    // Check if the current password is correct
    if (currentPassword !== password) {
      setError('Incorrect current password');
      return;
    }

    // Check if the new password meets criteria (e.g., length, complexity)
    if (newPassword.length < 8) {
      setError('New password must be at least 8 characters long');
      return;
    }

    // Check if the confirm password matches the new password
    if (newPassword !== confirmPassword) {
      setError('New password and confirm password do not match');
      return;
    }

    const updatedUserData = {
      userId,
      role,
      username,
      email,
      password: newPassword, // Update the password
      firstname,
      lastname,
    };

    fetch(`http://localhost:8080/user/updateUser?userid=${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedUserData),
    })
      .then(response => response.json())
      .then(updatedUser => {
        onUpdate(updatedUser);
      })
      .catch(error => {
        console.error('Error updating user data:', error);
        setError('Error updating user data');
      });
  };

  return (
    <div className="settings-page">
       <div className="sidebar">
          <Link to="/" style={linkStyle}>
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
        <div className="userButtons">
          <button onClick={handleUpdate}>Change Password</button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
