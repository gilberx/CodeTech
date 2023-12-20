
import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";
import { Paper, Button } from "@mui/material";
import UserContext from "../Register/UserContext";

const ViewTicket = () => {

    const {user, setUser} = useContext(UserContext);
    const navigate = useNavigate();
    const [tickets, setTickets] = useState([]);


    useEffect(() => {
        if (user) {
          fetchTickets(user.userid);
        }
      }, [user]);
    
      const fetchTickets = async (userId) => {
        try {
          const response = await fetch(`http://localhost:8080/ticket/getTickets?userid=${userId}`);
          const data = await response.json();
          setTickets(data);
          console.log("tickets: ", tickets)
        } catch (error) {
          console.error("Error fetching tickets:", error);
        }
      };
    
    return(
        <>

        <main className='helpcenter-main-bg'>
            <div>
            <Navbar />
            </div>
            <div className="hc-title">
                <h1
                style={{
                    fontWeight:'800', 
                    fontFamily:'Montserrat, sans-serif', 
                    textAlign:'center', 
                    color:'#F5FFFD'}}>
                    My Tickets
                </h1>
                <span style={{color: 'white', textAlign: 'center', fontSize: '13px', fontWeight: '100', paddingTop: '5px'}}>
                Explore your submitted concerns, suggestions,<br/> and requests in one convenient place.
                </span>
            </div>
            <div className="ticket-content">
                <div className="ticket-subheader">
                    <div className="ticket-table-header">
                        <h6>DETAILS</h6>
                        
                            <h6>CATEGORY</h6>
                            <h6>DATE CREATED</h6>
                            <h6>STATUS</h6>
                        
                        
                    </div>
                    
                    <hr className="subheader-line" />
                </div>

                <div className="ticket-view">
                    {tickets.length !== 0 ? <>
                        {tickets.map((ticket, id) => {
                            return <Paper key={id} style={{background: 'none', boxShadow: 'none'}}>
                                <div className="ticket-view-box">
                                    <span>{ticket.title}</span>
                                    
                                        <span>{ticket.category}</span>
                                        <span>{new Date(ticket.timestamp).toLocaleDateString()}</span>
                                        <span>{ticket.status}</span>
                                    
                                </div>
                            </Paper>
                        })}
                        
                    </>:<>
                        <div className="ticket-view-box">
                            <span>There are currently no tickets...</span>
                        </div>
                    </> }

                        <Button onClick={() => navigate('/submitticket')}
                                style={{my: 2,
                                    backgroundColor: '#458C83',
                                    color: 'white',
                                    display: 'block',
                                    borderRadius: '30px',
                                    width: '200px',
                                    height: '50px', 
                                    fontFamily: 'Inter, sans-serif',
                                    fontWeight: 600,
                                    fontSize: 15,
                                    textTransform: 'none',
                                    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)', 
                                    margin: '50px auto'
                                }}>
                        Submit a Ticket
                        </Button>
                </div>
            </div>
            
            <Footer/>
        </main>
        </>
    );
}

export default ViewTicket;