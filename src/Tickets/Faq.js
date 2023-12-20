import React, {useState, useEffect, useRef} from "react";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';
import './HelpCenter.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";

const Faq = () => {

    const navigate = useNavigate();

    const [expandedAccordion, setExpandedAccordion] = useState(null);
    const [activeSection, setActiveSection] = useState("description");

    const handleAccordionChange = (panel) => (event, isExpanded) => {
        setExpandedAccordion(isExpanded ? panel : null);
    };

    const handleSectionClick = (section) => {
            setActiveSection(section);
    };

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
          threshold: 0.5,
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

    return (
        <main className='faq-main-bg'>
           <Navbar/>
           
           <div className="faq-content">

            <div className="faq-left-content">
                <h1 id="description" ref={sectionRefs.description}>What is CodeTech?</h1>

                <h3>Description</h3>
                <span>
                 CodeTech is an innovative and user-friendly online coding education platform dedicated 
                 to empowering students and aspiring developers on their journey to mastering the art 
                 of coding. We understand the importance of providing an accessible and engaging platform 
                 that simplifies the complex world of programming. 
                 <br/><br/>
                 CodeTech is the perfect destination 
                 for those looking to learn how to code, enhance their coding skills, or even kickstart 
                 a career in the tech industry.

                </span>
                <img src="faq-img.png" style={{width: '100vh', margin: '20px auto'}}/>
                <h1 id="abouttheapp" ref={sectionRefs.abouttheapp}>About the App</h1>
                <div className="faq-accordion-container">
                    <Accordion
                    expanded={expandedAccordion === 'panel1'}
                    onChange={handleAccordionChange('panel1')}
                    style={{
                        boxShadow: 'none',
                        border: expandedAccordion === 'panel1' ? '2px solid #458C83' : '2px solid #bbbbbb',
                        background: 'none',
                        borderRadius: '10px'
                    }}
                    >
                    <AccordionSummary style={{ padding: '10px', display: 'flex' }}>
                        <img
                        className="arrow"
                        width="20"
                        height="20"
                        src={expandedAccordion === 'panel1' ? 'https://img.icons8.com/ios-glyphs/30/458c83/forward.png' : 'https://img.icons8.com/ios-glyphs/30/bbbbbb/forward.png'}
                        alt="forward"
                        style={{ marginLeft: '10px', transform: expandedAccordion === 'panel1' ? 'rotate(90deg)' : 'none' }}
                        />
                        <span className="faq-question">What are the minimum requirements needed to be able to use CodeTech?</span>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className="faq-accordion-details">seecret</div>
                    </AccordionDetails>
                    </Accordion>
                </div>

                <div className="faq-accordion-container">
                    <Accordion
                    expanded={expandedAccordion === 'panel2'}
                    onChange={handleAccordionChange('panel2')}
                    style={{
                        boxShadow: 'none',
                        border: expandedAccordion === 'panel2' ? '2px solid #458C83' : '2px solid #bbbbbb',
                        background: 'none',
                        borderRadius: '10px'
                    }}
                    >
                    <AccordionSummary style={{ padding: '10px', display: 'flex' }}>
                        <img
                        className="arrow"
                        width="20"
                        height="20"
                        src={expandedAccordion === 'panel2' ? 'https://img.icons8.com/ios-glyphs/30/458c83/forward.png' : 'https://img.icons8.com/ios-glyphs/30/bbbbbb/forward.png'}
                        alt="forward"
                        style={{ marginLeft: '10px', transform: expandedAccordion === 'panel2' ? 'rotate(90deg)' : 'none' }}
                        />
                        <span className="faq-question">Is CodeTech free?</span>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className="faq-accordion-details">
                        Yes. Code learning should be accessible for everyone. You can access all of CodeTech’s Course content completely free! Learners on our Free plan can access all of our lesson content and practice exercises.
                        </div>
                    </AccordionDetails>
                    </Accordion>
                </div>

                <div className="faq-accordion-container">
                    <Accordion
                    expanded={expandedAccordion === 'panel3'}
                    onChange={handleAccordionChange('panel3')}
                    style={{
                        boxShadow: 'none',
                        border: expandedAccordion === 'panel3' ? '2px solid #458C83' : '2px solid #bbbbbb',
                        background: 'none',
                        borderRadius: '10px'
                    }}
                    >
                    <AccordionSummary style={{ padding: '10px', display: 'flex' }}>
                        <img
                        className="arrow"
                        width="20"
                        height="20"
                        src={expandedAccordion === 'panel3' ? 'https://img.icons8.com/ios-glyphs/30/458c83/forward.png' : 'https://img.icons8.com/ios-glyphs/30/bbbbbb/forward.png'}
                        alt="forward"
                        style={{ marginLeft: '10px', transform: expandedAccordion === 'panel3' ? 'rotate(90deg)' : 'none' }}
                        />
                        <span className="faq-question">Do I need any existing skills or knowledge to use CodeTech?</span>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className="faq-accordion-details">
                        Yes. Code learning should be accessible for everyone. You can access all of CodeTech’s Course content completely free! Learners on our Free plan can access all of our lesson content and practice exercises.
                        </div>
                    </AccordionDetails>
                    </Accordion>
                </div>

                <div className="faq-accordion-container">
                    <Accordion
                    expanded={expandedAccordion === 'panel4'}
                    onChange={handleAccordionChange('panel4')}
                    style={{
                        boxShadow: 'none',
                        border: expandedAccordion === 'panel4' ? '2px solid #458C83' : '2px solid #bbbbbb',
                        background: 'none',
                        borderRadius: '10px'
                    }}
                    >
                    <AccordionSummary style={{ padding: '10px', display: 'flex' }}>
                        <img
                        className="arrow"
                        width="20"
                        height="20"
                        src={expandedAccordion === 'panel4' ? 'https://img.icons8.com/ios-glyphs/30/458c83/forward.png' : 'https://img.icons8.com/ios-glyphs/30/bbbbbb/forward.png'}
                        alt="forward"
                        style={{ marginLeft: '10px', transform: expandedAccordion === 'panel4' ? 'rotate(90deg)' : 'none' }}
                        />
                        <span className="faq-question">How to join a class?</span>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className="faq-accordion-details">
                        Yes. Code learning should be accessible for everyone. You can access all of CodeTech’s Course content completely free! Learners on our Free plan can access all of our lesson content and practice exercises.
                        </div>
                    </AccordionDetails>
                    </Accordion>
                </div>

                <div className="faq-accordion-container">
                    <Accordion
                    expanded={expandedAccordion === 'panel5'}
                    onChange={handleAccordionChange('panel5')}
                    style={{
                        boxShadow: 'none',
                        border: expandedAccordion === 'panel5' ? '2px solid #458C83' : '2px solid #bbbbbb',
                        background: 'none',
                        borderRadius: '10px'
                    }}
                    >
                    <AccordionSummary style={{ padding: '10px', display: 'flex' }}>
                        <img
                        className="arrow"
                        width="20"
                        height="20"
                        src={expandedAccordion === 'panel5' ? 'https://img.icons8.com/ios-glyphs/30/458c83/forward.png' : 'https://img.icons8.com/ios-glyphs/30/bbbbbb/forward.png'}
                        alt="forward"
                        style={{ marginLeft: '10px', transform: expandedAccordion === 'panel5' ? 'rotate(90deg)' : 'none' }}
                        />
                        <span className="faq-question">How to create a class?</span>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className="faq-accordion-details">
                        Yes. Code learning should be accessible for everyone. You can access all of CodeTech’s Course content completely free! Learners on our Free plan can access all of our lesson content and practice exercises.
                        </div>
                    </AccordionDetails>
                    </Accordion>
                </div>

                <div className="faq-accordion-container">
                    <Accordion
                    expanded={expandedAccordion === 'panel6'}
                    onChange={handleAccordionChange('panel6')}
                    style={{
                        boxShadow: 'none',
                        border: expandedAccordion === 'panel6' ? '2px solid #458C83' : '2px solid #bbbbbb',
                        background: 'none',
                        borderRadius: '10px'
                    }}
                    >
                    <AccordionSummary style={{ padding: '10px', display: 'flex' }}>
                        <img
                        className="arrow"
                        width="20"
                        height="20"
                        src={expandedAccordion === 'panel6' ? 'https://img.icons8.com/ios-glyphs/30/458c83/forward.png' : 'https://img.icons8.com/ios-glyphs/30/bbbbbb/forward.png'}
                        alt="forward"
                        style={{ marginLeft: '10px', transform: expandedAccordion === 'panel6' ? 'rotate(90deg)' : 'none' }}
                        />
                        <span className="faq-question">How do I add a Course? Can I learn more than one Course at the same time?</span>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className="faq-accordion-details">
                        Yes. Code learning should be accessible for everyone. You can access all of CodeTech’s Course content completely free! Learners on our Free plan can access all of our lesson content and practice exercises.
                        </div>
                    </AccordionDetails>
                    </Accordion>
                </div>

                <div className="faq-accordion-container">
                    <Accordion
                    expanded={expandedAccordion === 'panel7'}
                    onChange={handleAccordionChange('panel7')}
                    style={{
                        boxShadow: 'none',
                        border: expandedAccordion === 'panel7' ? '2px solid #458C83' : '2px solid #bbbbbb',
                        background: 'none',
                        borderRadius: '10px'
                    }}
                    >
                    <AccordionSummary style={{ padding: '10px', display: 'flex' }}>
                        <img
                        className="arrow"
                        width="20"
                        height="20"
                        src={expandedAccordion === 'panel7' ? 'https://img.icons8.com/ios-glyphs/30/458c83/forward.png' : 'https://img.icons8.com/ios-glyphs/30/bbbbbb/forward.png'}
                        alt="forward"
                        style={{ marginLeft: '10px', transform: expandedAccordion === 'panel7' ? 'rotate(90deg)' : 'none' }}
                        />
                        <span className="faq-question">Can I reset my Course progress on CodeTech?</span>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className="faq-accordion-details">
                        Yes. Code learning should be accessible for everyone. You can access all of CodeTech’s Course content completely free! Learners on our Free plan can access all of our lesson content and practice exercises.
                        </div>
                    </AccordionDetails>
                    </Accordion>
                </div>
                <h1 id="others" ref={sectionRefs.others}>Others</h1>

                <div className="faq-accordion-container">
                    <Accordion
                    expanded={expandedAccordion === 'panel8'}
                    onChange={handleAccordionChange('panel8')}
                    style={{
                        boxShadow: 'none',
                        border: expandedAccordion === 'panel8' ? '2px solid #458C83' : '2px solid #bbbbbb',
                        background: 'none',
                        borderRadius: '10px'
                    }}
                    >
                    <AccordionSummary style={{ padding: '10px', display: 'flex' }}>
                        <img
                        className="arrow"
                        width="20"
                        height="20"
                        src={expandedAccordion === 'panel8' ? 'https://img.icons8.com/ios-glyphs/30/458c83/forward.png' : 'https://img.icons8.com/ios-glyphs/30/bbbbbb/forward.png'}
                        alt="forward"
                        style={{ marginLeft: '10px', transform: expandedAccordion === 'panel8' ? 'rotate(90deg)' : 'none' }}
                        />
                        <span className="faq-question">Can I change my Sololearn account's associated email address?</span>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className="faq-accordion-details">
                        Yes. Code learning should be accessible for everyone. You can access all of CodeTech’s Course content completely free! Learners on our Free plan can access all of our lesson content and practice exercises.
                        </div>
                    </AccordionDetails>
                    </Accordion>
                </div>
                <div className="faq-accordion-container">
                    <Accordion
                    expanded={expandedAccordion === 'panel9'}
                    onChange={handleAccordionChange('panel9')}
                    style={{
                        boxShadow: 'none',
                        border: expandedAccordion === 'panel9' ? '2px solid #458C83' : '2px solid #bbbbbb',
                        background: 'none',
                        borderRadius: '10px'
                    }}
                    >
                    <AccordionSummary style={{ padding: '10px', display: 'flex' }}>
                        <img
                        className="arrow"
                        width="20"
                        height="20"
                        src={expandedAccordion === 'panel9' ? 'https://img.icons8.com/ios-glyphs/30/458c83/forward.png' : 'https://img.icons8.com/ios-glyphs/30/bbbbbb/forward.png'}
                        alt="forward"
                        style={{ marginLeft: '10px', transform: expandedAccordion === 'panel9' ? 'rotate(90deg)' : 'none' }}
                        />
                        <span className="faq-question">I forgot my password, how do I reset it?</span>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className="faq-accordion-details">
                        Yes. Code learning should be accessible for everyone. You can access all of CodeTech’s Course content completely free! Learners on our Free plan can access all of our lesson content and practice exercises.
                        </div>
                    </AccordionDetails>
                    </Accordion>
                </div>

                <div className="faq-accordion-container">
                    <Accordion
                    expanded={expandedAccordion === 'panel10'}
                    onChange={handleAccordionChange('panel10')}
                    style={{
                        boxShadow: 'none',
                        border: expandedAccordion === 'panel10' ? '2px solid #458C83' : '2px solid #bbbbbb',
                        background: 'none',
                        borderRadius: '10px'
                    }}
                    >
                    <AccordionSummary style={{ padding: '10px', display: 'flex' }}>
                        <img
                        className="arrow"
                        width="20"
                        height="20"
                        src={expandedAccordion === 'panel10' ? 'https://img.icons8.com/ios-glyphs/30/458c83/forward.png' : 'https://img.icons8.com/ios-glyphs/30/bbbbbb/forward.png'}
                        alt="forward"
                        style={{ marginLeft: '10px', transform: expandedAccordion === 'panel10' ? 'rotate(90deg)' : 'none' }}
                        />
                        <span className="faq-question">How can I close/delete my Sololearn account?</span>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className="faq-accordion-details">
                        Yes. Code learning should be accessible for everyone. You can access all of CodeTech’s Course content completely free! Learners on our Free plan can access all of our lesson content and practice exercises.
                        </div>
                    </AccordionDetails>
                    </Accordion>
                </div>

                <div className="faq-accordion-container">
                    <Accordion
                    expanded={expandedAccordion === 'panel11'}
                    onChange={handleAccordionChange('panel11')}
                    style={{
                        boxShadow: 'none',
                        border: expandedAccordion === 'panel11' ? '2px solid #458C83' : '2px solid #bbbbbb',
                        background: 'none',
                        borderRadius: '10px'
                    }}
                    >
                    <AccordionSummary style={{ padding: '10px', display: 'flex' }}>
                        <img
                        className="arrow"
                        width="20"
                        height="20"
                        src={expandedAccordion === 'panel11' ? 'https://img.icons8.com/ios-glyphs/30/458c83/forward.png' : 'https://img.icons8.com/ios-glyphs/30/bbbbbb/forward.png'}
                        alt="forward"
                        style={{ marginLeft: '10px', transform: expandedAccordion === 'panel11' ? 'rotate(90deg)' : 'none' }}
                        />
                        <span className="faq-question">How do I see/change my username/name, profile picture or email?</span>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className="faq-accordion-details">
                        Yes. Code learning should be accessible for everyone. You can access all of CodeTech’s Course content completely free! Learners on our Free plan can access all of our lesson content and practice exercises.
                        </div>
                    </AccordionDetails>
                    </Accordion>
                </div>

                <div className="faq-accordion-container">
                    <Accordion
                    expanded={expandedAccordion === 'panel12'}
                    onChange={handleAccordionChange('panel12')}
                    style={{
                        boxShadow: 'none',
                        border: expandedAccordion === 'panel12' ? '2px solid #458C83' : '2px solid #bbbbbb',
                        background: 'none',
                        borderRadius: '10px'
                    }}
                    >
                    <AccordionSummary style={{ padding: '10px', display: 'flex' }}>
                        <img
                        className="arrow"
                        width="20"
                        height="20"
                        src={expandedAccordion === 'panel12' ? 'https://img.icons8.com/ios-glyphs/30/458c83/forward.png' : 'https://img.icons8.com/ios-glyphs/30/bbbbbb/forward.png'}
                        alt="forward"
                        style={{ marginLeft: '10px', transform: expandedAccordion === 'panel12' ? 'rotate(90deg)' : 'none' }}
                        />
                        <span className="faq-question">What are Achievements/badges?</span>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className="faq-accordion-details">
                        Yes. Code learning should be accessible for everyone. You can access all of CodeTech’s Course content completely free! Learners on our Free plan can access all of our lesson content and practice exercises.
                        </div>
                    </AccordionDetails>
                    </Accordion>
                </div>
                
                
                
                
            </div>
            <div className="faq-sidebar-container">
                <div className="faq-sidebar">
                    <h5>ON THIS PAGE</h5>
                    <div className="sections">
                        <ul>
                        <li className={activeSection === "description" ? "active" : ""}>
                            <a href="#description" onClick={() => handleSectionClick("description")}>Description</a>
                        </li>
                        <li className={activeSection === "abouttheapp" ? "active" : ""}>
                            <a href="#abouttheapp" onClick={() => handleSectionClick("abouttheapp")}>About the App</a>
                        </li>
                        <li className={activeSection === "others" ? "active" : ""}>
                            <a href="#others" onClick={() => handleSectionClick("others")}>Others</a>
                        </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
           <div className="hc-divider">
                    <div className="hc-divider-container">
                        <h1>Can't find what you're looking for?</h1>
                        <Button onClick={() => navigate('/submitticket')}
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

export default Faq;