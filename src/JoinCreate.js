// JoinCreate.js
import React, { useState } from 'react';
import Modal from './Modal';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './JoinCreate.css';
import Navbar from './Navbar';
import UserContext from './Register/UserContext';
import { useContext } from "react";

function JoinCreate() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [classname, setClassName] = useState('');
  const [classdescription, setDescription] = useState('');
  const [classcode, setClassCode] = useState('');

  const navigate = useNavigate();

  const { user, setUser } = useContext(UserContext);

  const handleCreateClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleJoinClick = async (event) => {
    event.preventDefault();
    try {
      await axios.post(`http://localhost:8080/createClass/joinClass/${classcode}`);
      alert("Successfully joined the class");
      navigate('/class', { state: { classname: classname } });
    } catch (error) {
      console.error('An error occurred while joining class:', error);
      alert('Failed to join class. Please check the class code and try again.');
    }
  };

  const handleCreateClassClick = async (event) => {
    event.preventDefault();

    // Check if required fields are not empty
    if (!classname || !classdescription || !classcode) {
      alert("All fields are required");
      return;
    }

    try {
      await axios.post("http://localhost:8080/createClass/insertClass", {
        classname: classname,
        classdescription: classdescription,
        classcode: classcode,
        userid: user.userid,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      alert("Class created Successfully");
      setClassName("");
      setDescription("");
      setClassCode("");
      setIsModalOpen(false);
    } catch (error) {
      console.error('An error occurred while creating class:', error);
      alert('Class code may already exist!');
    }
  };
  return (
    <div style={{ fontFamily: 'Montserrat, sans-serif' }}>
      <Navbar/>
      <p style={{ margin:'200px 0 20px 100px', fontSize: '30px', fontWeight: 'semi-bold' }}>Join or Create Class</p>
      <hr className='line' />

      <nav>
        <button className="Create" disabled={user && user.role === 'learner'} onClick={handleCreateClick}>
          Create a Class
          <button className='Createbutton' 
                  onClick={handleCreateClick} 
                  disabled={user && user.role === 'learner'}
                  style={{
                    backgroundColor: user && user.role === 'learner' ? '#ccc' : '#458C83',
                    cursor: user && user.role === 'learner' ? 'not-allowed' : 'pointer',
                    // Add other styles as needed
                  }}>Create Class</button>
        </button>

        <button className="Join">
          Join a Class with a Code<br /><br />
          <input
            className='entercode'
            placeholder='Enter Class Code'
            value={classcode}
            onChange={(event) => setClassCode(event.target.value)}
          />
          <button className='Joinbutton' onClick={handleJoinClick}>Join Class</button>
        </button>
      </nav>

      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <div className="form">
        <p style={{ fontSize: '25px', fontWeight: 'bold', backgroundColor: 'white', marginBottom: '0px' }}>Create your Class</p>
        
        <div>
          <p style={{ fontSize: '20px', backgroundColor: 'white', marginBottom: '2px' }}>Class name</p>
          <input
            className='classname'
            type="text"
            placeholder="Enter Class Name"
            value={classname}
            onChange={(event) => setClassName(event.target.value)}
          />
          {!classname && <p style={{ marginTop:'2px', color: 'red', fontSize: '10px' }}>required</p>}
        </div>

        <div>
          <p style={{ fontSize: '20px', backgroundColor: 'white', marginBottom: '2px' }}>Description</p>
          <input
            className='description'
            placeholder="Let people know what this class is all about"
            value={classdescription}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>

        {!classdescription && <p style={{ marginTop:'2px', color: 'red', fontSize: '10px' }}>required</p>}
        
        <div>
          <p style={{ fontSize: '20px', backgroundColor: 'white', marginBottom: '5px' }}>Class Code</p>
          <input
            className='classcode'
            type='text'
            value={classcode}
            onChange={(event) => setClassCode(event.target.value)}
          />
          {!classcode && <p style={{ marginTop:'2px', color: 'red', fontSize: '10px' }}>required</p>}
        </div>
        
        <button className='submit' type="submit" onClick={handleCreateClassClick}>Create Class</button> <br></br>
      </div>

        </Modal>
      )}
    </div>
  );
}

export default JoinCreate;
