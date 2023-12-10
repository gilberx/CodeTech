/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import './AboutUs.css';

function AboutUs() {
    let message = `There are many variations of passages of CodeTech available but the \n majority have suffered alteration in some injected humour.`;

    return (
        <section className="section-white">
            <div className="header-container3">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h2 className="section-title">The Team Behind CodeTech</h2>
                        <p className="section-subtitle">{message}</p>
                    </div>
                </div>
                <div className="container">
                    <div className="col-sm-6 col-md-4">
                        <div className="team-item">
                            <img src="Inting.png" className="team-img" alt="pic" />
                            <h3>KIMBERLY A. INTING</h3>
                            <div className="team-info"><p>Head of CodeTech / Developer</p></div>
                            <p className="info">Meet Kim, a dedicated and aspiring developer currently pursuing a Bachelor of Science in Information Technology at Cebu Institute of Technology-University. As a third-year student, she is passionate about exploring the dynamic world of technology and honing her skills in software development.</p>
                            <ul className="team-icon">
                                <li>
                                    <a href="https://twitter.com" className="twitter" target="_blank" rel="noopener noreferrer">
                                        <img src="twitterlogo.png" alt="Twitter" className="twitterlogo" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://facebook.com" className="facebook" target="_blank" rel="noopener noreferrer">
                                        <img src="facebooklogo.png" alt="Facebook" className="facebooklogo" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://instagram.com" className="instagram" target="_blank" rel="noopener noreferrer">
                                        <img src="instagramlogo.png" alt="instgram" className="instagramlogo" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <div className="team-item">
                            <img src="Xianna.png" className="team-img" alt="pic" />
                            <h3>XIANNA ANDREI CABAÑA</h3>
                            <div className="team-info"><p>Back-end Developer</p></div>
                            <p className="info">Meet Xianna, a dedicated and aspiring developer currently pursuing a Bachelor of Science in Information Technology at Cebu Institute of Technology-University. As a third-year student, she is passionate about exploring the dynamic world of technology and honing her skills in software development.</p>
                            <ul className="team-icon">
                                <li>
                                    <a href="https://twitter.com" className="twitter" target="_blank" rel="noopener noreferrer">
                                        <img src="twitterlogo.png" alt="Twitter" className="twitterlogo" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://facebook.com" className="facebook" target="_blank" rel="noopener noreferrer">
                                        <img src="facebooklogo.png" alt="Facebook" className="facebooklogo" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://instagram.com" className="instagram" target="_blank" rel="noopener noreferrer">
                                        <img src="instagramlogo.png" alt="instgram" className="instagramlogo" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <div className="team-item">
                            <img src="gilbert.png" className="team-img" alt="pic" />
                            <h3>GILBERT R. CAÑEDO JR.</h3>
                            <div className="team-info"><p>Front-end Developer</p></div>
                            <p className="info">Meet Gilbert, a dedicated and aspiring developer currently pursuing a Bachelor of Science in Information Technology at Cebu Institute of Technology-University. As a third-year student, he is passionate about exploring the dynamic world of technology and honing his skills in software development.</p>
                            <ul className="team-icon">
                                <li>
                                    <a href="https://twitter.com" className="twitter" target="_blank" rel="noopener noreferrer">
                                        <img src="twitterlogo.png" alt="Twitter" className="twitterlogo" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://facebook.com" className="facebook" target="_blank" rel="noopener noreferrer">
                                        <img src="facebooklogo.png" alt="Facebook" className="facebooklogo" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://instagram.com" className="instagram" target="_blank" rel="noopener noreferrer">
                                        <img src="instagramlogo.png" alt="instgram" className="instagramlogo" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <div className="team-item">
                            <img src="Chris.png" className="team-img" alt="pic" />
                            <h3>CHRIS MARKLEN FERNANDEZ</h3>
                            <div className="team-info"><p>System Architect</p></div>
                            <p className="info">Meet Chris, a dedicated and aspiring developer currently pursuing a Bachelor of Science in Information Technology at Cebu Institute of Technology-University. As a third-year student, he is passionate about exploring the dynamic world of technology and honing his skills in software development.</p>
                            <ul className="team-icon">
                                <li>
                                    <a href="https://twitter.com" className="twitter" target="_blank" rel="noopener noreferrer">
                                        <img src="twitterlogo.png" alt="Twitter" className="twitterlogo" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://facebook.com" className="facebook" target="_blank" rel="noopener noreferrer">
                                        <img src="facebooklogo.png" alt="Facebook" className="facebooklogo" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://instagram.com" className="instagram" target="_blank" rel="noopener noreferrer">
                                        <img src="instagramlogo.png" alt="instgram" className="instagramlogo" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;
