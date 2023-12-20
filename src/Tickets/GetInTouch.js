import React, {useState, useEffect, useRef} from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Modal from "../Modal";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_CHARACTERS = 250;
const GetInTouch = () => {
    const [activeSection, setActiveSection] = useState("emailus");

    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [message, setMessage] = useState('');

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        const result = EMAIL_REGEX.test(email);
        setValidEmail(result);
    }, [email]);

    const sectionRefs = {
        contact: useRef(null),
        emailus: useRef(null),
      };

      const handleIntersection = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            console.log('hello:', entry.target.id);
          }
        });
      };

      useEffect(() => {
        const observerOptions = {
          root: null,
          rootMargin: "0px",
          threshold: 0.2,
        };
    
        const observer = new IntersectionObserver(handleIntersection, observerOptions);
        console.log('observer:', observer);
        Object.values(sectionRefs).forEach((ref) => {
          if (ref.current) {
            observer.observe(ref.current);
          }
        });

        return () => {
            Object.values(sectionRefs).forEach((ref) => {
              if (ref.current) {
                observer.unobserve(ref.current);
              }
            });
          };
    }, [sectionRefs]);

    const handleSectionClick = (section) => {
        setActiveSection(section);
    };

    const handleDetailsChange = (e) => {
        const inputText = e.target.value;
        if (inputText.length <= MAX_CHARACTERS) {
            setMessage(inputText);
        }

        const contactDetails = {name, email, message};

    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setEmail('');
        setName('');
        setMessage('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrMsg('');

        if(!email || !name || !message){
            setErrMsg('Please fill out all the required fields.');
            return;
        }

        const v2 = EMAIL_REGEX.test(email);
        if(!v2){
            setErrMsg("Invalid email input")
            return;
        }

        const contactus = {name, email, message}
        try{
            const response = await fetch("http://localhost:8080/contactus/insertContactUs", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(contactus),
            })

            console.log("Response:", response);

            if(response.ok){
                const contactUsStatus = await response.json();
                console.log("New Message added: ", contactUsStatus);
                setIsModalOpen(true);
            } else {
                console.error('Message submition failed:', response.statusText);
                setErrMsg('Error submitting message. Please try again later.');
                
            }
        } catch (error) {
            console.error('Error during submition:', error.message);
            setErrMsg('Error submitting message. Please try again later.');
        }

    };
    return(
        <>
        <main className='git-main-bg'>
            <Navbar/>
            <div className="git-content">
                <div className="git-left-content">
                    <div className="git-email" id="emailus" ref={sectionRefs.emailus}>
                        <h2>Send us a message!</h2>
                    </div>
                    <div className="git-email-input">
                        <form>
                            <div className="git-input-div">
                                <div className="git-input-label">
                                    <h5>Name</h5>
                                    {name === '' && <span style={{ color: 'red', marginLeft:'5px' }}>*</span>}
                                </div>
                                <input 
                                    className={`git-input`}
                                    type="text"
                                    id="name"
                                    autoComplete="off"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    aria-describedby="uidnote"
                                ></input>
                            </div>

                            <div className="git-input-div">
                                <div className="git-input-label">
                                    <h5>Email</h5>
                                    {email === '' && <span style={{ color: 'red', marginLeft:'5px' }}>*</span>}
                                </div>
                                <input 
                                    className={`git-input ${!validEmail ? 'invalid' : ''}` }
                                    type="text"
                                    id="email"
                                    autoComplete="off"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    aria-describedby="uidnote"
                                ></input>
                            </div>

                            <div className="ticket-input-div">
                                <div className="ticket-input-label">
                                    <h5>Message</h5>
                                    {message === '' && <span style={{ color: 'red', margin:'5px' }}>*</span>}
                                </div>
                                <textarea
                                    className={`ticket-input ${message.length > MAX_CHARACTERS ? 'invalid' : ''}`}
                                    id="message"
                                    autoComplete="off"
                                    required
                                    value={message}
                                    onChange={handleDetailsChange}
                                    aria-describedby="uidnote"
                                    rows={5}
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
                                        resize: 'none',
                                    }}
                                ></textarea>

                                <div style={{ fontSize: '10px', color: '#bbbbbb' }}>
                                    {message.length}/{MAX_CHARACTERS}
                                </div>
                            </div>
                            <div className="error-message" style={{ color: 'red', margin: '0', fontSize: '10px' }}>
                                {errMsg}
                            </div>
                            <button className="git-btn" onClick={handleSubmit}>Submit a Ticket</button>
                            


                        </form>

                    </div>
                    <div className="git-email" id="contact" ref={sectionRefs.contact}>
                        <h2>Contact</h2>
                    </div>
                    <div className="git-contact">
                        <h1>CodeTech</h1>
                        
                        <span>N. Bacalso Avenue Cebu City, Cebu, Philippines 6000</span><br/><br/>
                        <h3>Twitter: <a href={'https://twitter.com/shannandreii'} style={{fontWeight: '500', color:'#458C83'}} target="_blank" rel="noopener noreferrer">@shannandreii</a> </h3>
                        <h3>Facebook: <a href={'https://www.facebook.com/xiannandrei/'} style={{fontWeight: '500', color:'#458C83'}} target="_blank" rel="noopener noreferrer">Xianna Andrei</a> </h3>
                        <h3>Instagram: <a href={'https://www.instagram.com/shannandreii/'} style={{fontWeight: '500', color:'#458C83'}} target="_blank" rel="noopener noreferrer">@shannandreii</a> </h3>            
                    </div>
                </div>
                
                <div className="git-sidebar-container">
                    <div className="git-sidebar">
                        <h5>ON THIS PAGE</h5>
                        <div className="sections">
                            <ul>
                            <li className={activeSection === "emailus" ? "active" : ""}>
                                <a href="#emailus" onClick={() => handleSectionClick("emailus")}>Email Us</a>
                            </li>
                            <li className={activeSection === "contact" ? "active" : ""}>
                                <a href="#contact" onClick={() => handleSectionClick("contact")}>Contact</a>
                            </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <Modal onClose={handleCloseModal}>
                    <div className="ticket-modal-container">
                        <h1 style={{fontSize:'20px',textAlign:'center'}}>Message successfully submitted!</h1>
                        <div style={{marginTop:'10px', marginBottom:'20px', textAlign:'center', padding:"0 10px"}}>
                            <span className="small-text">Thank you for reaching out to us!</span>
                        </div>
                        
                    </div>
                </Modal>
            )}                           
            <Footer/>
            
        </main>
        </>
    );
}

export default GetInTouch;