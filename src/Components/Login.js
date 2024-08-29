// ... existing imports
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setUserName }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [forgot, setForgot] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState(""); // To display error messages
  const [success, setSuccess] = useState(""); // To display success messages
  const navigate = useNavigate();
  const host = "http://localhost:3000";

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${host}/Auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        localStorage.setItem("authToken", data.authToken);
        localStorage.setItem("userName", data.name);
        setUserName(data.name);
        navigate("/");
        setSuccess(`Hello ${data.name}, welcome to the Coding Club!`);
      } else {
        setError("Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("An error occurred during login. Please try again.");
    }
  };

  const handleOnForgot = () => setForgot(true);

  const handleOnForgotSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${host}/Auth/forgetpassword`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setOtpSent(true);
        setSuccess("Reset password OTP sent to your email");
      } else {
        setError("Password reset failed");
      }
    } catch (error) {
      console.error("Forgot password error:", error);
      setError("An error occurred during password reset. Please try again.");
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${host}/Auth/resetpassword`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, otp, newPassword }),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setSuccess("Password has been reset successfully");
        navigate("/");
      } else {
        setError("OTP validation failed");
      }
    } catch (error) {
      console.error("OTP validation error:", error);
      setError("An error occurred during OTP validation. Please try again.");
    }
  };

  return (
    <div className="container">
      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">{success}</div>}
      {!forgot ? (
        <>
          <form onSubmit={handleSubmit}>
            <div className="input-field">
              <input
                id="email"
                type="email"
                className="validate"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-field">
              <input
                id="password"
                type="password"
                className="validate"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label htmlFor="password">Password</label>
            </div>
            <button type="submit" className="waves-effect waves-light btn">
              Login
            </button>
          </form>
          <div className="forgot-password-link" onClick={handleOnForgot}>
            Forgot Password
          </div>
        </>
      ) : otpSent ? (
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
          <div className="input-field">
            <input
              id="newPassword"
              type="password"
              className="validate"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
            <label htmlFor="newPassword">New Password</label>
          </div>
          <button type="submit" className="waves-effect waves-light btn">
            Reset Password
          </button>
        </form>
      ) : (
        <form onSubmit={handleOnForgotSubmit}>
          <div className="input-field">
            <input
              id="email"
              type="email"
              className="validate"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="email">Email</label>
          </div>
          <button type="submit" className="waves-effect waves-light btn">
            Reset your password
          </button>
        </form>
      )}
    </div>
  );
};

export default Login;
