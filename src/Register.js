import React from "react";
import './Register.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

const Register = () => {
    return (
        <main>
            {/* <img className="bg" src="/signupbg.png" alt="background" /> */}
            <div className="regis-main">
                <div className="regis-img">
                    <div className="logo-title">
                        <img src="/logo.png" alt="logo"/>
                        <span>CodeTech</span>
                    </div>
                    <h1>We're so glad to <br/>have you on board!</h1>

                    <span className="span">Code Learning just got better!</span>
                    <img src="/signup-left.png" alt="left img" />
                </div>
                <div className="regis-content">
                    <form>{/* on submit */}
                        <h1>Enter your account details</h1>
                        <p className="">Account Information</p>
                        <div className="input-div">
                            <div className="i">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </div>
                            <div>
                                <h5>Email Address</h5>
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
                            </div>
                        </div>

                        <div className="input-div">
                            <div className="i">
                                <FontAwesomeIcon icon={faUser} />
                            </div>
                            <div>
                                <h5>First Name</h5>
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
                            </div>
                        </div>

                        <div className="input-div">
                            <div className="i">
                                <FontAwesomeIcon icon={faLock} />
                            </div>
                            <div>
                                <h5>Password</h5>
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
                            </div>
                        </div>

                        <div className="input-div">
                            <div className="i">
                                <FontAwesomeIcon icon={faLock} />
                            </div>
                            <div>
                                <h5>Confirm Password</h5>
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
                            </div>
                        </div>

                        <button>Sign Up</button>

                    </form>
                </div>


            </div>
        </main>
    );
}

export default Register;
