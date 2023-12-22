import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import './JoinClass.css';
import Navbar from './Navbar';
import axios from 'axios';
import UserContext from './Register/UserContext';


const JoinClass = () => {
  const [classes, setClasses] = useState([]);
  const {user, setUser} = useContext(UserContext);

  const handleJoinClass = () => {
    // Handle join class logic if needed
  };

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        // Include the user's userid in the request parameters
        const response = await axios.get(`http://localhost:8080/createClass/getClassbyId?userid=${user.userid}`);
        setClasses(response.data);
      } catch (error) {
        console.error('Error fetching classes:', error);
      }
    };

    fetchClasses();
  }, [user]);

  return (
    <>
      <style>{`
        body {
          background-color: #458C83;
          color: white;
          font-family: 'Montserrat', sans-serif;
        }
      `}</style>
      <Navbar />
      <div className="content-container10">
        <div className="class-list">
          <p className="active-classes">My Active Classes</p>
          <hr className='line' /><br></br>
          <div className="class-items-container">
          {classes.map((classItem) => (
            <Link to={`/class/${classItem.classcode}`} key={classItem.classcode} className="class-item-link">
              <Paper onClick={handleJoinClass} className="class-item">
                  <p>{classItem.classname}</p>
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '30px' }}>
                    <Paper style={{ backgroundColor: 'rgba(163, 163, 163, 0.33)', width: '250px', height: '100px', borderRadius: '20px', marginLeft: '10px', marginRight: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <Paper style={{ backgroundColor: 'rgba(163, 163, 163, 0.33)', width: '220px', height: '135px', borderRadius: '20px', marginRight: '0px' }}>
                        <Paper style={{ backgroundColor: '#F0F0F0', borderRadius: '20px', width: '260px', height: '100px', marginTop: '38px', marginLeft: '-19.5px' }}>
                          <p style={{ textAlign: 'center', fontSize: '12px', paddingTop: '20px', paddingLeft: '10px', paddingRight: '15px', fontWeight: '600' }}>{classItem.classdescription}</p>
                        </Paper>
                      </Paper>
                    </Paper>
                  </div>
                </Paper>
              </Link>
            ))}
            <Link to="/JoinCreate" className='join'>
              <button className="JoinCreate">
                Join or Create Class
              </button>
            </Link>
          </div>
        </div>
      </div>
      <footer className='footer'>
        <p>Copyright &copy; 2023 CodeTech</p>
      </footer>
    </>
  );
};

export default JoinClass;
