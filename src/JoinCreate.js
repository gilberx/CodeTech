// JoinCreate.js
import React, { useState } from 'react';
import Modal from './Modal';
import axios from 'axios';
import './JoinCreate.css';

function JoinCreate() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [classname, setClassName] = useState('');
  const [classdescription, setDescription] = useState('');
  const [classcode, setClassCode] = useState('');

  const handleCreateClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleJoinClick = () => {
    // Add your logic for joining a class
  };

  const handleCreateClassClick = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8080/createClass/insertClass", {
        classname: classname,
        classdescription: classdescription,
        classcode: classcode,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      alert("Class created Successfully");
      setClassName("");
      setDescription("");
      setClassCode("");
    } catch (error) {
      console.error('An error occurred while creating class:', error);
      // Optionally handle the error (e.g., show an error message to the user)
    } finally {
      setIsModalOpen(false);
      // Optionally reset the form or perform any other cleanup actions
    }
  };

  return (
    <div style={{ fontFamily: 'Montserrat, sans-serif' }}>
      <p style={{ marginTop: '200px', marginLeft: '100px', fontSize: '30px', fontWeight: 'semi-bold' }}>Join or Create Class</p>
      <hr className='line' />

      <nav>
        <button className="Create" onClick={handleCreateClick}>
          Create a Class
          <button className='Createbutton'>Create Class</button>
        </button>

        <button className="Join" onClick={handleJoinClick}>
          Join a Class with a Code<br /><br />
          <input
            className='entercode'
            placeholder='Enter Class Code'
            value={classcode}
            onChange={(event) => setClassCode(event.target.value)}
          />
          <button className='Joinbutton'>Join Class</button>
        </button>
      </nav>

      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <div className="form">
            <p style={{ fontSize: '25px', fontWeight: 'bold', backgroundColor: 'white', marginBottom: '0px' }}>Create your Class</p>
            <p style={{ fontSize: '20px', backgroundColor: 'white', marginBottom: '2px' }}>Class name</p>
            <input
              className='classname'
              type="text"
              placeholder="Enter Class Name"
              value={classname}
              onChange={(event) => setClassName(event.target.value)}
            />
            <p style={{ fontSize: '20px', backgroundColor: 'white', marginBottom: '2px' }}>Description</p>
            <input
              className='description'
              placeholder="Let people know what this class is all about"
              value={classdescription}
              onChange={(event) => setDescription(event.target.value)}
            />
            <p style={{ fontSize: '20px', backgroundColor: 'white', marginBottom: '5px' }}>Class Code</p>
            <input
              className='classcode'
              type='text'
              value={classcode}
              onChange={(event) => setClassCode(event.target.value)}
            />
            <button className='submit' type="submit" onClick={handleCreateClassClick}>Create Class</button> <br></br>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default JoinCreate;
