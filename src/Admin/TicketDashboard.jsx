
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useRef, useEffect, useContext,  } from 'react';
import "./Admin.css";
import UserContext from "../Register/UserContext";
import Modal from "../Modal";
import Footer from "../Footer";
import { faTachometerAlt, faChalkboardTeacher, faUserGraduate, faBook, faExclamationTriangle, faSignOut, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { Paper, Box, Button } from "@mui/material";


const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_CHARACTERS = 250;


function TicketDashboard() {
    
    const { user, setUser } = useContext(UserContext);
    useEffect(() => {
        console.log("logged in user: ", user);
    }, [user]);

    const [isAddOpen, setIsAddOpen] = useState(false);
    const [isUpdateOpen, setIsUpdateOpen] = useState(false);
    const [tickets, setTickets] = useState([]);
    
    const [submitClicked, setSubmitClicked] = useState(false);

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);

    const [title, setTitle] = useState('');
    const [category, setCategory] = useState(false);
    const [details, setDetails] = useState('');
    const [status, setStatus] = useState('');

    const [errMsg, setErrMsg] = useState(false);
    const [emptyInput, setEmptyInput] = useState(false);

    const [updateTicket, setUpdateTicket] = useState(null);

    const [isModalAddSuccessOpen, setIsModalAddSuccessOpen] = useState(false);
    const [isModalEditSuccessOpen, setIsModalEditSuccessOpen] = useState(false);
    const [isModalDeleteSuccessOpen, setIsModalDeleteSuccessOpen] = useState(false);
    const [isModalDeleteConfirmOpen, setIsModalDeleteConfirmOpen] = useState(false);
    const [modalDeleteTicket, setModalDeleteTicket] = useState(null);

    const handleCloseModalAddSuccess = () => {
        setIsModalAddSuccessOpen(false);
    };

    const handleCloseModalEditSuccess = () => {
        setIsModalEditSuccessOpen(false);
    };

    const handleCloseModalDeleteSuccess = () => {
        setIsModalDeleteSuccessOpen(false);
        
    };

    const handleCloseModalDeleteConfirm = () => {
        setIsModalDeleteConfirmOpen(false);
    };

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    const handleDetailsChange = (e) => {
        const inputText = e.target.value;
        if (inputText.length <= MAX_CHARACTERS) {
            setDetails(inputText);
        }
    };

    const handleLogout = () => {
        
        setUser(null);
    
        localStorage.removeItem('user');
        window.location.href = "/login";
      };
    
    const resetForm = () => {
        setEmail('');
        setTitle('');
        setCategory('');
        setDetails('');
        setStatus('');
        setEmptyInput(false);
        setSubmitClicked(false);
        setValidEmail(false);
      };

    
    const handleCloseAddModal = () => {
        setIsAddOpen(false);
        resetForm();
    };

    const handleCloseUpdateModal = () => {
        setIsUpdateOpen(false);
        setUpdateTicket(null);
        resetForm();
      };
    
      const handleEdit = (ticket) => {
        setUpdateTicket(ticket);
        setIsUpdateOpen(true);

        setEmail(ticket.email);
        setTitle(ticket.title);
        setDetails(ticket.details);
        setCategory(ticket.category);
        setStatus(ticket.status);
        setErrMsg('');
        setEmptyInput(false);
        setSubmitClicked(false);
        setValidEmail(true);
      };
    useEffect(() => {
        const result = EMAIL_REGEX.test(email);
        setValidEmail(result);
    }, [email]);


    const handleSubmitUpdate = async (e) => {
        e.preventDefault();
        setSubmitClicked(true);
        if(submitClicked && (!title || !details || !category || !email )){
            setEmptyInput(true);
            setErrMsg("All inputs are required")
            return;
        }
        const v2 = EMAIL_REGEX.test(email);
        if(!v2){
            setErrMsg("Invalid email input")
            console.log(errMsg)
            return;
        }
        
        const ticketDetails = {
          title,
          email,
          category,
          details,
          status,
          timestamp: updateTicket.timestamp,
          isDelete: false,
          user: {userid: user.userid}
        };
        console.log("email: ", email);
    
        try {
          const response = await fetch(`http://localhost:8080/ticket/updateTicket?ticketid=${updateTicket.ticketid}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(ticketDetails),
          });
    
          if (response.ok) {
            console.log('Ticket updated successfully:', ticketDetails);
            handleCloseUpdateModal();
            setIsModalEditSuccessOpen(true);
          } else {
            console.error('Update failed:', response.statusText);
          }
        } catch (error) {
          console.error('Error during update:', error.message);
        }
        handleCloseUpdateModal();
    };

    useEffect(() => {
        fetch("http://localhost:8080/ticket/getAllTickets")
          .then((res) => res.json())
          .then((result) => {
            const activeTickets = result.filter(
              (ticket) => !ticket.isDelete
            );
      
            setTickets(activeTickets);
          })
          .catch((error) => {
            console.error('Error fetching tickets:', error);
          });


      }, [isAddOpen, isUpdateOpen, isModalDeleteSuccessOpen, isModalAddSuccessOpen, isModalEditSuccessOpen]);

      const handleDelete = (ticketid) => {
            fetch(`http://localhost:8080/ticket/removeTicket?ticketid=${ticketid}`, {
                method: 'PUT',
            })
                .then((res) => res.json())
                .then((result) => {
                    console.log('ticket removed successfully:', result);
                })
                .catch((error) => {
                    console.error('Error removing ticket:', error);
                });
    };
    const handleConfirmDelete = (ticketid) => {
        setIsModalDeleteConfirmOpen(true);
        setModalDeleteTicket(ticketid);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitClicked(true);
        
        if(submitClicked && (!title || !details || !category || !email )){
            setEmptyInput(true);
            setErrMsg("All inputs are required")
            return;
        }
        const v2 = EMAIL_REGEX.test(email);
        if(!v2){
            setErrMsg("Invalid email input")
            console.log(errMsg)
            return;
        }
        
        const ticketDetails = {
            title,
            email,
            category,
            details,
            status,
            timestamp:new Date().toISOString(),
            isDelete: false,
            user: {userid: user.userid}
          };
        console.log("ticket: ", ticketDetails);
        try {
            const response = await fetch("http://localhost:8080/ticket/insertTicket", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(ticketDetails),
            });

    
            if (response.ok) {
                
                const ticketData = await response.json();
                console.log("New ticket Registered: ", ticketData);
                setIsAddOpen(false); 
                setIsModalAddSuccessOpen(true);
            } else {
                console.error('Registration failed:', response.statusText);
            }
        } catch (error) {
            console.error('Error during registration:', error.message);
        }

        handleCloseAddModal();
        
    }

    const isAdmin =
    user &&
    user.userid === 1 &&
    user.email === 'admin@cit.edu' &&
    user.username === 'admin' &&
    user.firstname === 'code' &&
    user.lastname === 'tech' &&
    user.isDelete === false &&
    user.role === 'admin';

    if (!isAdmin) {
        return (
            <main className='a-notadmin-main'>
            <div className='a-notadmin-container'>
                <form className='a-notadmin-form'>
                    <h1 style={{fontSize:'35px',textAlign:'center'}}>Off Access!</h1>
                    <div style={{marginTop:'10px', marginBottom:'20px', textAlign:'center', padding:"0 10px"}}>
                        <span className="small-text">This page is for admin-only access. You don't have the necessary privileges to view this content.</span>
                    </div>
                    <Link to="/login" className='link-btn'>
                        <button className="btn">Go to login</button>
                    </Link>
                </form>
            </div>
        </main>
        );
    }
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
                <li>
                    <Link to="/educator" className='a-link-text'>
                        <FontAwesomeIcon icon={faChalkboardTeacher} style={{fontSize:"1.1rem"}} />
                        <span>Educators</span>
                    </Link>
                </li>
                <li>
                    <Link to="/learner" className='a-link-text'>
                        <FontAwesomeIcon icon={faUserGraduate} style={{fontSize:"1.2rem"}} />
                        <span>Learners</span>
                    </Link>
                </li>
                <li>
                <Link to="/messagedashboard" className='a-link-text'>
                        <FontAwesomeIcon icon={faBook} style={{fontSize:"1.2rem"}} />
                        <span>Messages</span>
                    </Link>
                </li>
                <li className="a-active">
                    <Link to="/ticketdashboard" className='a-link-text'>
                        <FontAwesomeIcon icon={faExclamationTriangle} style={{fontSize:"1.2rem"}} />
                        <span>Tickets</span>
                    </Link>
                </li>
                <li className="a-logout">
                    <Link to="/#" className='a-link-text' onClick={handleLogout}>
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
                    <h2>Tickets</h2>
                </div>
                <div className="a-user-info">
                    <div className="user-info-box">
                        <span>admin</span>
                    </div>
                    {/* <img src="/logo.png" alt="logo"/> */}
                </div>
            </div>

            <div className="a-card-container">
                    {/* <div className="a-card-wrapper"> */}
                        {/* <Paper elevation={3} style={paperStyle}> */}


                        <div className="a-add-educator-btn">
                            <button className="a-add-btn-educator" onClick={() => setIsAddOpen(true)}>
                                Add +
                            </button>
                        </div>
                        {tickets.length === 0 ? (
                            <div className="a-no-educators">
                                <p>There are currently no active tickets...</p>
                            </div>
                        ) : (
                            <div style={{ overflowX: 'auto' }}>
                            <table className="a-table">
                                <thead>
                                <tr>
                                    <th>Ticket ID</th>
                                    <th>User ID</th>
                                    <th>Title</th>
                                    <th>Email</th>
                                    <th>Category</th>
                                    <th>Details</th>
                                    <th>Status</th>
                                    <th>Timestamp</th>
                                    <th>Actions</th>

                                </tr>
                                </thead>
                                <tbody>
                                {tickets.map((ticket) => (
                                    <tr key={ticket.ticketid}>
                                    <td>{ticket.ticketid}</td>
                                    <td>{ticket.user.userid}</td>
                                    <td>{ticket.title}</td>
                                    <td>{ticket.email}</td>
                                    <td>{ticket.category}</td>
                                    <td>{ticket.details}</td>
                                    <td>{ticket.status}</td>
                                    <td>{new Date(ticket.timestamp).toLocaleDateString()}</td>
                                    
                                    <td>
                                        <button className="a-btn-educator "
                                        onClick={() => handleEdit(ticket)}
                                        >
                                        Edit
                                        </button>
                                        <button className="a-btn-educator a-red-bg"
                                        onClick={() => handleConfirmDelete(ticket.ticketid)}
                                        >
                                        Delete
                                        </button>
                                    </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                            </div>
                        )}
                        
                </div>
        </div>
        {isAddOpen && (
        <Modal onClose={handleCloseAddModal}>
          <div className="a-ticket-modal">
            
            <p style={{ fontSize: '25px', fontWeight: 'bold', backgroundColor: 'white', marginBottom: '20px' }}>Add New Ticket</p>
            <div className="ticket-input-label">
                <h5>Concern Title</h5>
                {title === '' && <span style={{ color: 'red', marginLeft:'5px' }}>*</span>}
            </div>
            <input
                className={`a-input`}
                type="text"
                id="titl"
                autoComplete="off"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                aria-describedby="uidnote"
            />

            <div className="ticket-input-label">
                <h5>Email Address</h5>
                {email === '' && <span style={{ color: 'red', marginLeft:'5px' }}>*</span>}
            </div>
            <input
                className={`a-input`}
                type="text"
                id="email"
                autoComplete="off"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-invalid={validEmail ? "false" : "true"}
                aria-describedby="uidnote"
            />
            
                {console.log("validemail:", validEmail)}
                <div className="ticket-input-label">
                    <h5>Concern Category</h5>
                    {category === '' && <span style={{ color: 'red', marginLeft:'5px' }}>*</span>}
                </div>
                <select
                    className={`ticket-input`}
                    id="category"
                    value={category}
                    onChange={handleCategoryChange}
                    
                >
                    <option value=''>Select a category</option>
                    <option value="Account Issues">Account Issues</option>
                    <option value="Class Management">Class Management</option>
                    <option value="Ticket Submissions">Ticket Submissions</option>
                    <option value="Admin Assistance">Admin Assistance</option>
                    <option value="Course Content">Course Content</option>
                    <option value="Technical Glitches">Technical Glitches</option>
                    <option value="Feedback and Suggestions">Feedback and Suggestions</option>
                    <option value="General Inquiries">General Inquiries</option>
                </select>
            
            
                
                <div className="ticket-input-label">
                    <h5>Details</h5>
                    {details === '' && <span style={{ color: 'red', marginLeft:'5px' }}>*</span>}
                </div>
                <textarea
                        className={`ticket-input ${details.length > MAX_CHARACTERS ? 'invalid' : ''}`}
                        id="details"
                        autoComplete="off"
                        required
                        value={details}
                        onChange={handleDetailsChange}
                        aria-describedby="uidnote"
                        rows={5}
                        style={{
                            width: '100%',
                            outline: 'none',
                            fontSize: '1rem',
                            margin: '5px 0',
                            padding: '15px 15px',
                            lineHeight: '25px',
                            borderRadius: '10px',
                            border: '2px solid #7c7c7c',
                            background: 'transparent',
                            zIndex: '1111',
                            fontFamily: "'Inter', sans-serif",
                            resize: 'none',
                        }}
                    ></textarea>
                    <div style={{ fontSize: '10px', color: '#bbbbbb' }}>
                        {details.length}/{MAX_CHARACTERS}
                    </div>
                
            

            
                    <div className="ticket-input-label">
                        <h5>Status</h5>
                        {status === '' && <span style={{ color: 'red', marginLeft: '5px' }}>*</span>}
                    </div>
                    <div className="ticket-status-radio">
                        <input
                        type="radio"
                        id="statusOpen"
                        value="Open"
                        checked={status === 'Open'}
                        onChange={() => setStatus('Open')}
                        defaultChecked
                        />
                        <label htmlFor="statusOpen">Open</label>

                        <input
                        type="radio"
                        id="statusSolved"
                        value="Solved"
                        checked={status === 'Solved'}
                        onChange={() => setStatus('Solved')}
                        />
                        <label htmlFor="statusSolved">Solved</label>
                        
                    </div>
            
                    
            <div style={{display: 'flex'}}>
                <div className="error-message" style={{ color: 'red', margin: '10px 0', fontSize: '10px' }}>
                            {errMsg}
                    </div><button className='a-ticket-submit' type="submit" onClick={handleSubmit}>Add</button> <br></br>

            </div>
                    
            
          </div>
        </Modal>
      )}

    {isUpdateOpen && (
        <Modal onClose={handleCloseUpdateModal}>
          <div className="a-ticket-modal">
            
            <p style={{ fontSize: '25px', fontWeight: 'bold', backgroundColor: 'white', marginBottom: '20px' }}>Add New Ticket</p>
            <div className="ticket-input-label">
                <h5>Concern Title</h5>
                {title === '' && <span style={{ color: 'red', marginLeft:'5px' }}>*</span>}
            </div>
            <input
                className={`a-input`}
                type="text"
                id="titl"
                autoComplete="off"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                aria-describedby="uidnote"
            />

            <div className="ticket-input-label">
                <h5>Email Address</h5>
                {email === '' && <span style={{ color: 'red', marginLeft:'5px' }}>*</span>}
            </div>
            <input
                className={`a-input`}
                type="text"
                id="email"
                autoComplete="off"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-invalid={validEmail ? "false" : "true"}
                aria-describedby="uidnote"
            />
            
                <div className="ticket-input-label">
                    <h5>Concern Category</h5>
                    {category === '' && <span style={{ color: 'red', marginLeft:'5px' }}>*</span>}
                </div>
                <select
                    className={`ticket-input`}
                    id="category"
                    value={category}
                    onChange={handleCategoryChange}
                    
                >
                    <option value=''>Select a category</option>
                    <option value="Account Issues">Account Issues</option>
                    <option value="Class Management">Class Management</option>
                    <option value="Ticket Submissions">Ticket Submissions</option>
                    <option value="Admin Assistance">Admin Assistance</option>
                    <option value="Course Content">Course Content</option>
                    <option value="Technical Glitches">Technical Glitches</option>
                    <option value="Feedback and Suggestions">Feedback and Suggestions</option>
                    <option value="General Inquiries">General Inquiries</option>
                </select>
            
            
                
                <div className="ticket-input-label">
                    <h5>Details</h5>
                    {details === '' && <span style={{ color: 'red', marginLeft:'5px' }}>*</span>}
                </div>
                <textarea
                        className={`ticket-input ${details.length > MAX_CHARACTERS ? 'invalid' : ''}`}
                        id="details"
                        autoComplete="off"
                        required
                        value={details}
                        onChange={handleDetailsChange}
                        aria-describedby="uidnote"
                        rows={5}
                        style={{
                            width: '100%',
                            outline: 'none',
                            fontSize: '1rem',
                            margin: '5px 0',
                            padding: '15px 15px',
                            lineHeight: '25px',
                            borderRadius: '10px',
                            border: '2px solid #7c7c7c',
                            background: 'transparent',
                            zIndex: '1111',
                            fontFamily: "'Inter', sans-serif",
                            resize: 'none',
                        }}
                    ></textarea>
                    <div style={{ fontSize: '10px', color: '#bbbbbb' }}>
                        {details.length}/{MAX_CHARACTERS}
                    </div>
                
            

            
                    <div className="ticket-input-label">
                        <h5>Status</h5>
                        {status === '' && <span style={{ color: 'red', marginLeft: '5px' }}>*</span>}
                    </div>
                    <div className="ticket-status-radio">
                        <input
                        type="radio"
                        id="statusOpen"
                        value="Open"
                        checked={status === 'Open'}
                        onChange={() => setStatus('Open')}
                        defaultChecked
                        />
                        <label htmlFor="statusOpen">Open</label>

                        <input
                        type="radio"
                        id="statusSolved"
                        value="Solved"
                        checked={status === 'Solved'}
                        onChange={() => setStatus('Solved')}
                        />
                        <label htmlFor="statusSolved">Solved</label>
                        
                    </div>
            
                    
            <div style={{display: 'flex'}}>
                <div className="error-message" style={{ color: 'red', margin: '10px 0', fontSize: '10px' }}>
                            {errMsg}
                    </div>
                    <button className='a-ticket-submit' type="submit" onClick={handleSubmitUpdate}>Update</button> <br></br>

            </div>
                    
            
          </div>
        </Modal>
      )}

            

            {isModalEditSuccessOpen && (
                <Modal onClose={handleCloseModalEditSuccess}>
                    <div className="a-modal-container">
                        <h1 style={{fontSize:'20px',textAlign:'center'}}>Successfully Updated!</h1>
                        
                    </div>
                </Modal>
            )}

            {isModalAddSuccessOpen && (
                <Modal onClose={handleCloseModalAddSuccess}>
                    <div className="a-modal-container">
                        <h1 style={{fontSize:'20px',textAlign:'center'}}>Successfully Added!</h1>
                        
                    </div>
                </Modal>
            )}

            {isModalDeleteSuccessOpen && (
                <Modal onClose={handleCloseModalDeleteSuccess}>
                    <div className="a-modal-container">
                        <h1 style={{fontSize:'20px',textAlign:'center'}}>Successfully Deleted!</h1>
                        
                    </div>
                </Modal>
            )}

            {isModalDeleteConfirmOpen && (
                <Modal onClose={handleCloseModalDeleteConfirm}>
                    <div className="a-modal-container">
                        <h1 style={{fontSize:'20px',textAlign:'center'}}>Are you sure you want to delete this?</h1>
                        <div className="a-modal-buttons">
                            <button className="git-btn" style={{backgroundColor:'rgb(182, 78, 78)'}} onClick={handleCloseModalDeleteConfirm}>Cancel</button>
                            <button className="git-btn" onClick={() => { handleDelete(modalDeleteTicket); setIsModalDeleteSuccessOpen(true); handleCloseModalDeleteConfirm(); setModalDeleteTicket(null);}}>Confirm</button>
                        </div>
                    </div>
                </Modal>
            )}        
        </main>
    );

}

export default TicketDashboard; 