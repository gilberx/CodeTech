
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useRef, useEffect, useContext,  } from 'react';
import "./Admin.css";
import { faTachometerAlt, faChalkboardTeacher, faUserGraduate, faBook, faExclamationTriangle, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { Paper } from "@mui/material";


function Educator() {
    const paperStyle={padding:"50px 20px", width:"600", margin:"20px auto"}
    const [isAddOpen, setIsAddOpen] = useState(false);
    const [isUpdateOpen, setIsUpdateOpen] = useState(false);
    const [educators, setEducators] = useState([]);

    useEffect(() => {
        fetch("https://localhost:8080/user/getAllUsers")
        .then(res=>res.json())
        .then((result)=>{
            setEducators(result);
        }
        )
    }, [])
    return(
        <main style={{ display: 'flex' }}>

        
        <div className="a-sidebar">
            <div className="a-logo">

            </div>
            <ul className="a-menu">
                <li>
                    <Link to="/dashboard" className='a-link-text' >
                        <FontAwesomeIcon icon={faTachometerAlt} style={{fontSize:"1.2rem"}} />
                        <span>Dashboard</span>
                    </Link>
                </li>
                <li className="a-active">
                    <Link to="/educator" className='a-link-text'>
                        <FontAwesomeIcon icon={faChalkboardTeacher} style={{fontSize:"1.1rem"}} />
                        <span>Educators</span>
                    </Link>
                </li>
                <li>
                    <Link to="/#" className='a-link-text'>
                        <FontAwesomeIcon icon={faUserGraduate} style={{fontSize:"1.2rem"}} />
                        <span>Learners</span>
                    </Link>
                </li>
                <li>
                    <Link to="/#" className='a-link-text'>
                        <FontAwesomeIcon icon={faBook} style={{fontSize:"1.2rem"}} />
                        <span>Courses</span>
                    </Link>
                </li>
                <li>
                    <Link to="/#" className='a-link-text'>
                        <FontAwesomeIcon icon={faExclamationTriangle} style={{fontSize:"1.2rem"}} />
                        <span>Tickets</span>
                    </Link>
                </li>
                <li className="a-logout">
                    <Link to="/#" className='a-link-text'>
                        <FontAwesomeIcon icon={faSignOut} style={{fontSize:"1.2rem"}} />
                        <span>Logout</span>
                    </Link>
                </li>
            </ul>

            
        </div>
        <div className="a-main-content">
            <div className="a-header-wrapper">
                <div className="a-header-title">
                    <span>CodeTech</span>
                    <h2>Educators</h2>
                </div>
                <div className="a-user-info">
                    <div className="user-info-box">
                        <span>admin</span>
                    </div>
                    {/* <img src="/logo.png" alt="logo"/> */}
                </div>
            </div>

            <div className="a-card-container">
                <h3 className="a-main-title">Today's data</h3>
                <div className="a-card-wrapper ">
                    <div className="a-table">
                        <Paper elevation={3} style={paperStyle}>
                            {educators.map(educator=>(
                                <Paper elevation={6} style={{margin:"10px", padding:"15px",textAlign:"left"}} key={educator.userid}>
                                    UserID: {educator.userid}
                                    Username: {educator.username}
                                    Email: {educator.email}
                                    Password: {educator.password}
                                    Firstname: {educator.firstname}
                                    Lastname: {educator.lastname}
                                    Role: {educator.role}
                                    IsDeleted: {educator.isdeleted}
                                </Paper>
                            ))}
                        </Paper>
                    </div>
                </div>
            </div>
        </div>
        
        
        </main>
    );

}

export default Educator; 