import './ForgotPassword.css';

const ResetPassword = () =>{
    
    return(
        <main className='forgot-main'>
            <div className='forgot-container'>
                <form className='forgot-form'>
                    <h1 style={{fontSize:'35px',textAlign:'center'}}>Reset Password</h1>
                    <div style={{marginTop:'10px', marginBottom:'20px', textAlign:'center'}}>
                        <span className="small-text">Please create a unique password</span>
                    </div>
                

                    <div className="input-div">
                        <div>
                            
                            <input 
                                className="input"
                                type="password"
                                id="pwd-reset"
                                autoComplete="off"
                                required
                                // onChange={(e) => setEmailAd(e.target.value)}
                                // aria-invalid={validName ? "false" : "true"}
                                // aria-describedby="uidnote"
                                // onFocus={()=> setUserFocus(true)}
                                // onBlur={()=> setUserFocus(false)}
                            ></input>
                            <div className="labelline">New Password</div>
                        </div>
                    </div>

                    <div className="input-div">
                        <div>
                            
                            <input 
                                className="input"
                                type="password"
                                id="confirmpwd-reset"
                                autoComplete="off"
                                required
                                // onChange={(e) => setEmailAd(e.target.value)}
                                // aria-invalid={validName ? "false" : "true"}
                                // aria-describedby="uidnote"
                                // onFocus={()=> setUserFocus(true)}
                                // onBlur={()=> setUserFocus(false)}
                            ></input>
                            <div className="labelline">Confirm New Password</div>
                        </div>
                    </div>

                    <button className="btn">Submit</button>
                </form>
            </div>
        </main>
        
    );
}

export default ResetPassword