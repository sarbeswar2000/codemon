import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import img1 from "./image/Signup-bro.png";
import { Link } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [rollno, setRollno] = useState("");
  const [telephone, setTelephone] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState(""); // State for OTP
  const [isOtpSent, setIsOtpSent] = useState(false); // State to show OTP form
  const [isLoading, setIsLoading] = useState(false); // State for loading spinner
  const navigate = useNavigate();
  const host = "http://localhost:3000"; // Backend URL

  // Signup form submission
  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Show loading spinner

    try {
      // Save email in localStorage
      localStorage.setItem("email", email);

      // Call the backend API to initiate the signup process
      const response = await fetch(`${host}/Auth/createuser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          course,
          rollno,
          telephone,
          password,
        }),
      });

      // Handle non-200 response codes
      if (!response.ok) {
        throw new Error("Signup request failed.");
      }

      const data = await response.json();

      if (data.success) {
        setIsOtpSent(true);
        alert("Signup successful. OTP sent to your email.");
      } else {
        alert("Error: " + (data.errors || "Signup failed"));
      }
    } catch (error) {
      console.error(error.message);
      alert(error);
    } finally {
      setIsLoading(false); // Hide loading spinner
    }
  };

  // OTP form submission
  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Show loading spinner

    try {
      const email = localStorage.getItem("email");

      // Call the backend API to verify the OTP
      const response = await fetch(`${host}/Auth/verifyotp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, otp }),
      });

      // Handle non-200 response codes
      if (!response.ok) {
        throw new Error("OTP verification request failed.");
      }

      const data = await response.json();

      if (data.success) {
        alert("OTP verified successfully!");
        navigate("/Login");
      } else {
        alert("Error: " + (data.errors || "OTP verification failed"));
      }
    } catch (error) {
      console.error(error.message);
      alert("Error occurred during OTP verification. Please try again.");
    } finally {
      setIsLoading(false); // Hide loading spinner
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m6">
          <img
            src={img1}
            height={500}
            width={500}
            className="responsive-img"
            style={{ padding: "20px", marginTop: "20px", paddingRight: "30px" }}
            alt="Signup"
          />
        </div>
        <div className="col s12 m6">
          {!isOtpSent ? (
            <form onSubmit={handleSignupSubmit} className="center">
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
                <label htmlFor="signup-password">Create Password</label>
              </div>

              {/* Show loading spinner if API request is in progress */}
              {isLoading ? (
                <div className="preloader-wrapper small active">
                  <div className="spinner-layer spinner-blue-only">
                    <div className="circle-clipper left">
                      <div className="circle"></div>
                    </div>
                    <div className="gap-patch">
                      <div className="circle"></div>
                    </div>
                    <div className="circle-clipper right">
                      <div className="circle"></div>
                    </div>
                  </div>
                </div>
              ) : (
                <button type="submit" className="btn blue-grey darken-4">
                  Sign Up
                </button>
              )}

              <div style={{ padding: "12px" }}>
                Do you already have an account?
                <Link to="/Login" className="forgot-password-link blue-text">
                  Log In
                </Link>
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

              {isLoading ? (
                <div className="preloader-wrapper small active">
                  <div className="spinner-layer spinner-blue-only">
                    <div className="circle-clipper left">
                      <div className="circle"></div>
                    </div>
                    <div className="gap-patch">
                      <div className="circle"></div>
                    </div>
                    <div className="circle-clipper right">
                      <div className="circle"></div>
                    </div>
                  </div>
                </div>
              ) : (
                <button type="submit" className="btn blue-grey darken-4">
                  Verify OTP
                </button>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signup;
