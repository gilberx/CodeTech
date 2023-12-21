
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

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const NAME_REGEX = /^[a-zA-Z][a-zA-Z-_]{1,23}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


function Learner() {
    
    const { user, setUser } = useContext(UserContext);
    useEffect(() => {
        console.log("logged in user: ", user);
    }, [user]);

    const [isAddOpen, setIsAddOpen] = useState(false);
    const [isUpdateOpen, setIsUpdateOpen] = useState(false);
    const [learners, setLearners] = useState([]);
    
    const [submitClicked, setSubmitClicked] = useState(false);
    
    const [role, setRole] = useState('learner');
    const [isDelete, setIsDelete] = useState(false);

    const [email, setEmail] = useState('');
    const [emailExists, setEmailExists] = useState(false);
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [username, setUsername] = useState('');
    // const [validUsername, setValidUsername] = useState(true);
    const [usernameExists, setUsernameExists] = useState(false);
    const [usernameFocus, setUsernameFocus] = useState(false);

    const [firstname, setFirstname] = useState('');
    const [validFirstname, setValidFirstname] = useState(false);
    const [firstnameFocus, setFirstnameFocus] = useState(false);

    const [lastname, setLastname] = useState('');
    const [validLastname, setValidLastname] = useState(false);
    const [lastnameFocus, setLastnameFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState(false);
    const [emptyInput, setEmptyInput] = useState(false);

    const [updateUserId, setUpdateUserId] = useState(null);

    const [isModalAddSuccessOpen, setIsModalAddSuccessOpen] = useState(false);
    const [isModalEditSuccessOpen, setIsModalEditSuccessOpen] = useState(false);
    const [isModalDeleteSuccessOpen, setIsModalDeleteSuccessOpen] = useState(false);
    const [isModalDeleteConfirmOpen, setIsModalDeleteConfirmOpen] = useState(false);
    const [modalDeleteUser, setModalDeleteUser] = useState(null);

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

    const handleLogout = () => {
        
        setUser(null);
    
        localStorage.removeItem('user');
        window.location.href = "/login";
      };
    
    const resetForm = () => {
        setEmail('');
        setUsername('');
        setFirstname('');
        setLastname('');
        setPwd('');
        setMatchPwd('');
        setErrMsg('');
        setEmptyInput(false);
        setSubmitClicked(false);
        setEmailExists(false);
        setUsernameExists(false);
        setValidEmail(false);
        setValidPwd(false);
        setValidMatch(false);
        setValidFirstname(false);
        setValidLastname(false);
        setSubmitClicked(false);
      };

    
    const handleCloseAddModal = () => {
        setIsAddOpen(false);
        resetForm();
    };

    const handleCloseUpdateModal = () => {
        setIsUpdateOpen(false);
        setUpdateUserId(null);
        resetForm();
      };
    
      const handleEdit = (learner) => {
        setUpdateUserId(learner.userid);
        setIsUpdateOpen(true);

        setEmail(learner.email);
        setUsername(learner.username);
        setFirstname(learner.firstname);
        setLastname(learner.lastname);
        setErrMsg('');
        setEmptyInput(false);
        setSubmitClicked(false);
        setEmailExists(false);
        setUsernameExists(false);
        setValidEmail(true);
        setValidPwd(false);
        setValidMatch(false);
        setValidFirstname(true);
        setValidLastname(true);
      };
    useEffect(() => {
        const result = EMAIL_REGEX.test(email);
        setValidEmail(result);
        setEmailExists(false);
        if (email && EMAIL_REGEX.test(email)) {
            checkEmailExists();
        }

        
    }, [email]);

    useEffect(() => {
        setUsernameExists(false);
        if (username) {
          checkUsernameExists();
        }
    }, [username]);

    useEffect(() => {
        const result = PWD_REGEX.test(pwd);
        setValidPwd(result);
        const match = pwd === matchPwd;
        setValidMatch(match);
    }, [pwd, matchPwd])

    useEffect(() => {
        const result1 = NAME_REGEX.test(firstname);
        const result2 = NAME_REGEX.test(lastname);
        setValidFirstname(result1);
        setValidLastname(result2);
    }, [lastname, firstname])

    const checkUsernameExists = async () => {
        try {
            const response = await fetch(`http://localhost:8080/user/checkUsername/${username}`);
            
            const data = await response.json();
            
            if (data.exists && data.userid !== updateUserId) {
                console.log("data exists:", data.exists);
                setUsernameExists(data.exists);
            }
    
        } catch (error) {
            console.error('Error checking username existence:', error);
        }
    };

    const checkEmailExists = async () => {
        try {
          const response = await fetch(`http://localhost:8080/user/checkEmail/${email}`);
          const data = await response.json();
            
            console.log("data email user id: ", data.userid)
            console.log("update email user id: ", updateUserId)
            if(data.exists && data.userid !== updateUserId){
                console.log("email exist: ", data.exists)
                setEmailExists(data.exists);
            }
          
        } catch (error) {
          console.error('Error checking email existence:', error);
        }
    };

    const handleSubmitUpdate = async (e) => {
        e.preventDefault();
        setSubmitClicked(true);
        if(submitClicked && (!firstname || !lastname || !matchPwd || !email || !username|| !pwd)){
            setEmptyInput(true);
            setErrMsg("All inputs are required")
            return;
        }
        const v1 = PWD_REGEX.test(pwd);
        if(!v1){
            setErrMsg("Invalid password");
            console.log(errMsg)
            return;
        }
        const v2 = EMAIL_REGEX.test(email);
        if(!v2){
            setErrMsg("Invalid email input")
            console.log(errMsg)
            return;
        }
        const v3 = NAME_REGEX.test(firstname);
        if(!v3){
            setErrMsg("Must use letters only")
            console.log(errMsg)
            return;
        }
        const v4 = NAME_REGEX.test(lastname);
        if(!v4){
            setErrMsg("Must use letters only")
            console.log(errMsg)
            return;
        }

        if(!validMatch){
            setErrMsg("Must match the first password input field.")
            console.log(errMsg)
            return;
        }

        if (emailExists) {
            setErrMsg("Email address already exists!");
            setSubmitClicked(false);
            console.log("errMsg2: ",errMsg)
            return;
        }

        console.log("username exists: ", usernameExists)
        if (usernameExists) {
            setErrMsg("Username already exists!");
            setSubmitClicked(false);
            console.log("errMsg2: ", errMsg)
            return;
        }
    
        const user = {
          username,
          email,
          password: pwd,
          firstname,
          lastname,
          role,
          isDelete,
        };
        console.log("email: ", email);
    
        try {
          const response = await fetch(`http://localhost:8080/user/updateUser?userid=${updateUserId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user),
          });
    
          if (response.ok) {
            console.log('User updated successfully:', user);
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
        fetch("http://localhost:8080/user/getAllUsers")
          .then((res) => res.json())
          .then((result) => {
            const activeLearners = result.filter(
              (user) => !user.isDelete && user.role === 'learner'
            );
      
            setLearners(activeLearners);
            const deletedUsers = result.filter(
              (user) =>
                user.isDelete &&
                (user.username ||
                  user.email ||
                  user.password ||
                  user.firstname ||
                  user.lastname ||
                  user.role)
            );
      
            if (deletedUsers.length > 0) {
              for (let i = 0; i < deletedUsers.length; i++) {
                const userIdToDelete = deletedUsers[i].userid;
                handleDelete(userIdToDelete);
              }
              console.log('Deleted users with values in other columns:', deletedUsers);
            }
          })
          .catch((error) => {
            console.error('Error fetching users:', error);
          });
      }, [isAddOpen, isUpdateOpen, isModalDeleteSuccessOpen, isModalAddSuccessOpen, isModalEditSuccessOpen]);

      const handleDelete = (userid) => {
            fetch(`http://localhost:8080/user/removeUser?userid=${userid}`, {
                method: 'PUT',
            })
                .then((res) => res.json())
                .then((result) => {
                    console.log('User removed successfully:', result);
                })
                .catch((error) => {
                    console.error('Error removing user:', error);
                });
    };
    const handleConfirmDelete = (userid) => {
        setIsModalDeleteConfirmOpen(true);
        setModalDeleteUser(userid);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitClicked(true);
        
        if(submitClicked && (!firstname || !lastname || !matchPwd || !email || !username)){
            setEmptyInput(true);
            setErrMsg("All inputs are required")
            return;
        }
        
        const v1 = PWD_REGEX.test(pwd);
        if(!v1){
            setErrMsg("Invalid password");
            console.log(errMsg)
            return;
        }
        if (emailExists) {
            setErrMsg("Email address already exists!");
            setSubmitClicked(false);
            console.log("errMsg2: ",errMsg)
            return;
        }
        console.log("username exists? ", usernameExists)
        if (usernameExists) {
            setErrMsg("Username already exists!");
            setSubmitClicked(false);
            console.log("errMsg2: ", errMsg)
            return;
        }
        const v2 = EMAIL_REGEX.test(email);
        if(!v2){
            setErrMsg("Invalid email input")
            console.log(errMsg)
            return;
        }
        const v3 = NAME_REGEX.test(firstname);
        if(!v3){
            setErrMsg("Must use letters only")
            console.log(errMsg)
            return;
        }
        const v4 = NAME_REGEX.test(lastname);
        if(!v4){
            setErrMsg("Must use letters only")
            console.log(errMsg)
            return;
        }
        if(!validMatch){
            setErrMsg("Must match the first password input field.")
            console.log(errMsg)
            return;
        }
        const user = {username, email, password: pwd, firstname, lastname, role, isDelete}
        console.log("user: ", user);
        try {
            const response = await fetch("http://localhost:8080/user/insertUser", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(user),
            });

    
            if (response.ok) {
                
                const userData = await response.json();
                console.log("New User Registered: ", userData);
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
                <li className="a-active">
                    <Link to="/learner" className='a-link-text'>
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
                    <h2>Learners</h2>
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
                        {learners.length === 0 ? (
                            <div className="a-no-educators">
                                <p>There are currently no active learners...</p>
                            </div>
                        ) : (
                            <div style={{ overflowX: 'auto' }}>
                            <table className="a-table">
                                <thead>
                                <tr>
                                    <th>User ID</th>
                                    <th>Username</th>
                                    <th>Email</th>
                                    <th>Password</th>
                                    <th>Firstname</th>
                                    <th>Lastname</th>
                                    <th>Role</th>
                                    <th>Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                {learners.map((learner) => (
                                    <tr key={learner.userid}>
                                    <td>{learner.userid}</td>
                                    <td>{learner.username}</td>
                                    <td>{learner.email}</td>
                                    <td>{learner.password}</td>
                                    <td>{learner.firstname}</td>
                                    <td>{learner.lastname}</td>
                                    <td>{learner.role}</td>
                                    <td>
                                        <button className="a-btn-educator "
                                        onClick={() => handleEdit(learner)}
                                        >
                                        Edit
                                        </button>
                                        <button className="a-btn-educator a-red-bg"
                                        onClick={() => handleConfirmDelete(learner.userid)}
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
                            
                        {/* </Paper> */}
                    {/* </div> */}
                </div>
        </div>
        {isAddOpen && (
        <Modal onClose={handleCloseAddModal}>
          <div>
            
            <p style={{ fontSize: '25px', fontWeight: 'bold', backgroundColor: 'white', marginBottom: '0px' }}>Add New Learner</p>
            <p style={{ fontSize: '15px', backgroundColor: 'white', margin: '4px 0' }}>Email Address</p>
            <input
            className={`a-input ${emailFocus && email && !validEmail ? 'invalid' : ''}`}
            type="text"
            id="email"
            autoComplete="off"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={validEmail ? "false" : "true"}
            aria-describedby="uidnote"
            onFocus={()=> setEmailFocus(true)}
            onBlur={()=> setEmailFocus(false)}
            />
            
            {submitClicked && email && !validEmail ? (
                <p id="uidnote" className="instructions instructions-shake">
                    <FontAwesomeIcon icon={faInfoCircle} />&nbsp;
                    Invalid email
                </p>
            ) : null}
            {submitClicked && email && emailExists ? (
                <p id="uidnote" className="instructions instructions-shake">
                    <FontAwesomeIcon icon={faInfoCircle} />&nbsp;
                    Email already taken
                </p>
            ) : null}

            <p style={{ fontSize: '15px', backgroundColor: 'white', margin: '4px 0' }}>Username</p>
            <input
            className={`a-input ${usernameFocus && username && usernameExists ? 'invalid' : ''}`}
            type="text"
            id="username"
            autoComplete="off"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            aria-invalid={!usernameExists ? "false" : "true"}
            aria-describedby="uidnote"
            onFocus={()=> setUsernameFocus(true)}
            onBlur={()=> setUsernameFocus(false)}
            />
            
            {submitClicked && username && usernameExists ? (
                <p id="uidnote" className="instructions instructions-shake">
                    <FontAwesomeIcon icon={faInfoCircle} />&nbsp;
                    Username Taken
                </p>
            ) : null}

            <div className="a-names-input">
                <div>
                    <p style={{ fontSize: '15px', backgroundColor: 'white', margin: '4px 0' }}>Firstname</p>
                    <input
                        className={`a-input ${firstnameFocus && firstname && validFirstname ? '' : 'invalid'}`}
                        type="text"
                        id="firstname"
                        autoComplete="off"
                        required
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                        aria-invalid={!validFirstname}
                        onFocus={() => setFirstnameFocus(true)}
                        onBlur={() => setFirstnameFocus(false)}
                    />
                    {submitClicked && !firstname && !validFirstname  ? (
                        <p id="uidnote" className="instructions instructions-shake">
                            <FontAwesomeIcon icon={faInfoCircle} />&nbsp;
                            Firstname is required
                        </p>
                    ) : null}
                </div>

                <div>
                    <p style={{ fontSize: '15px', backgroundColor: 'white', margin: '4px 0' }}>Lastname</p>
                    <input
                        className={`a-input ${lastnameFocus && lastname && validLastname ? '' : 'invalid'}`}
                        type="text"
                        id="lastname"
                        autoComplete="off"
                        required
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                        aria-invalid={!validLastname}
                        onFocus={() => setLastnameFocus(true)}
                        onBlur={() => setLastnameFocus(false)}
                    />
                    {submitClicked && !lastname ? (
                        <p id="uidnote" className="instructions instructions-shake">
                            <FontAwesomeIcon icon={faInfoCircle} />&nbsp;
                            Lastname is required
                        </p>
                    ) : null}
                </div>
            </div>

            <p style={{ fontSize: '15px', backgroundColor: 'white', margin: '4px 0' }}>Password</p>
            <input
            className={`a-input ${pwdFocus && pwd && !validPwd ? 'invalid' : ''}`}
            type="password"
            id="pwd"
            autoComplete="off"
            required
            onChange={(e) => setPwd(e.target.value)}
            aria-invalid={validPwd ? "false" : "true"}
            aria-describedby="uidnote"
            onFocus={()=> setPwdFocus(true)}
            onBlur={()=> setPwdFocus(false)}
            />
            
            {submitClicked && pwd && !validPwd ? (
                <p id="uidnote" className="instructions instructions-shake">
                    <FontAwesomeIcon icon={faInfoCircle} />&nbsp;
                    Must be at least 8 characters and include lowercase, uppercase, number, and a special character.
                </p>
            ) : null}

            <p style={{ fontSize: '15px', backgroundColor: 'white', margin: '4px 0' }}>Confirm Password</p>
            <input
            className={`a-input ${matchFocus && matchPwd && !validMatch ? 'invalid' : ''}`}
            type="password"
            id="confirmpwd"
            autoComplete="off"
            required
            onChange={(e) => setMatchPwd(e.target.value)}
            aria-invalid={validMatch ? "false" : "true"}
            aria-describedby="uidnote"
            onFocus={()=> setMatchFocus(true)}
            onBlur={()=> setMatchFocus(false)}
            />
            
            {submitClicked && matchPwd && !validMatch ? (
                <p id="uidnote" className="instructions instructions-shake">
                    <FontAwesomeIcon icon={faInfoCircle} />&nbsp;
                    Must match the first password input field.
                </p>
            ) : null}
            
            <button className='submit' type="submit" onClick={handleSubmit}>Add</button> <br></br>
          </div>
        </Modal>
      )}

        {isUpdateOpen && (
        <Modal onClose={handleCloseUpdateModal}>
          <div>
            <p style={{ fontSize: '25px', fontWeight: 'bold', backgroundColor: 'white', marginBottom: '0px' }}>
              Update Learner
            </p>
            <div style={{display: 'flex'}}>
                <p style={{ fontSize: '15px', backgroundColor: 'white', margin: '4px 0' }}>Email Address</p>
                {email === '' && <span style={{ color: 'red', margin:'5px' }}>*</span>}
            </div>
            <input
            className={`a-input ${emailFocus && email && !validEmail || emailExists ? 'invalid' : ''}`}
            type="text"
            id="email"
            autoComplete="off"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={validEmail ? "false" : "true"}
            aria-describedby="uidnote"
            onFocus={()=> setEmailFocus(true)}
            onBlur={()=> setEmailFocus(false)}
            />
            
            {submitClicked && email && !validEmail ? (
                <p id="uidnote" className="instructions instructions-shake">
                    <FontAwesomeIcon icon={faInfoCircle} />&nbsp;
                    Invalid email
                </p>
            ) : null}

            {email && emailExists ? (
                <p id="uidnote" className="instructions instructions-shake">
                    <FontAwesomeIcon icon={faInfoCircle} />&nbsp;
                    Email already taken
                </p>
            ) : null}

            <div style={{display: 'flex'}}>
                <p style={{ fontSize: '15px', backgroundColor: 'white', margin: '4px 0' }}>Username</p>
                {username === '' && <span style={{ color: 'red', margin:'5px' }}>*</span>}
            </div>
            <input
            className={`a-input ${usernameFocus && username && usernameExists ? 'invalid' : ''}`}
            type="text"
            id="username"
            autoComplete="off"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            aria-invalid={!usernameExists ? "false" : "true"}
            aria-describedby="uidnote"
            onFocus={()=> setUsernameFocus(true)}
            onBlur={()=> setUsernameFocus(false)}
            />
            
            {username && usernameExists ? (
                <p id="uidnote" className="instructions instructions-shake">
                    <FontAwesomeIcon icon={faInfoCircle} />&nbsp;
                    Username already taken
                </p>
            ) : null}

            {submitClicked && !username  ? (
                <p id="uidnote" className="instructions instructions-shake">
                    <FontAwesomeIcon icon={faInfoCircle} />&nbsp;
                    Username is required
                </p>
            ) : null}

            <div className="a-names-input">
                <div>
                    
                    <div style={{display: 'flex'}}>
                        <p style={{ fontSize: '15px', backgroundColor: 'white', margin: '4px 0' }}>Firstname</p>
                        {firstname === '' && <span style={{ color: 'red', margin:'5px' }}>*</span>}
                    </div>
                    <input
                        className={`a-input ${firstnameFocus && firstname && validFirstname ? '' : 'invalid'}`}
                        type="text"
                        id="firstname"
                        autoComplete="off"
                        required
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                        aria-invalid={!validFirstname}
                        onFocus={() => setFirstnameFocus(true)}
                        onBlur={() => setFirstnameFocus(false)}
                    />
                    {submitClicked && !firstname && !validFirstname  ? (
                        <p id="uidnote" className="instructions instructions-shake">
                            <FontAwesomeIcon icon={faInfoCircle} />&nbsp;
                            Firstname is required
                        </p>
                    ) : null}
                </div>

                <div>
                    <div style={{display: 'flex'}}>
                        <p style={{ fontSize: '15px', backgroundColor: 'white', margin: '4px 0' }}>Lastname</p>
                        {lastname === '' && <span style={{ color: 'red', margin:'5px' }}>*</span>}
                    </div>
                    <input
                        className={`a-input ${lastnameFocus && lastname && validLastname ? '' : 'invalid'}`}
                        type="text"
                        id="lastname"
                        autoComplete="off"
                        required
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                        aria-invalid={!validLastname}
                        onFocus={() => setLastnameFocus(true)}
                        onBlur={() => setLastnameFocus(false)}
                    />
                    {submitClicked && !lastname ? (
                        <p id="uidnote" className="instructions instructions-shake">
                            <FontAwesomeIcon icon={faInfoCircle} />&nbsp;
                            Lastname is required
                        </p>
                    ) : null}
                </div>
            </div>

            <div style={{display: 'flex'}}>
                <p style={{ fontSize: '15px', backgroundColor: 'white', margin: '4px 0' }}>Password</p>
                {pwd === '' && <span style={{ color: 'red', margin:'5px' }}>*</span>}
            </div>
            <input
            className={`a-input ${pwdFocus && pwd && !validPwd ? 'invalid' : ''}`}
            type="password"
            id="pwd"
            autoComplete="off"
            required
            onChange={(e) => setPwd(e.target.value)}
            aria-invalid={validPwd ? "false" : "true"}
            aria-describedby="uidnote"
            onFocus={()=> setPwdFocus(true)}
            onBlur={()=> setPwdFocus(false)}
            />
            
            {submitClicked && pwd && !validPwd ? (
                <p id="uidnote" className="instructions instructions-shake">
                    <FontAwesomeIcon icon={faInfoCircle} />&nbsp;
                    Must be at least 8 characters and include lowercase, uppercase, number, and a special character.
                </p>
            ) : null}

            <div style={{display: 'flex'}}>
                <p style={{ fontSize: '15px', backgroundColor: 'white', margin: '4px 0' }}>Confirm Password</p>
                {matchPwd === '' && <span style={{ color: 'red', margin:'5px' }}>*</span>}
            </div>
            <input
            className={`a-input ${matchFocus && matchPwd && !validMatch ? 'invalid' : ''}`}
            type="password"
            id="confirmpwd"
            autoComplete="off"
            required
            onChange={(e) => setMatchPwd(e.target.value)}
            aria-invalid={validMatch ? "false" : "true"}
            aria-describedby="uidnote"
            onFocus={()=> setMatchFocus(true)}
            onBlur={()=> setMatchFocus(false)}
            />
            
            {submitClicked && matchPwd && !validMatch ? (
                <p id="uidnote" className="instructions instructions-shake">
                    <FontAwesomeIcon icon={faInfoCircle} />&nbsp;
                    Must match the first password input field.
                </p>
            ) : null}

            <div className="error-message" style={{ color: 'red', margin: '10px 0', fontSize: '10px', textAlign: 'right' }}>
                {errMsg}
            </div>
            <button className="submit" type="submit" onClick={handleSubmitUpdate}>
              Update
            </button>
            

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
                            <button className="git-btn" onClick={() => { handleDelete(modalDeleteUser); setIsModalDeleteSuccessOpen(true); handleCloseModalDeleteConfirm(); setModalDeleteUser(null);}}>Confirm</button>
                        </div>
                    </div>
                </Modal>
            )}        
        </main>
    );

}

export default Learner; 