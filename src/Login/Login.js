import './Login.css';
import { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import { Link, Redirect } from 'react-router-dom';
import PropagateLoader from "react-spinners/PropagateLoader";

import UserContext from '../Register/UserContext';
const Login = () => {

    const { user, setUser } = useContext(UserContext);

    const [submitClicked, setSubmitClicked] = useState(false);

    const [username, setUsername] = useState('');
    const [validUsername, setValidUsername] = useState(true);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(true);
    const [showPwd, setShowPwd] = useState(false);

    const [notFoundError, setNotFoundError] = useState(false);
    const [emptyInput, setEmptyInput] = useState(false);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      }, [])

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

    const handleRedirect = () => {
        
        console.log('Navigating to /CodeTech...');
        
        window.location.href = '/'; 
    };
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
                const responseData = await response.json(); 
                console.log('Authentication successful:', responseData);
                setUser(responseData.user);
                console.log('user:', user);
                localStorage.setItem('user', JSON.stringify(responseData.user));
                handleRedirect();
            } else if (response.status === 401) {
                const errorData = await response.json(); 
                if (errorData.error === "Username/email not registered") {
                    setValidUsername(false);
                    setNotFoundError(true);
                } else if (errorData.error === "Invalid password") {
                    setValidPwd(false);
                } else {
                    console.error('Authentication error:', errorData.error);
                }
            } else {
                console.error('Authentication error:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
        
        
    };

    
    
    return (
        
        <main className='login-main-bg'>
            {loading ? (
            <div id="loader">
                <PropagateLoader
                loading={loading}
                size={30}
                color={'#36d7b7'}
              />
            </div>
              ):(
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
                                        type={showPwd ? 'text' : 'password'}
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
                                    <button
                                        type="button"
                                        className="show-hide-btn"
                                        onClick={() => setShowPwd(!showPwd)}
                                    >
                                        <FontAwesomeIcon
                                        icon={showPwd ? faEye : faEyeSlash}
                                        />
                                    </button>
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
              )}
        </main>
    );
}

export default Login;