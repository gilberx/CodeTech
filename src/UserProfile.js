import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./App.css";

const UserProfile = ({ onUpdate, onDelete }) => {
  const [userId, setUserId] = useState("");
  const [role, setRole] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const linkStyle = {
    textDecoration: 'none',
    color: '#ffffff',
  };

  useEffect(() => {
    fetch("http://localhost:8080/user/getUserById/1")  // Replace "1" with the actual user ID
        .then(response => response.json())
        .then(data => {
            if (data) {
                setUserId(data.userid);  // Assuming your UserEntity has a "userId" property
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

const handleUpdate = () => {
  
  const updatedUserData = {
    userId,
    role,
    username,
    email,
    password,
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
      // Assuming that the updateUser function returns the updated user
      onUpdate(updatedUser);
      // You can also update the state in the component if needed
    })
    .catch(error => console.error("Error updating user data:", error));
};

  return (
    <div className="user-profile-page">
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
    <div className="user-profile">
      <h2>Personal Information</h2>
      <div className="picture-container">

        <div style={{backgroundColor: "white"}}>Picture</div>
        <div>
          <p style={{ color: "white" }}>
            User ID: <strong>{userId}</strong>
          </p>
          <p style={{ color: "white" }}>
            Role: <strong>{role}</strong>
          </p>
        </div>
      </div>
      <div className="inputField">
        <input
          style={{ width: "300px" }}
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          name="firstName"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
        <input
          type="text"
          name="lastName"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
      </div>
      <div className="userButtons">
        <button style={{ backgroundColor: "red" }} onClick={onDelete}>
          Delete
        </button>
        <button
          style={{ marginLeft: "200px" }}
          onClick={handleUpdate}
        >
          Update
        </button>
      </div>
    </div>
    </div>
  );
};

export default UserProfile;