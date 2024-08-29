import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
            {!isOtpSent ? (
                <form onSubmit={handleSignupSubmit}>
                    <div className="input-field">
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
                        <input
                            id="signup-telephone"
                            type="tel"
                            className="validate"
                            value={telephone}
                            onChange={(e) => setTelephone(e.target.value)}
                            required
                        />
                        <label htmlFor="signup-telephone">Telephone</label>
                    </div>
                    <div className="input-field">
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
                    <button type="submit" className="waves-effect waves-light btn">
                        SignUp
                    </button>
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
                    <button type="submit" className="waves-effect waves-light btn">
                        Verify OTP
                    </button>
                </form>
            )}
        </div>
    );
};

export default Signup;
