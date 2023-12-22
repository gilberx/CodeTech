import './Register.css';
import { useState, useRef, useEffect, useContext,  } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardTeacher, faUser, faInfoCircle, faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import UserContext from './UserContext';
// import bcrypt from 'bcrypt';
import PropagateLoader from "react-spinners/PropagateLoader";

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const NAME_REGEX = /^[a-zA-Z][a-zA-Z-_]{1,23}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Register = () => {

    const userRef = useRef();
    const errRef = useRef();

    const { user, setUser } = useContext(UserContext);
    const [submitClicked, setSubmitClicked] = useState(false);
    
    const [role, setRole] = useState('learner');
    const [isDelete, setIsDelete] = useState(false);

    const [email, setEmail] = useState('');
    const [emailExists, setEmailExists] = useState(false);
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [username, setUsername] = useState('');
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
    const [showPassword, setShowPassword] = useState(false);
    const [showMatchPassword, setShowMatchPassword] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState(false);
    const [emptyInput, setEmptyInput] = useState(false);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      }, [])

    

    useEffect(() => {
        if(userRef.current){
            userRef.current.focus();
        }
        
    }, [])
    useEffect(() => {
        console.log("logged in user: ", user);
    }, [user]);

    useEffect(() => {
        console.log("logged in user: ", user);
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

        if (isAdmin) {
            handleDashboardRedirect();
            return;
        } else if (user){
            handleRedirect();
        }
    }, [user]);

    const handleDashboardRedirect = () => {
        console.log('Navigating to /dashboard...');
        window.location.href = '/dashboard';
    };

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
    

    useEffect(() => {
        const result = EMAIL_REGEX.test(email);
        setValidEmail(result);
        setEmailExists(false);
        if (email && EMAIL_REGEX.test(email)) {
            checkEmailExists();
        }

        
    }, [email,]);

    useEffect(() => {
        setUsernameExists(false);
        if (username) {
          checkUsernameExists();
        }
    }, [username]);

    useEffect(() => {
        setEmptyInput(false)
        setErrMsg('');
        
    }, [firstname, lastname, pwd, matchPwd, email, emailExists, usernameExists, username]);
    


    const handleToggle = (type) => {
        setRole(type);
    };

    const handleRedirect = () => {
        
        console.log('Navigating to /CodeTech...');
        
        window.location.href = '/'; 
    };

    const checkEmailExists = async () => {
        try {
          const response = await fetch(`http://localhost:8080/user/checkEmail/${email}`);
          const data = await response.json();
    
          setEmailExists(data.exists);
        } catch (error) {
          console.error('Error checking email existence:', error);
        }
    };


    const checkUsernameExists = async () => {
        try {
            const response = await fetch(`http://localhost:8080/user/checkUsername/${username}`);
            const data = await response.json();
    
            console.log("Username exists:", data.exists);
            setUsernameExists(data.exists);
        } catch (error) {
            console.error('Error checking username existence:', error);
        }
    };

      

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitClicked(true);
        
        if(submitClicked && (!firstname || !lastname || !matchPwd || !email || !username)){
            setEmptyInput(true);
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

        // const hashedPassword = await bcrypt.hash(pwd, 10);
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
                setUser(userData);
                localStorage.setItem('user', JSON.stringify(userData));
            
                handleRedirect();
            } else {
                console.error('Registration failed:', response.statusText);
                
            }
        } catch (error) {
            console.error('Error during registration:', error.message);
        }



    }

    

    return (
        <main className='regis-main-bg'>
            {loading ? (
            <div id="loader">
                <PropagateLoader
                loading={loading}
                size={30}
                color={'#36d7b7'}
              />
            </div>
              ):(
            <div className="regis-main">
                <div className="regis-img">
                    <div className="logo-title">
                        <img src="/logo.png" alt="logo"/>
                        <span>CodeTech</span>
                    </div>
                    <h1>We're so glad to <br/>have you on board!</h1>

                    <span className="span">Code Learning just got better!</span>
                    <div className="left">
                        <img src="/signup-left.png" alt="left img" />
                    </div>
                </div>
                <div className="regis-content">
                    <form>{/* on submit */}
                        
                        <h1 style={{fontSize:'35px'}}>Enter your account details</h1>
                        <div style={{marginTop:'20px', marginBottom:'20px'}}>
                            <span className="small-text">Account Information</span>
                        </div>
                        
                        <div className="input-div">
                            <div>
                                <input 
                                    className={`input ${emailFocus && email && !validEmail ? 'invalid' : ''}`}
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
                                ></input>
                                <div className="labelline">Email Address</div>
                            </div>
                            
                        </div>
                            {submitClicked && email && !validEmail ? (
                                <p id="uidnote" className="instructions instructions-shake">
                                    <FontAwesomeIcon icon={faInfoCircle} />&nbsp;
                                    Invalid email
                                </p>
                            ) : null}
                            
                            {email && emailExists ? (   
                                <p id="uidnote" className="instructions instructions-shake">
                                    <FontAwesomeIcon icon={faInfoCircle} />&nbsp;
                                    Email address already exists!
                                </p>
                            ) : null}

                        <div className="input-div">
                            <div>
                                <input 
                                    className={`input ${usernameFocus && username && usernameExists ? 'invalid' : ''}`}
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
                                ></input>
                                <div className="labelline">Username</div>
                            </div>
                            
                        </div>
                            {username && usernameExists ? (
                                <p id="uidnote" className="instructions instructions-shake">
                                    <FontAwesomeIcon icon={faInfoCircle} />&nbsp;
                                    Username already exists!
                                </p>
                            ) : null}

                            


                        <div className="input-side-by-side">
                            <div>
                                <div className="input-div">
                                    <div>
                                        <input 
                                            className={`input ${firstnameFocus && firstname && !validFirstname ? 'invalid' : ''}`}
                                            type="text"
                                            id="firstname"
                                            autoComplete="off"
                                            required
                                            value={firstname}
                                            onChange={(e) => setFirstname(e.target.value)}
                                            aria-invalid={validFirstname ? 'false' : 'true'}
                                            aria-describedby="uidnote"
                                            onFocus={() => setFirstnameFocus(true)}
                                            onBlur={() => setFirstnameFocus(false)}
                                        ></input>
                                        <div className="labelline">First Name</div>
                                    </div>
                                    
                                </div>
                                    {submitClicked && firstname && !validFirstname ? (
                                        <p id="uidnote" className="instructions-name instructions-shake">
                                            <FontAwesomeIcon icon={faInfoCircle} />&nbsp;
                                            Must use letters only
                                        </p>
                                    ) : null}
                            </div>
                            <div>
                               <div className="input-div">
                                    <div>
                                        
                                        <input 
                                            className={`input ${lastnameFocus && lastname && !validLastname ? 'invalid' : ''}`}
                                            type="text"
                                            id="lastname"
                                            autoComplete="off"
                                            required
                                            onChange={(e) => setLastname(e.target.value)}
                                            aria-invalid={validLastname ? "false" : "true"}
                                            aria-describedby="uidnote"
                                            onFocus={()=> setLastnameFocus(true)}
                                            onBlur={()=> setLastnameFocus(false)}
                                        ></input>
                                        <div className="labelline">Last Name</div>
                                    </div>
                                    
                                </div> 
                                    {submitClicked && lastname && !validLastname ? (
                                        <p id="uidnote" className="instructions-name instructions-shake">
                                            <FontAwesomeIcon icon={faInfoCircle} />&nbsp;
                                            Must use letters only
                                        </p>
                                    ) : null}
                            </div>
                            
                        </div>

                        <div className="input-div">
                            <div>
                                
                                <input 
                                    className={`input ${pwdFocus && pwd && !validPwd ? 'invalid' : ''}`}
                                    type={showPassword ? 'text' : 'password'}
                                    id="pwd"
                                    autoComplete="off"
                                    required
                                    onChange={(e) => setPwd(e.target.value)}
                                    aria-invalid={validPwd ? "false" : "true"}
                                    aria-describedby="uidnote"
                                    onFocus={()=> setPwdFocus(true)}
                                    onBlur={()=> setPwdFocus(false)}
                                />
                                <div className="labelline">Password</div>
                                <button
                                    type="button"
                                    className="show-hide-btn"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    <FontAwesomeIcon
                                    icon={showPassword ? faEye : faEyeSlash}
                                    />
                                </button>
                            </div>
                            
                        </div>
                            {submitClicked && pwd && !validPwd ? (
                                <p id="uidnote" className="instructions instructions-shake">
                                    <FontAwesomeIcon icon={faInfoCircle} />&nbsp;
                                    Must be at least 8 characters and include lowercase, uppercase, number, and a special character.
                                </p>
                            ) : null}
                        <div className="input-div">
                            <div>
                                
                                <input 
                                    className={`input ${matchFocus && matchPwd && !validMatch ? 'invalid' : ''}`}
                                    type={showMatchPassword ? 'text' : 'password'}
                                    id="confirmpwd"
                                    autoComplete="off"
                                    required
                                    onChange={(e) => setMatchPwd(e.target.value)}
                                    aria-invalid={validMatch ? "false" : "true"}
                                    aria-describedby="uidnote"
                                    onFocus={()=> setMatchFocus(true)}
                                    onBlur={()=> setMatchFocus(false)}
                                />
                                <div className="labelline">Confirm Password</div>
                                <button
                                    type="button"
                                    className="show-hide-btn"
                                    onClick={() => setShowMatchPassword(!showMatchPassword)}
                                >
                                    <FontAwesomeIcon
                                    icon={showMatchPassword ? faEye : faEyeSlash}
                                    />
                                </button>
                            </div>
                            
                        </div>
                            {submitClicked && matchPwd && !validMatch ? (
                                <p id="uidnote" className="instructions instructions-shake">
                                    <FontAwesomeIcon icon={faInfoCircle} />&nbsp;
                                    Must match the first password input field.
                                </p>
                            ) : null}
                        <div style={{marginTop:'20px', marginBottom:'20px'}}>
                            <span className="small-text">Account Type</span>
                        </div>

                        <div className="input-side-by-side" style={{ marginTop: '20px' }}>
                            <div className={`account-type ${role === 'educator' ? 'selected' : ''}`} onClick={() => handleToggle('educator')}>
                                <FontAwesomeIcon icon={faChalkboardTeacher} style={{ marginRight: '10px', fontSize: '24px'  }} />
                                Educator
                            </div>
                            <div className={`account-type ${role === 'learner' ? 'selected' : ''}`} onClick={() => handleToggle('learner')}>
                                <FontAwesomeIcon icon={faUser} style={{ marginRight: '10px', fontSize: '24px'  }} />
                                Learner
                            </div>
                        </div>
                            {emptyInput ? (
                                <p className="instructions instructions-shake">
                                    <FontAwesomeIcon icon={faInfoCircle} />&nbsp;
                                    All fields are required!
                                </p>
                            ) : null}
                        <button className="btn" onClick={handleSubmit}>Sign Up</button>
                        
                        <div style={{textAlign: 'right'}}>
                            <span className="small-text">Already have an account? <Link to="/login" className='link-text'>Sign in</Link></span>
                        </div>
                    </form>
                </div>
                
                
            </div>
              )}
        </main>
    );
}

export default Register;
