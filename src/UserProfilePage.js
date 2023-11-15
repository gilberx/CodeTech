// UserProfilePage.js

import React, { useState } from 'react';
import UserProfile from './UserProfile';
import './UserProfile.css';

const UserProfilePage = () => {
  const [userData, setUserData] = useState({
    username: 'john_doe',
    email: 'john@example.com',
    firstName: 'John',
    lastName: 'Doe',
  });

  const handleUpdate = (updatedData) => {
    setUserData((prevData) => ({
      ...prevData,
      ...updatedData,
    }));
  };

  const handleDelete = () => {
    // Implement delete functionality
    // For simplicity, let's just clear the data in this example
    setUserData({});
  };

  return (
    <div className="user-profile-page">
      <div className="profile-sidebar">
        <button>Profile</button>
        <button>Achievements</button>
        <button>Progress</button>
        <button>Settings</button>
      </div>
      <div className="profile-content">
        <UserProfile
          userData={userData}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
};
export default UserProfilePage;