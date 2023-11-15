import React, { useState } from 'react';
import './UserProfile.css';

const UserProfile = ({ userData, onUpdate, onDelete }) => {
  const [editedData, setEditedData] = useState(userData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="user-profile">
      <h2>Personal Information</h2>
      <p style={{ color: 'white' }}>User ID:  <strong>21-1073-524</strong></p>
      <p style={{ color: 'white' }}>Role:  <strong>Student</strong></p>
        <div className="inputField">
        <input style={{ width: '300px' }}
          type="text"
          name="username"
          value={editedData.username}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          value={editedData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="firstName"
          value={editedData.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          value={editedData.lastName}
          onChange={handleChange}
        />
        </div>
        <div className='userButtons'>
      <button style={{ backgroundColor: 'red' }} onClick={onDelete}>Delete</button>
      <button style={{ marginLeft: '200px' }} onClick={() => onUpdate(editedData)}>Update</button>
        </div>
    </div>
  );
};

export default UserProfile;