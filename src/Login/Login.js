import './Login.css';
import { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import UserContext from '../Register/UserContext';
const Login = () => {

    const { user, setUser } = useContext(UserContext);

    const [submitClicked, setSubmitClicked] = useState(false);

    const [username, setUsername] = useState('');
    const [validUsername, setValidUsername] = useState(true);
    // const [usernameFocus, setUsernameFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(true);
    // const [pwdFocus, setPwdFocus] = useState(false);

    const [notFoundError, setNotFoundError] = useState(false);
    const [emptyInput, setEmptyInput] = useState(false);


    useEffect(() => {
        console.log("logged in user: ", user);
    }, [user]);
    useEffect(() => {
        setValidUsername(true);
        setValidPwd(true);
        setEmptyInput(false)
    }, [username, pwd]);

    const handleLogin = async (e) => {
        e.preventDefault();
        setSubmitClicked(true);

        if(submitClicked && (!pwd || !username)){
            setEmptyInput(true);
        }

        // Basic validation
        if (!username) {
            setValidUsername(false);
            return;
        }

        if (!pwd) {
            setValidPwd(false);
            return;
        }

        try {
            const response = await fetch('http://localhost:8080/user/authenticate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ usernameOrEmail: username, password: pwd }),
            });
    
            if (response.ok) {
                const responseData = await response.json(); // Parse JSON response
                console.log('Authentication successful:', responseData);

                // Set user information in the context or state
                setUser(responseData.user);
                console.log('user:', user);

                localStorage.setItem('user', JSON.stringify(responseData.user));
            } else if (response.status === 401) {
                const errorData = await response.json(); // Parse JSON error response
                if (errorData.error === "Username/email not registered") {
                    // Username/email not registered
                    setValidUsername(false);
                    setNotFoundError(true);
                } else if (errorData.error === "Invalid password") {
                    // Invalid password
                    setValidPwd(false);
                } else {
                    // Handle other errors
                    console.error('Authentication error:', errorData.error);
                }
            } else {
                // Handle other errors
                console.error('Authentication error:', response.statusText);
            }
        } catch (error) {
            // Handle fetch error
            console.error('Error:', error);
        }
    };
    
    return (
        <main className='login-main-bg'>
            <div className="login-main">
                <div className="login-left">
                        <form>
                            
                            <h1 style={{fontSize:'35px', textAlign:'center'}}>Log In</h1>
                            
                            
                            <div className="input-div">
                                <div>
                                    
                                    <input 
                                        className="input"
                                        type="text"
                                        id="email"
                                        autoComplete="off"
                                        required
                                        onChange={(e) => setUsername(e.target.value)}
                                        aria-invalid={validUsername ? "false" : "true"}
                                        aria-describedby="uidnote"
                                        // onFocus={()=> setUsernameFocus(true)}
                                        // onBlur={()=> setUsernameFocus(false)}
                                    ></input>
                                    <div className="labelline">Username/Email</div>
                                </div>
                                
                            </div>
                            {submitClicked && username && !validUsername ? (
                                <p id="uidnote" className="instructions instructions-shake">
                                    <FontAwesomeIcon icon={faInfoCircle} />&nbsp;
                                    {notFoundError ? 'Username/email not registered!' : 'Username/email is required!'}
                                </p>
                            ) : null}

                            
                            <div className="input-div">
                                <div>
                                    
                                    <input 
                                        className="input"
                                        type="password"
                                        id="pwd"
                                        autoComplete="off"
                                        required
                                        onChange={(e) => setPwd(e.target.value)}
                                        aria-invalid={validPwd ? "false" : "true"}
                                        aria-describedby="uidnote"
                                        // onFocus={()=> setPwdFocus(true)}
                                        // onBlur={()=> setPwdFocus(false)}
                                    ></input>
                                    <div className="labelline">Password</div>
                                </div>
                            </div>

                            {submitClicked && pwd && !validPwd ? (
                                    <p id="uidnote" className="instructions instructions-shake">
                                        <FontAwesomeIcon icon={faInfoCircle} />&nbsp;
                                        Invalid password!
                                    </p>
                            ) : null}
                            <div style={{marginTop:'20px', marginBottom:'20px'}}>
                                <span className="small-text"><Link to="/forgot" className='link-text'>Forgot Password?</Link></span>
                            </div>

                            
                            <button className="btn" onClick={handleLogin}>Log In</button>
                            {emptyInput ? (
                                <p className="instructions instructions-shake">
                                    <FontAwesomeIcon icon={faInfoCircle} />&nbsp;
                                    All fields are required!
                                </p>
                            ) : null}
                            <div style={{textAlign: 'right'}}>
                                <span className="small-text">Don't have an account? <Link to="/register" className='link-text'>Sign up</Link></span>
                            </div>
                        </form>
                    </div>
                    <div className="login-right">
                        <div className="logo-title">
                            <img src="/logo.png" alt="logo"/>
                            <span>CodeTech</span>
                        </div>
                        <h1>Welcome Back!</h1>

                        <span className="span">Pick up where you left off</span>
                        <div className="right">
                            <img src="/login-right.png" alt="left img" />
                        </div>
                    </div>
            </div>
        </main>
    );
}

export default Login;