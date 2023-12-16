import React from 'react';
import { Link } from 'react-router-dom';
import './JoinClass.css';
import Navbar from './Navbar';

const JoinClass = () => (
  <>
    <style>{`
      body {
        background-color: #458C83;
        color: white;
        font-family: 'Montserrat', sans-serif;
      }
    `}</style>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;https://fonts.google.com/specimen/Montserrat700&display=swap" />
    <div>
      <Navbar/>
      <p style={{ margin:'200px 0 20px 100px', fontSize: '30px', fontWeight: 'semi-bold' }}>My Active Classes</p>
      <hr className='line' />
      <nav>
        <button className="JoinCreate">
          <Link className='join' to="/JoinCreate">
            Join or Create Class
          </Link>
        </button>
      </nav>
    </div>

    <footer className='footer'>
      <p>Copyright &copy; 2023 CodeTech</p>
    </footer>
  </>
);

export default JoinClass;
