import React from "react";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';
import './HelpCenter.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Navbar from '../Navbar';
import Footer from '../Footer';

const HelpCenter = () => {
    const navigate = useNavigate();
    return (
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
                    How may we help you?
                </Typography>
            </div>
            <div className="hc-options">
                <div className="hc-option">
                    <img src="/faq.png"/>
                    <h2>FAQs</h2>
                    <span>Read frequently asked questions</span>
                    
                </div>

                <div className="hc-option">
                    <img src="/ticket.png"/>
                    <h2>My Tickets</h2>
                    <span>View your submitted concerns/requests</span>
                    
                </div>

                <div className="hc-option">
                    <img src="/contact-hc.png"/>
                    <h2>Get In Touch</h2>
                    <span>If you want to talk to us directly, we're here to listen!</span>
                    
                </div>

            </div>

            <div className="hc-divider">
                <div className="hc-divider-container">
                    <h1>Can't find what you're looking for?</h1>
                    <Button onClick={() => navigate('/Courses')}
                            style={{my: 2,
                                backgroundColor: '#F5FFFD',
                                color: '#212121',
                                display: 'block',
                                borderRadius: '35px',
                                width: '200px',
                                height: '50px', 
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 600,
                                fontSize: 15,
                                textTransform: 'none',
                                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)', 
                                marginTop:'50px'
                            }}>
                    Submit a ticket
                    </Button>
                </div>
            </div>
            <Footer/>
        </main>
    );
}

export default HelpCenter;