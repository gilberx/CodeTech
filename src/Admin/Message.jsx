
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect, useContext,  } from 'react';
import "./Admin.css";
import UserContext from "../Register/UserContext";
import Modal from "../Modal";
import { faTachometerAlt, faChalkboardTeacher, faUserGraduate, faBook, faExclamationTriangle, faSignOut, faInfoCircle } from '@fortawesome/free-solid-svg-icons';


const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_CHARACTERS = 250;


function Message() {
    
    const { user, setUser } = useContext(UserContext);
    useEffect(() => {
        console.log("logged in user: ", user);
    }, [user]);

    const [isAddOpen, setIsAddOpen] = useState(false);
    const [isUpdateOpen, setIsUpdateOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    
    const [submitClicked, setSubmitClicked] = useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [message, setMessage] = useState('');

    const [errMsg, setErrMsg] = useState(false);
    const [emptyInput, setEmptyInput] = useState(false);

    const [updateMessage, setUpdateMessage] = useState(null);

    const [isModalAddSuccessOpen, setIsModalAddSuccessOpen] = useState(false);
    const [isModalEditSuccessOpen, setIsModalEditSuccessOpen] = useState(false);
    const [isModalDeleteSuccessOpen, setIsModalDeleteSuccessOpen] = useState(false);
    const [isModalDeleteConfirmOpen, setIsModalDeleteConfirmOpen] = useState(false);
    const [modalDeleteMessage, setModalDeleteMessage] = useState(null);

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

    const handleMessageChange = (e) => {
        const inputText = e.target.value;
        if (inputText.length <= MAX_CHARACTERS) {
            setMessage(inputText);
        }
    };

    const handleLogout = () => {
        
        setUser(null);
    
        localStorage.removeItem('user');
        window.location.href = "/login";
      };
    const resetForm = () => {
        setName('');
        setMessage('');
        setEmail('');
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
        setUpdateMessage(null);
        resetForm();
      };
    
      const handleEdit = (message) => {
        setUpdateMessage(message);
        setIsUpdateOpen(true);

        setEmail(message.email);
        setName(message.name);
        setMessage(message.message);
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
        if(submitClicked && (!name || !message || !email )){
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
        
        const messageDetails = {
          name,
          email,
          message
        };
    
        try {
          const response = await fetch(`http://localhost:8080/contactus/updateContactUs?contactusid=${updateMessage.contactusid}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(messageDetails),
          });
    
          if (response.ok) {
            console.log('message updated successfully:', messageDetails);
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
        fetch("http://localhost:8080/contactus/getAllContactUs")
          .then((res) => res.json())
          .then((result) => {
            const activeMessages = result.filter(
              (message) => !message.isDelete
            );
      
            setMessages(activeMessages);
          })
          .catch((error) => {
            console.error('Error fetching Messages:', error);
          });


      }, [isAddOpen, isUpdateOpen, isModalDeleteSuccessOpen, isModalAddSuccessOpen, isModalEditSuccessOpen]);

      const handleDelete = (contactusid) => {
            fetch(`http://localhost:8080/contactus/removeContactUs?contactusid=${contactusid}`, {
                method: 'PUT',
            })
                .then((res) => res.json())
                .then((result) => {
                    console.log('message removed successfully:', result);
                })
                .catch((error) => {
                    console.error('Error removing message:', error);
                });
    };
    const handleConfirmDelete = (messageid) => {
        setIsModalDeleteConfirmOpen(true);
        setModalDeleteMessage(messageid);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitClicked(true);
        
        if(submitClicked && (!name || !message || !email )){
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
        
        const messageDetails = {
            name,
            email,
            message
          };
        try {
            const response = await fetch("http://localhost:8080/contactus/insertContactUs", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(messageDetails),
            });

    
            if (response.ok) {
                
                const messageData = await response.json();
                console.log("New message Registered: ", messageData);
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
    user.password === 'CodeTech!23' &&
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
                <li className="a-active">
                <Link to="/messagedashboard" className='a-link-text'>
                        <FontAwesomeIcon icon={faBook} style={{fontSize:"1.2rem"}} />
                        <span>Messages</span>
                    </Link>
                </li>
                <li>
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
                    <h2>Messages</h2>
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
                        {messages.length === 0 ? (
                            <div className="a-no-educators">
                                <p>There are currently no active messages...</p>
                            </div>
                        ) : (
                            <div style={{ overflowX: 'auto' }}>
                            <table className="a-table">
                                <thead>
                                <tr>
                                    <th>Message ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Message</th>
                                    <th>Actions</th>

                                </tr>
                                </thead>
                                <tbody>
                                {messages.map((message) => (
                                    <tr key={message.contactusid}>
                                    <td>{message.contactusid}</td>
                                    <td>{message.name}</td>
                                    <td>{message.email}</td>
                                    <td>{message.message}</td>
                                    <td>
                                        <button className="a-btn-educator "
                                        onClick={() => handleEdit(message)}
                                        >
                                        Edit
                                        </button>
                                        <button className="a-btn-educator a-red-bg"
                                        onClick={() => handleConfirmDelete(message.contactusid)}
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
            
            <p style={{ fontSize: '25px', fontWeight: 'bold', backgroundColor: 'white', marginBottom: '20px' }}>Add New Message</p>
            <div className="ticket-input-label">
                <h5>Name</h5>
                { name === '' && <span style={{ color: 'red', marginLeft:'5px' }}>*</span>}
            </div>
            <input
                className={`a-input`}
                type="text"
                id="name"
                autoComplete="off"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                <h5>Message</h5>
                { message === '' && <span style={{ color: 'red', marginLeft:'5px' }}>*</span>}
            </div>
            <input
                className={`a-input`}
                type="text"
                id="name"
                autoComplete="off"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                aria-describedby="uidnote"
            />
            
            
                    
            <div style={{display: 'flex'}}>
                <div className="error-message" style={{ color: 'red', margin: '10px 0', fontSize: '10px' }}>
                            {errMsg}
                    </div><button className='a-message-submit' type="submit" onClick={handleSubmit}>Add</button> <br></br>

            </div>
                    
            
          </div>
        </Modal>
    )}

    {isUpdateOpen && (
        <Modal onClose={handleCloseAddModal}>
          <div className="a-ticket-modal">
            
            <p style={{ fontSize: '25px', fontWeight: 'bold', backgroundColor: 'white', marginBottom: '20px' }}>Add New Message</p>
            <div className="ticket-input-label">
                <h5>Name</h5>
                { name === '' && <span style={{ color: 'red', marginLeft:'5px' }}>*</span>}
            </div>
            <input
                className={`a-input`}
                type="text"
                id="name"
                autoComplete="off"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                <h5>Message</h5>
                { message === '' && <span style={{ color: 'red', marginLeft:'5px' }}>*</span>}
            </div>
            <input
                className={`a-input`}
                type="text"
                id="name"
                autoComplete="off"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                aria-describedby="uidnote"
            />
            
            
                    
            <div style={{display: 'flex'}}>
                <div className="error-message" style={{ color: 'red', margin: '10px 0', fontSize: '10px' }}>
                            {errMsg}
                    </div><button className='a-message-submit' type="submit" onClick={handleSubmitUpdate}>Update</button> <br></br>

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
                            <button className="git-btn" onClick={() => { handleDelete(modalDeleteMessage); setIsModalDeleteSuccessOpen(true); handleCloseModalDeleteConfirm(); setModalDeleteMessage(null);}}>Confirm</button>
                        </div>
                    </div>
                </Modal>
            )}        
        </main>
    );

}

export default Message; 