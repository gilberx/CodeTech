import './ForgotPassword.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


const ForgotPassword = () =>{

    useEffect(() => {
        document.title = "CodeTech";
      }, []);
    
    return(
        <main className='forgot-main'>
            <div className='forgot-container'>
                <form className='forgot-form'>
                    <h1 style={{fontSize:'35px',textAlign:'center'}}>Forgot Password</h1>
                    <div style={{marginTop:'10px', marginBottom:'20px', textAlign:'center'}}>
                        <span className="small-text">Enter your email and we'll send you a verification code</span>
                    </div>
                    <div className="input-div">
                        <div>
                            
                            <input 
                                className="input"
                                type="text"
                                id="email-forgot"
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
                    
                    <Link to="/getCode" className='link-btn'>
                        <button className="btn">Get Code</button>
                    </Link>
                </form>
            </div>
        </main>
        
    );
}

export default ForgotPassword