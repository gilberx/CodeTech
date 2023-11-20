import React, { useState } from 'react';
import Modal from './Modal'; 
import './JoinCreate.css';

const JoinCreate = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreateClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleJoinClick = () => {
  };

  const handleCreateClassClick = () => {
  };
  
  
  return (
    <div>
      <p style={{ marginTop: '200px', marginLeft: '100px', fontStyle: 'Montserrat', fontSize: '30px', fontWeight: 'semi-bold' }}>Join or Create Class</p>
      <hr className='line' />

      <nav>
        <button className="Create" onClick={handleCreateClick}>
          Create a Class
          <button className='Createbutton'>Create Class</button>
        </button>

        <button className="Join" onClick={handleJoinClick}>
          Join a Class with a Code<br/><br/>
          <input className='entercode' placeholder='Enter Class Code'/>
          <button className='Joinbutton'>Join Class</button>
        </button>
      </nav>

      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <div className="form">
         
              <p style={{fontSize:'25px', fontWeight:'bold', backgroundColor:'white', marginBottom:'0px'}}>Create your Class</p>
         
                <p style={{fontSize:'20px', backgroundColor:'white', marginBottom:'2px'}}>Class name</p>
                  <input className='classname' type="text" />
      
                <p style={{fontSize:'20px', backgroundColor:'white', marginBottom:'2px'}}>Description</p>
                  <input className='description' placeholder="Let people know what this class is all about" /> 

                <p style={{fontSize:'20px', backgroundColor:'white', marginBottom:'5px'}}>Class Code</p>
                  <input className='classcode' type='text' /> 
          
            <button className='submit' type="submit" onClick={handleCreateClassClick}>Create Class</button> <br></br>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default JoinCreate;
