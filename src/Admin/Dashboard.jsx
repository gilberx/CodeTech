import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Admin.css";
import { faTachometerAlt, faChalkboardTeacher, faUserGraduate, faBook, faExclamationTriangle, faSignOut } from '@fortawesome/free-solid-svg-icons';

function Dashboard() {

    
    return(
        <main style={{ display: 'flex' }}>

        
        <div className="a-sidebar">
            <div className="a-logo">

            </div>
            <ul className="a-menu">
                <li className="a-active">
                    <Link to="/dashboard" className='a-link-text' >
                        <FontAwesomeIcon icon={faTachometerAlt} style={{fontSize:"1.2rem"}} />
                        <span>Dashboard</span>
                    </Link>
                </li>
                <li>
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
                    <h2>Dashboard</h2>
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
                    <div className="a-payment-card a-light-red">
                        <div className="a-card-header">
                            <div className="a-amount">
                                <span className="a-title">Total Educator</span>
                                <span className="a-amount-value">50</span>

                            </div>
                            <FontAwesomeIcon icon={faChalkboardTeacher} 
                                style={{
                                    color:"#fff", 
                                    padding: "1rem", 
                                    height: "30px", 
                                    width: "30px", 
                                    textAlign: "center",
                                    borderRadius: "50%",
                                    fontSize: "0.5rem",
                                    background: "red"}}>

                            </FontAwesomeIcon>
                        </div>
                    </div>
                    <div className="a-payment-card a-light-purple">
                        <div className="a-card-header">
                            <div className="a-amount">
                                <span className="a-title">Total Learner</span>
                                <span className="a-amount-value">50</span>

                            </div>
                            <FontAwesomeIcon icon={faUserGraduate} 
                                style={{
                                    color:"#fff", 
                                    padding: "1rem", 
                                    height: "30px", 
                                    width: "30px", 
                                    textAlign: "center",
                                    borderRadius: "50%",
                                    fontSize: "0.5rem",
                                    background: "purple"}}>

                            </FontAwesomeIcon>
                        </div>
                    </div>

                    <div className="a-payment-card a-light-green">
                        <div className="a-card-header">
                            <div className="a-amount">
                                <span className="a-title">Total Courses</span>
                                <span className="a-amount-value">50</span>

                            </div>
                            <FontAwesomeIcon icon={faBook} 
                                style={{
                                    color:"#fff", 
                                    padding: "1rem", 
                                    height: "30px", 
                                    width: "30px", 
                                    textAlign: "center",
                                    borderRadius: "50%",
                                    fontSize: "0.5rem",
                                    background: "green"}}>

                            </FontAwesomeIcon>
                        </div>
                    </div>

                    <div className="a-payment-card a-light-blue">
                        <div className="a-card-header">
                            <div className="a-amount">
                                <span className="a-title">Total Tickets</span>
                                <span className="a-amount-value">50</span>

                            </div>
                            <FontAwesomeIcon icon={faExclamationTriangle} 
                                style={{
                                    color:"#fff", 
                                    padding: "1rem", 
                                    height: "30px", 
                                    width: "30px", 
                                    textAlign: "center",
                                    borderRadius: "50%",
                                    fontSize: "0.5rem",
                                    background: "blue"}}>

                            </FontAwesomeIcon>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
        </main>
    );

}

export default Dashboard;