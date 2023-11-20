import React from 'react';
import { BrowserRouter as Link, Route, Routes } from 'react-router-dom';
import './JoinClass.css';
import JoinCreate from './JoinCreate'; 

const JoinClass = () => (
  <div className="app-container">

    <Routes>
      <Route
        path="/"
        element={
          <>
            <p style={{ marginTop: '200px', marginLeft: '100px', fontStyle: 'Montserrat', fontSize: '30px', fontWeight: 'semi-bold' }}>My Active Classes</p>
            <hr className='line' />
            <nav>
              <button className="JoinCreate">
                <Link className='join' to="/JoinCreate">
                  Join or Create Class
                </Link>
              </button>
            </nav>
          </>
        }
      />
      <Route path="/JoinCreate" element={<JoinCreate />} />
    </Routes>

    <footer className='footer'>
      <p>Copyright &copy; 2023 CodeTech</p>
    </footer>
  </div>
);

export default JoinClass; 