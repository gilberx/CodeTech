import React, {useState, useEffect, useRef} from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_CHARACTERS = 250;
const GetInTouch = () => {
    const [activeSection, setActiveSection] = useState("emailus");

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [message, setMessage] = useState('');

    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        const result = EMAIL_REGEX.test(email);
        setValidEmail(result);
    }, [email]);

    const sectionRefs = {
        description: useRef(null),
        abouttheapp: useRef(null),
        others: useRef(null),
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
    };
    return(
        <>
        <main className='git-main-bg'>
            <Navbar/>
            <div className="git-content">
                <div className="git-left-content">
                    <div className="git-email" id="emailus">
                        <h2>Email Us</h2>
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
                            <button className="git-btn" onClick={handleSubmit}>Submit a Ticket</button>
                        </form>

                    </div>
                    <div className="git-email" id="contact">
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

            <Footer/>
            
        </main>
        </>
    );
}

export default GetInTouch;