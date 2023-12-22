import './ForgotPassword.css';
import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from '@mui/material';
import UserContext from '../Register/UserContext';

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;



const ResetPassword = () =>{

    const location = useLocation();

    const {user, setUser} = useContext(UserContext);
    const [userid, setUserId] = useState(null);
    
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const email = location.state && location.state.email;
    console.log("user: ", email);

    const handleRedirect = () => {
        
        console.log('Navigating to /CodeTech...');
        
        window.location.href = '/'; 
    };

    useEffect(() => {
        document.title = 'CodeTech';

        // Fetch userid based on the provided email
        if (email) {
            fetch(`http://localhost:8080/user/checkEmail/${email}`)
                .then((response) => response.json())
                .then((data) => {
                    const exists = data.exists;
                    const fetchedUserId = data.userid;

                    if (exists && fetchedUserId) {
                        setUserId(fetchedUserId);

                        // Fetch the user by userid and update the context
                        fetch(`http://localhost:8080/user/getUser/${fetchedUserId}`)
                            .then((response) => response.json())
                            .then((user) => {
                                setUser(user);
                                
                                
                            })
                            .catch((error) => {
                                console.error('Error fetching user by userid:', error);
                            });
                    } else {
                        // Handle the case where the email doesn't exist or userid is not retrieved
                        console.error('Email not found or userid not retrieved');
                    }
                })
                .catch((error) => {
                    console.error('Error fetching userid:', error);
                });
        }
    }, [email]);
    
      if (!email) {
        return (
            <main className='a-notadmin-main'>
            <div className='a-notadmin-container'>
                <form className='a-notadmin-form'>
                    <h1 style={{fontSize:'35px',textAlign:'center'}}>Off Access!</h1>
                    <div style={{marginTop:'10px', marginBottom:'20px', textAlign:'center', padding:"0 10px"}}>
                        <span className="small-text">This page is for admin-only access. You don't have the necessary privileges to view this content.</span>
                    </div>
                    <Link to="/login" className='link-btn'>
                        <button className="btn">Go back</button>
                    </Link>
                </form>
            </div>
        </main>
        );
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
    
        // ... (other validation checks)
    
        const updatedUserData = {
          userid: userid, // Use the fetched userid
          username: user.username,
            email: user.email,
            password: newPassword, // Update the password
            firstname: user.firstname,
            lastname: user.lastname,
            role: user.role,
            isDelete: false
        };
    
        try {
          const response = await fetch(`http://localhost:8080/user/updateUser?userid=${userid}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedUserData),
          });
    
          if (response.ok) {
            // Fetch the updated user data
            const updatedUserResponse = await fetch(`http://localhost:8080/user/getUser/${userid}`);
            const updatedUserData = await updatedUserResponse.json();
    
            // Update the context with the new user data
            setUser(updatedUserData);
    
            // Optionally, you can clear the password fields after a successful update
            setCurrentPassword('');
            setNewPassword('');
            setConfirmPassword('');
            console.log("user: ", updatedUserData);
            localStorage.setItem('user', JSON.stringify(updatedUserData));
            handleRedirect();
          } else {
            console.error('Update failed:', response.statusText);
            setError('Error updating user data');
          }
        } catch (error) {
          console.error('Error during update:', error.message);
        }
      };
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
                                onChange={(e) => setNewPassword(e.target.value)}
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
                                onChange={(e) => setCurrentPassword(e.target.value)}
                                // aria-invalid={validName ? "false" : "true"}
                                // aria-describedby="uidnote"
                                // onFocus={()=> setUserFocus(true)}
                                // onBlur={()=> setUserFocus(false)}
                            ></input>
                            <div className="labelline">Confirm New Password</div>
                        </div>
                    </div>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    {success && <p style={{ color: 'green' }}>{success}</p>}
        
                    <button onClick={handleSubmit} className="btn">Submit</button>
                </form>
            </div>
        </main>
        
    );
}

export default ResetPassword