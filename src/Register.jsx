import './Register.css';
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardTeacher, faUser } from '@fortawesome/free-solid-svg-icons';
const Register = () => {
    const [selectedAccountType, setSelectedAccountType] = useState('personal');

    const handleToggle = (type) => {
        setSelectedAccountType(type);
    };

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
                        
                        <h1 style={{fontSize:'35px'}}>Enter your account details</h1>
                        <div style={{marginTop:'20px', marginBottom:'20px'}}>
                            <span className="small-text">Account Information</span>
                        </div>
                        
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

                        <div className="input-side-by-side">
                            <div className="input-div">
                                <div>
                                    
                                    <input 
                                        className="input"
                                        type="text"
                                        id="firstname"
                                        autoComplete="off"
                                        required
                                        // onChange={(e) => setEmailAd(e.target.value)}
                                        // aria-invalid={validName ? "false" : "true"}
                                        // aria-describedby="uidnote"
                                        // onFocus={()=> setUserFocus(true)}
                                        // onBlur={()=> setUserFocus(false)}
                                    ></input>
                                    <div className="labelline">First Name</div>
                                </div>
                            </div>
                            <div className="input-div">
                                <div>
                                    
                                    <input 
                                        className="input"
                                        type="text"
                                        id="lastname"
                                        autoComplete="off"
                                        required
                                        // onChange={(e) => setEmailAd(e.target.value)}
                                        // aria-invalid={validName ? "false" : "true"}
                                        // aria-describedby="uidnote"
                                        // onFocus={()=> setUserFocus(true)}
                                        // onBlur={()=> setUserFocus(false)}
                                    ></input>
                                    <div className="labelline">Last Name</div>
                                </div>
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
                        <div className="input-div">
                            <div>
                                
                                <input 
                                    className="input"
                                    type="password"
                                    id="confirmpwd"
                                    autoComplete="off"
                                    required
                                    // onChange={(e) => setEmailAd(e.target.value)}
                                    // aria-invalid={validName ? "false" : "true"}
                                    // aria-describedby="uidnote"
                                    // onFocus={()=> setUserFocus(true)}
                                    // onBlur={()=> setUserFocus(false)}
                                ></input>
                                <div className="labelline">Confirm Password</div>
                            </div>
                        </div>
                        <div style={{marginTop:'20px', marginBottom:'20px'}}>
                            <span className="small-text">Account Type</span>
                        </div>

                        <div className="input-side-by-side" style={{ marginTop: '20px' }}>
                            <div className={`account-type ${selectedAccountType === 'educator' ? 'selected' : ''}`} onClick={() => handleToggle('educator')}>
                                <FontAwesomeIcon icon={faChalkboardTeacher} style={{ marginRight: '10px', fontSize: '24px'  }} />
                                Educator
                            </div>
                            <div className={`account-type ${selectedAccountType === 'learner' ? 'selected' : ''}`} onClick={() => handleToggle('learner')}>
                                <FontAwesomeIcon icon={faUser} style={{ marginRight: '10px', fontSize: '24px'  }} />
                                Learner
                            </div>
                        </div>

                        <button className="btn">Sign Up</button>
                        <div style={{textAlign: 'right'}}>
                            <span className="small-text">Already have an account? Sign in</span>
                        </div>
                    </form>
                </div>

                
            </div>
        </main>
    );
}

export default Register;
