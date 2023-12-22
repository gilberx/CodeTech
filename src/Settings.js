import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import './Settings.css';
import Navbar from "./Navbar";
import UserContext from "./Register/UserContext";

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Settings = ({ onUpdate }) => {
  const { user, setUser } = useContext(UserContext);

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isCurrentPasswordValid, setIsCurrentPasswordValid] = useState(true);

  const linkStyle = {
    textDecoration: 'none',
    color: '#ffffff',
  };



  const handleUpdate = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
  
    if (!currentPassword || !newPassword || !confirmPassword) {
      setError('All input fields are required');
      return;
    }
  
    // Check if the confirm password matches the new password
    if (newPassword !== confirmPassword) {
      setError('New password and confirm password do not match');
      return;
    }
  
    const v1 = PWD_REGEX.test(newPassword);
    if (!v1) {
      setError('Must be at least 8 characters and include lowercase, uppercase, number, and a special character.');
      return;
    }
  
    try {
      const response = await fetch(`http://localhost:8080/user/authenticate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          usernameOrEmail: user.username,
          password: currentPassword,
        }),
      });
  
      const authenticationResult = await response.json();
  
      if (authenticationResult.user) {
        const newuser = authenticationResult.user;
        const updatedUserData = {
          userid: newuser.userid,
          username: newuser.username,
          email: newuser.email,
          password: newPassword, // Update the password
          firstname: newuser.firstname,
          lastname: newuser.lastname,
          role: newuser.role,
          isDelete: false,
        };
  
        try {
          const response = await fetch(`http://localhost:8080/user/updateUser?userid=${user.userid}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedUserData),
          });
  
          if (response.ok) {
            setIsCurrentPasswordValid(true);
            // Optionally, you can clear the password fields after a successful update
            setCurrentPassword('');
            setNewPassword('');
            setConfirmPassword('');
            setUser(newuser);
            localStorage.setItem('user', JSON.stringify(newuser));
            setSuccess('Password updated successfully.');
            onUpdate(updatedUserData);
          } else {
            console.error('Update failed:', response.statusText);
            setError('Error updating user data');
          }
        } catch (error) {
          console.error('Error during update:', error.message);
        }
      } else {
        setError('Incorrect current password');
      }
    } catch (error) {
      console.error('Error during authentication:', error.message);
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
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
          <input
            type="password"
            name="newPassword"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <br/>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && <p style={{ color: 'green' }}>{success}</p>}
        <div className="userButtons">
          <button onClick={handleUpdate}>Change Password</button>
        </div>
        
      </div>
    </div>
  );
};

export default Settings;