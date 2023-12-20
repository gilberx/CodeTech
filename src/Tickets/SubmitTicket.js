import React, { useState, useEffect } from "react";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';
import './HelpCenter.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Navbar from '../Navbar';
import Footer from '../Footer';
import { left } from "@popperjs/core";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_CHARACTERS = 250;

const SubmitTicket = () => {
    
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [category, setCategory] = useState('');
    const [details, setDetails] = useState('');
    const [status, setStatus] = useState('');
    const [timestamp, setTimestamp] = useState(null);
    const [consentChecked, setConsentChecked] = useState(false);
    const [accuracyChecked, setAccuracyChecked] = useState(false);

    const [errMsg, setErrMsg] =useState('');

    useEffect(() => {
        const result = EMAIL_REGEX.test(email);
        setValidEmail(result);
        console.log("valid: ",validEmail);
    }, [email]);

   

    const handleDetailsChange = (e) => {
        const inputText = e.target.value;
        if (inputText.length <= MAX_CHARACTERS) {
            setDetails(inputText);
        }
    };

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    const handleConsentChange = () => {
        setConsentChecked(!consentChecked);
    };

    const handleAccuracyChange = () => {
        setAccuracyChecked(!accuracyChecked);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrMsg('');
        if(!email || !title || !firstname || !lastname || !category || !details){
            setErrMsg('Please fill out all the required fields.');
            return;
        }
        if(!consentChecked && !accuracyChecked){
            setErrMsg("Please check both checkboxes before submitting the form.");
            return;
        }

        const v2 = EMAIL_REGEX.test(email);
        if(!v2){
            setErrMsg("Invalid email input")
            return;
        }

        
    };
    return (
        <>
        <main className='helpcenter-main-bg'>
            <div>
            <Navbar />
            </div>
            <div className="hc-title">
                <Typography variant='h4' 
                style={{
                    fontWeight:'800', 
                    fontFamily:'Montserrat, sans-serif', 
                    textAlign:'center', 
                    color:'#F5FFFD'}}>
                    Submit a Ticket
                </Typography>
                <span style={{color: 'white', textAlign: 'center', fontSize: '13px', fontWeight: '100', paddingTop: '5px'}}>
                Let us know your concerns, suggestions, or requests and <br/> we’ll get back to you soon!
                </span>
            </div>
            <div className="ticket-content">
                <div className="ticket-subheader">
                    <h6 style={{color: '#bbbbbb'}}>DETAILS</h6>
                    <hr className="subheader-line" />
                </div>

                <div className="ticket-inputs">
                    <form >
                        <div className="ticket-input-div">
                                <div className="ticket-input-label">
                                    <h5>Concern Title</h5>
                                    {title === '' && <span style={{ color: 'red', marginLeft:'5px' }}>*</span>}
                                </div>
                                <input 
                                    className={`ticket-input`}
                                    type="text"
                                    id="title"
                                    autoComplete="off"
                                    required
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    aria-describedby="uidnote"
                                ></input>
                        </div>

                        <div className="ticket-input-div">
                                <div className="ticket-input-label">
                                    <h5>Your Email Address</h5>
                                    {email === '' && <span style={{ color: 'red', marginLeft:'5px' }}>*</span>}
                                </div>
                                
                                <input 
                                    className={`ticket-input ${!validEmail ? 'invalid' : ''}`}
                                    type="text"
                                    id="email"
                                    autoComplete="off"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    
                                    aria-invalid={validEmail ? "false" : "true"}
                                    aria-describedby="uidnote"
                                ></input>
                                <h7 style={{fontSize:'10px', color: '#bbbbbb'}}>Use your CodeTech registered email address</h7>
                        </div>



                        <div className="ticket-side-by-side">
                            <div className="ticket-input-div">
                                    <div className="ticket-input-label">
                                        <h5>First Name</h5>
                                        {firstname === '' && <span style={{ color: 'red', marginLeft:'5px' }}>*</span>}
                                    </div>
                                    <input 
                                        className={`ticket-input`}
                                        type="text"
                                        id="firstname"
                                        autoComplete="off"
                                        required
                                        value={firstname}
                                        onChange={(e) => setFirstname(e.target.value)}
                                        aria-describedby="uidnote"
                                    ></input>
                            </div>
                            <div className="ticket-input-div">
                                    <div className="ticket-input-label">
                                        <h5>Last Name</h5>
                                        {lastname === '' && <span style={{ color: 'red', marginLeft:'5px' }}>*</span>}
                                    </div>
                                    <input 
                                        className={`ticket-input`}
                                        type="text"
                                        id="lastname"
                                        autoComplete="off"
                                        required
                                        value={lastname}
                                        onChange={(e) => setLastname(e.target.value)}
                                        aria-describedby="uidnote"
                                    ></input>
                            </div>
                            
                            
                        </div>

                        <div className="ticket-input-div">
                                <div className="ticket-input-label">
                                    <h5>Concern Category</h5>
                                    {category === '' && <span style={{ color: 'red', marginLeft:'5px' }}>*</span>}
                                </div>
                                <select
                                    className={`ticket-input`}
                                    id="category"
                                    value={category}
                                    onChange={handleCategoryChange}
                                >
                                    <option value="">Select a category</option>
                                    <option value="Account Issues">Account Issues</option>
                                    <option value="Class Management">Class Management</option>
                                    <option value="Ticket Submissions">Ticket Submissions</option>
                                    <option value="Admin Assistance">Admin Assistance</option>
                                    <option value="Course Content">Course Content</option>
                                    <option value="Technical Glitches">Technical Glitches</option>
                                    <option value="Feedback and Suggestions">Feedback and Suggestions</option>
                                    <option value="General Inquiries">General Inquiries</option>
                                </select>
                        </div>

                        <div className="ticket-input-div">
                            <div className="ticket-input-label">
                                <h5>Kindly provide all the details that will help us assist you with your concern.</h5>
                                {details === '' && <span style={{ color: 'red', margin:'5px' }}>*</span>}
                            </div>
                            {console.log("details.lenght: ", details.length)}
                            <textarea
                                className={`ticket-input ${details.length > MAX_CHARACTERS ? 'invalid' : ''}`}
                                id="details"
                                autoComplete="off"
                                required
                                value={details}
                                onChange={handleDetailsChange}
                                aria-describedby="uidnote"
                                rows={5} // Set the desired number of rows
                                style={{
                                    width: '100%',
                                    outline: 'none',
                                    fontSize: '1rem',
                                    margin: '5px 0',
                                    padding: '15px 15px',
                                    lineHeight: '25px',
                                    borderRadius: '10px',
                                    border: '2px solid #7c7c7c',
                                    background: 'transparent',
                                    zIndex: '1111',
                                    fontFamily: "'Inter', sans-serif",
                                    resize: 'none', // Disable resizing
                                }}
                            ></textarea>

                            <div style={{ fontSize: '10px', color: '#bbbbbb' }}>
                                {details.length}/{MAX_CHARACTERS}
                            </div>
                        </div>


                        <div className="ticket-checkboxes">
                            <div className="ticket-checkbox">
                                <input
                                    type="checkbox"
                                    id="consentCheckbox"
                                    checked={consentChecked}
                                    onChange={handleConsentChange}
                                />
                                <label htmlFor="consentCheckbox">
                                    I consent to the collection and use of my information for the purpose of addressing my concern.
                                </label>
                            </div>
                            <div className="ticket-checkbox">
                                <input
                                    type="checkbox"
                                    id="accuracyCheckbox"
                                    checked={accuracyChecked}
                                    onChange={handleAccuracyChange}
                                />
                                <label htmlFor="accuracyCheckbox">
                                    The information I have provided is accurate and truthful to the best of my knowledge. I understand that providing incorrect or misleading information may potentially prolong the resolution process or prevent a resolution from being reached.
                                </label>
                            </div>
                        </div>
                        

                        <button className="btn" onClick={handleSubmit}>Submit</button>
                        <div className="error-message" style={{ color: 'red', margin: '10px 0', fontSize: '10px' }}>
                            {errMsg}
                        </div>
                    </form>
                                
                    
                </div>
            </div>
            <Footer/>
        </main>
        </>
    );
}

export default SubmitTicket;