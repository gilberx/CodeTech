import React from "react";
import './Register.css'

const Register = () => {
    return (
        <main>
            <img className="bg" src="/signupbg.png" alt="background" />
            <div className="regis-main">
                <div className="regis-img">
                    <img src="/signup-left.png" alt="left img" />
                </div>
                <div className="regis-content">
                    <h1>Enter your account details</h1>
                    <p>Account Information</p>
                </div>

            </div>
        </main>
    );
}

export default Register;
