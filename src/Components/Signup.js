import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from "./image/Signup-bro.png";

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [course, setCourse] = useState('');
    const [rollno, setRollno] = useState('');
    const [telephone, setTelephone] = useState('');
    const [password, setPassword] = useState('');
    const [otp, setOtp] = useState(''); // State for OTP
    const [isOtpSent, setIsOtpSent] = useState(false); // State to show OTP form
    const navigate = useNavigate();
    const host = "http://localhost:3000";

    const handleSignupSubmit = async (e) => {
        e.preventDefault();

        // Save email in localStorage
        localStorage.setItem('email', email);

        // Call the backend API to initiate the signup process
        const response = await fetch(`${host}/Auth/createuser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, course, rollno, telephone, password }),
        });

        const data = await response.json();

        if (data.success) {
            // Set the state to show the OTP form
            setIsOtpSent(true);
            alert("Signup successful. OTP sent to your email.");
        } else {
            console.error(data.errors);
            alert("Error occurred during signup.");
        }
    };

    const handleOtpSubmit = async (e) => {
        e.preventDefault();

        // Get the email from localStorage
        const email = localStorage.getItem('email');

        // Call the backend API to verify the OTP
        const response = await fetch(`${host}/Auth/verifyotp`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, otp }),
        });

        const data = await response.json();

        if (data.success) {
            alert("OTP verified successfully!");
             navigate('/Login');
        } else {
            console.error(data.errors);
            alert("OTP verification failed.");
        }
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='col s12 m6' > 
                    
                <img src={img1} height={500} width={500} style={{padding:"20px",marginTop:"20px", paddingRight:"30px"}}/>
                </div>
                <div className='col s12 m6'>
                {!isOtpSent ? (
                   
                <form onSubmit={handleSignupSubmit} className='center'>
                     <h4>Create an account </h4>
                    <div className="input-field">
                    <i className="material-icons prefix">person</i>
                        <input
                            id="signup-name"
                            type="text"
                            className="validate"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <label htmlFor="signup-name">Name</label>
                    </div>
                    <div className="input-field">
                    <i className="material-icons prefix">email</i>
                        <input
                            id="signup-email"
                            type="email"
                            className="validate"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <label htmlFor="signup-email">Email</label>
                    </div>
                    <div className="input-field">
                    <i className="material-icons prefix">account_balance</i>
                        <input
                            id="signup-course"
                            type="text"
                            className="validate"
                            value={course}
                            onChange={(e) => setCourse(e.target.value)}
                            required
                        />
                        <label htmlFor="signup-course">Course</label>
                    </div>
                    <div className="input-field">
                    <i className="material-icons prefix">edit</i>
                        <input
                            id="signup-rollno"
                            type="text"
                            className="validate"
                            value={rollno}
                            onChange={(e) => setRollno(e.target.value)}
                            required
                        />
                        <label htmlFor="signup-rollno">Roll No</label>
                    </div>
                    <div className="input-field">
                    <i className="material-icons prefix">phone</i>
                        <input
                            id="signup-telephone"
                            type="tel"
                            className="validate"
                            value={telephone}
                            onChange={(e) => setTelephone(e.target.value)}
                            required
                        />
                        <label htmlFor="signup-telephone">Phone</label>
                    </div>
                    <div className="input-field">
                    <i className="material-icons prefix">lock</i>
                        <input
                            id="signup-password"
                            type="password"
                            className="validate"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <label htmlFor="signup-password">Password</label>
                    </div>
                    <button type="submit" className=" btn blue-grey darken-4">
                        SignUp
                    </button>
                   
                    <div style={{padding:"12px"}}>
                        Do you already have an account ?
                        <a href='#' className='blue-text'> LogIn</a>
                    </div>
                </form>
            ) : (
                <form onSubmit={handleOtpSubmit}>
                    <div className="input-field">
                    
                        <input
                            id="otp"
                            type="text"
                            className="validate"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            required
                        />
                        <label htmlFor="otp">Enter OTP</label>
                    </div>
                    <button type="submit" className="btn blue-grey darken-4">
                        Verify OTP
                    </button>
                </form>
            )}    
                 </div>
            </div>
           
        </div>
    );
};

export default Signup;
