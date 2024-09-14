import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./image/CCClogo.png";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ userName, setUserName }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const M = window.M;
    const sidenavElems = document.querySelectorAll(".sidenav");
    const tooltipElems = document.querySelectorAll(".tooltipped");
    M.Sidenav.init(sidenavElems, {});
    M.Tooltip.init(tooltipElems, {});
  }, []);

  const handleClose = () => {
    const M = window.M;
    const elem = document.querySelector(".sidenav");
    const instance = M.Sidenav.getInstance(elem);
    if (instance) {
      instance.close();
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("authToken");
    setUserName("");
    handleClose();
    navigate("/Login");
  };

  const handleResourceAccess = (e) => {
    if (!userName) {
      e.preventDefault(); // Prevent navigation
      alert("You must be logged in to access the Resources page.");
      navigate("/Login");
    }
  };

  return (
    <nav className="nav-wrapper #263238 blue-grey darken-4">
      <div>
        <a
          href="#!"
          className="brand-logo responsive-img"
          style={{ display: "flex", alignItems: "center", marginRight: "5px" }}
        >
          <img src={logo} alt="Logo" height={60} width={70} style={{ marginRight: "10px", marginLeft:"20px" }} />
          <span style={{ fontSize: "30px", fontWeight: "bold" }}>CUH Coding Club</span>
        </a>

        <a href="#!" data-target="mobile-menu" className="sidenav-trigger">
          <i className="material-icons">menu</i>
        </a>

        <ul className="right hide-on-med-and-down">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Resource" onClick={handleResourceAccess}>Resources</Link>
          </li>
          <li>
            <Link to="/Team">Team</Link>
          </li>
          <li>
          <Link to="/ContactForm" onClick={handleClose}>
              Contact
            </Link>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/company/coding-club-cuh/"
              className="btn-floating btn-small blue darken-2 tooltipped"
              data-tooltip="LinkedIn"
            >
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              href="https://chat.whatsapp.com/LC7TMaZYPxxC1iKSvaPWqP"
              className="btn-floating btn-small green darken-2 tooltipped"
              data-tooltip="WhatsApp"
            >
              <i className="fa fa-whatsapp"></i>
            </a>
          </li>
          {userName ? (
            <>
              <li>
                <span style={{ color: "red" }}>Hello, {userName}!</span>
              </li>
              <li>
                <button
                  className="btn red white-text"
                  style={{ marginLeft: "10px", marginBottom: "5px" ,marginRight:"10px" }}
                  onClick={handleLogout}
                >
                  <i className="fa fa-sign-out prefix"></i> LogOut
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/Login">
                  <button
                    className="btn indigo"
                    style={{ marginLeft: "10px", marginBottom: "5px" }}
                  >
                    <i className="fa fa-sign-in prefix"></i> LogIn
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/Signup">
                  <button
                    className="btn green"
                    style={{ marginLeft: "10px", marginBottom: "5px" }}
                  >
                    <i className="fa fa-user-plus prefix"></i> SignUp
                  </button>
                </Link>
              </li>
            </>
          )}
        </ul>

        {/* sidenav starts here */}
        <ul className="sidenav gray lighten-2" id="mobile-menu">
          <li>
            <Link to="/" onClick={handleClose}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/Resource" onClick={handleResourceAccess}>
              Resources
            </Link>
          </li>
          <li>
            <Link to="/Team" onClick={handleClose}>
              Team
            </Link>
          </li>
          <li>
          <Link to="/ContactForm" onClick={handleClose}>
              Contact
            </Link>
          </li>
         
          {userName ? (
            <>
              <li>
                <span style={{ color: "red" }}>Hello, {userName}!</span>
              </li>
              <li>
                <button
                  className="btn red white-text"
                  style={{ marginLeft: "10px", marginBottom: "5px" }}
                  onClick={handleLogout}
                >
                  <i className="fa fa-sign-out prefix"></i> Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/Login" onClick={handleClose}>
                  <button
                    className="btn indigo"
                    style={{ marginLeft: "10px", marginBottom: "5px" }}
                  >
                    <i className="fa fa-sign-in prefix"></i> LogIn
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/Signup" onClick={handleClose}>
                  <button
                    className="btn green"
                    style={{ marginLeft: "10px", marginBottom: "5px" }}
                  >
                    <i className="fa fa-user-plus prefix"></i> SignUp
                  </button>
                </Link>
              </li>
            </>
          )}
          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
