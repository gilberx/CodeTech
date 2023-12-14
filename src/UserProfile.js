import React, { useState, useEffect, useContext } from "react";
import { Link } from 'react-router-dom';
import "./UserProfile.css";
import Navbar from "./Navbar";
import "./Admin/Admin.css";
import UserContext from "./Register/UserContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const NAME_REGEX = /^[a-zA-Z][a-zA-Z-_]{1,23}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const UserProfile = ({ onUpdate, onDelete }) => {
  const {user, setUser} = useContext(UserContext);
  useEffect(() => {
    console.log("logged in user: ", user);
  }, [user]);

  const linkStyle = {
    textDecoration: 'none',
    color: '#ffffff',
  };

  

  const [submitClicked, setSubmitClicked] = useState(false);
    
    const [role, setRole] = useState(user ? user.role : '');
    const [isDelete, setIsDelete] = useState(user ? user.isDelete : '');

    const [email, setEmail] = useState(user ? user.email : '');
    const [emailExists, setEmailExists] = useState(false);
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [username, setUsername] = useState(user ? user.username : '');
    // const [validUsername, setValidUsername] = useState(true);
    const [usernameExists, setUsernameExists] = useState(false);
    const [usernameFocus, setUsernameFocus] = useState(false);

    const [firstname, setFirstname] = useState(user ? user.firstname : '');
    const [validFirstname, setValidFirstname] = useState(false);
    const [firstnameFocus, setFirstnameFocus] = useState(false);

    const [lastname, setLastname] = useState(user ? user.lastname : '');
    const [validLastname, setValidLastname] = useState(false);
    const [lastnameFocus, setLastnameFocus] = useState(false);

    const [pwd, setPwd] = useState(user ? user.password : '');

    const [errMsg, setErrMsg] = useState(false);
    const [emptyInput, setEmptyInput] = useState(false);

  
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
    const result1 = NAME_REGEX.test(firstname);
    const result2 = NAME_REGEX.test(lastname);
    setValidFirstname(result1);
    setValidLastname(result2);
}, [lastname, firstname])



const checkUsernameExists = async () => {
  try {
      const response = await fetch(`http://localhost:8080/user/checkUsername/${username}`);
      
      const data = await response.json();
      
      if (data.exists && data.userid !== user.userid) {
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
      console.log("update email user id: ", user.userid)
      if(data.exists && data.userid !== user.userid){
          console.log("email exist: ", data.exists)
          setEmailExists(data.exists);
      }
    
  } catch (error) {
    console.error('Error checking email existence:', error);
  }
};

const handleLogout = () => {
        
  setUser(null);

  localStorage.removeItem('user');
  window.location.href = "/login";
};

const handleDelete = () => {
  fetch(`http://localhost:8080/user/removeUser?userid=${user.userid}`, {
      method: 'PUT',
  })
      .then((res) => res.json())
      .then((result) => {
          console.log('User removed successfully:', result);
      handleLogout();
      })
      .catch((error) => {
          console.error('Error removing user:', error);
      });
};
const handleUpdate = async (e) => {
  
  e.preventDefault();
        setSubmitClicked(true);
        if(submitClicked && (!firstname || !lastname || !email || !username )){
            setEmptyInput(true);
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
    
        const userBody = {
          username,
          email,
          password: pwd,
          firstname,
          lastname,
          role,
          isDelete,
        };
        console.log("userid handleUpdate: ", user.userid);
    
        try {
          const response = await fetch(`http://localhost:8080/user/updateUser?userid=${user.userid}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userBody),
          });
    
          if (response.ok) {
            alert('User updated successfully:');
          } else {
            console.error('Update failed:', response.statusText);
          }
        } catch (error) {
          console.error('Error during update:', error.message);
        }
};

if (!user) {
  return (
      <main className='a-notadmin-main'>
      <div className='a-notadmin-container'>
          <form className='a-notadmin-form'>
              <h1 style={{fontSize:'35px',textAlign:'center'}}>You are not logged in!</h1>
              <div style={{marginTop:'10px', marginBottom:'20px', textAlign:'center', padding:"0 10px"}}>
                  <span className="small-text">Log in to access your personalized profile and unlock exclusive features!</span>
              </div>
              <Link to="/login" className='link-btn'>
                  <button className="btn">Go to login</button>
              </Link>
          </form>
      </div>
  </main>
  );
}

  return (
    <div className="user-profile-page">
      <Navbar/>
      <div className="profile-sidebar">
            <Link to="/" style={linkStyle}>
              <button>Profile</button>
            </Link>
            <Link to="/achievements" style={linkStyle}>
              <button>Achievements</button>
            </Link>
            <Link to="/progress" style={linkStyle}>
              <button>Progress</button>
            </Link>
            <Link to="/settings" style={linkStyle}>
              <button>Settings</button>
            </Link>
           
              <button onClick={handleLogout}>Logout</button>
            
          </div>
    <div className="user-profile">
      <h2>Personal Information</h2>
      <div className="picture-container">

        {/* <div style={{backgroundColor: "white"}}>Picture</div> */}
        <div>
          <p style={{ color: "white" }}>
            User ID: <strong>{user.userid}</strong>
          </p>
          <p style={{ color: "white" }}>
            Role: <strong>{user.role}</strong>
          </p>
        </div>
      </div>
      <div className="inputField">
      <p style={{ fontSize: '15px', margin: '4px 0', color: 'white' }}>Username</p>
            
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
          
      <p style={{ fontSize: '15px', margin: '4px 0', color: 'white' }}>Email</p>          
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
      
      <div className="a-names-input-userprofile">
                <div>
                <p style={{ fontSize: '15px', margin: '4px 0', color: 'white' }}>Firstname</p>          
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
                <p style={{ fontSize: '15px', margin: '4px 0', color: 'white' }}>Lastname</p>          
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
      </div>
      <div className="userButtons">
        <button style={{ backgroundColor: "red" }} onClick={handleDelete}>
          Delete
        </button>
        <button
          style={{ marginLeft: "200px" }}
          onClick={handleUpdate}
        >
          Update
        </button>
      </div>
    </div>
    </div>
  );
};

export default UserProfile;