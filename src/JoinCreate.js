import React from 'react';
import './JoinCreate.css';

const JoinCreate = () => (
    <div>
      <p style={{ marginTop: '200px', marginLeft: '100px', fontStyle: 'Montserrat', fontSize: '35px', fontWeight: 'semi-bold' }}>Join or Create Class</p>
      <hr className='line' />
    
      <nav>
        <button className="Create">Create a Class
          <button className='Createbutton'>Create Class</button>
        </button>
        <button className="Join">Join a Class with a Code<br/><br/>
          <input className='entercode' placeholder='Enter Class Code'/>
            <button className='Joinbutton'>Join Class</button>
        </button>
      </nav>
    </div>
);

export default JoinCreate;
