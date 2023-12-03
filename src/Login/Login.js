import './Login.css';
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardTeacher, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Login = () => {

    useEffect(() => {
        document.title = "CodeTech";
      }, []);

    return (
        <main className='login-main-bg'>
            <div className="login-main">
                <div className="login-left">
                        <form>{/* on submit */}
                            
                            <h1 style={{fontSize:'35px', textAlign:'center'}}>Log In</h1>
                            
                            
                            <div className="input-div">
                                <div>
                                    
                                    <input 
                                        className="input"
                                        type="text"
                                        id="email"
                                        autoComplete="off"
                                        required
                                        // onChange={(e) => setEmailAd(e.target.value)}
                                        // aria-invalid={validName ? "false" : "true"}
                                        // aria-describedby="uidnote"
                                        // onFocus={()=> setUserFocus(true)}
                                        // onBlur={()=> setUserFocus(false)}
                                    ></input>
                                    <div className="labelline">Email Address</div>
                                </div>
                            </div>

                            
                            <div className="input-div">
                                <div>
                                    
                                    <input 
                                        className="input"
                                        type="password"
                                        id="pwd"
                                        autoComplete="off"
                                        required
                                        // onChange={(e) => setEmailAd(e.target.value)}
                                        // aria-invalid={validName ? "false" : "true"}
                                        // aria-describedby="uidnote"
                                        // onFocus={()=> setUserFocus(true)}
                                        // onBlur={()=> setUserFocus(false)}
                                    ></input>
                                    <div className="labelline">Password</div>
                                </div>
                            </div>
                            <div style={{marginTop:'20px', marginBottom:'20px'}}>
                                <span className="small-text"><Link to="/forgotpassword" style={{textDecoration:"none"}}>Forgot Password?</Link></span>
                            </div>
                            <button className="btn">Log In</button>
                            <div style={{textAlign: 'right'}}>
                                <span className="small-text">Don't have an account? <Link to="/register" style={{textDecoration:"none"}}>Sign up</Link></span>
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