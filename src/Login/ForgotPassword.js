import './ForgotPassword.css';
import React, {useState} from 'react';
import { useEffect } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';


const ForgotPassword = () =>{
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [getCodeClicked, setGetCodeClicked] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [enteredCode, setEnteredCode] = useState('');
    const [sentEmail, setSentEmail] = useState('');

    useEffect(() => {
        document.title = "CodeTech";
      }, []);

      useEffect(() => {
        setErrorMessage('');
      }, [email]);

    // const checkEmailExists = async () => {
    // try {
    //     const response = await fetch(`http://localhost:8080/user/checkEmail/${email}`);
    //     const data = await response.json();
    //     setIsEmailValid(data.exists);
    //     console.log("is email valid: ", isEmailValid);
        
    // } catch (error) {
    //     console.error('Error checking email existence:', error);
    //     setErrorMessage("An error occurred while checking email existence");
    //     setIsEmailValid(false);
    // }
    // };

    const handleGetCodeClick = (e) => {
        e.preventDefault();
        setErrorMessage('');
        setSuccessMessage('');
    
        if (email) {
            // Check if the email exists
            fetch(`http://localhost:8080/user/checkEmail/${email}`)
                .then(response => response.json())
                .then(emailCheckData => {
                    setIsEmailValid(emailCheckData.exists);
    
                    if (!emailCheckData.exists) {
                        setErrorMessage("Email address doesn't exist");
                        return;
                    }
    
                    // Call the endpoint to send verification code
                    fetch(`http://localhost:8080/user/sendVerificationCode?email=${email}`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            email: email,
                        }),
                    })
                        .then(verificationResponse => {
                            if (verificationResponse.ok) {
                                // Extract the verification code from the response
                                verificationResponse.text().then(verificationCode => {
                                    // Update the state with the verification code
                                    setSentEmail(verificationCode);
    
                                    setGetCodeClicked(true);
                                    setSuccessMessage('Code sent to your email.');
                                    console.log("success code: ", verificationCode);
                                });
                            } else {
                                verificationResponse.text().then(errorMessage => {
                                    setErrorMessage(errorMessage);
                                });
                            }
                        })
                        .catch(error => {
                            console.error('Error handling email and verification code:', error);
                            setErrorMessage("An error occurred while handling email and verification code");
                            setIsEmailValid(false);
                        });
                })
                .catch(error => {
                    console.error('Error checking email existence:', error);
                    setErrorMessage("An error occurred while checking email existence");
                    setIsEmailValid(false);
                });
        } else {
            setErrorMessage("Email address is empty");
        }
    };
    
    const handleSubmitCode = (e) => {
        e.preventDefault();
        setErrorMessage('');
    
        if (enteredCode) {
            // Send a request to verify the entered code
            fetch(`http://localhost:8080/user/verifyCode?email=${email}&enteredCode=${enteredCode}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then(verificationResponse => {
                    if (verificationResponse.ok) {
                        verificationResponse.text().then(verificationResult => {
                            if (verificationResult === 'success') {
                                // Code verification successful
                                setSuccessMessage("Verification successful. You can now change your password.");
                                
                                navigate('/reset', { state: { email } });
                            } else {
                                // Code verification failed
                                setErrorMessage("Incorrect verification code. Please try again.");
                            }
                        });
                    } else {
                        verificationResponse.text().then(errorMessage => {
                            setErrorMessage(errorMessage);
                        });
                    }
                })
                .catch(error => {
                    console.error('Error verifying code:', error);
                    setErrorMessage("An error occurred while verifying the code. Please try again.");
                });
        } else {
            setErrorMessage("Verification code is empty");
        }
    };
    
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
                                onChange={(e) => setEmail(e.target.value)}
                                // aria-invalid={validName ? "false" : "true"}
                                // aria-describedby="uidnote"
                                // onFocus={()=> setUserFocus(true)}
                                // onBlur={()=> setUserFocus(false)}
                            ></input>
                            <div className="labelline">Email Address</div>
                        </div>
                    </div>
                    {getCodeClicked && (
                        <div className="input-div">
                        <div>
                            <input
                            className="input"
                            type="text"
                            id="code"
                            autoComplete="off"
                            required
                            value={enteredCode}
                            onChange={(e) => setEnteredCode(e.target.value)}
                            />
                            <div className="labelline">Enter Code</div>
                        </div>
                        </div>
                    )}
                    
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    {successMessage && <p className="success-message">{successMessage}</p>}
                    <button onClick={successMessage ? handleSubmitCode : handleGetCodeClick} className="btn">
                        {successMessage ? "Submit Code" : "Get Code"}
                    </button>
                    
                </form>
            </div>
        </main>
        
    );
}

export default ForgotPassword