import React, { useEffect } from "react";
import logo from "./image/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  useEffect(() => {
    // Initialize Materialize components
    const M = window.M;
    const sidenavElems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(sidenavElems, {});
  }, []);

  return (
    <nav className="nav-wrapper #263238 blue-grey darken-4">
      <div className="container">
        <a href="#!" className="brand-logo " style={{ marginRight: "5px" }}>
          <img src={logo} height={60} width={70} />

          <span>CodeMon</span>
        </a>
        <a href="#!" data-target="mobile-menu" className="sidenav-trigger">
          <i className="material-icons">menu</i>
        </a>

        <ul className="right hide-on-med-and-down">
        <li>
            {/* <a href="#photo">Resources</a> */}
            <Link to="/">Home</Link>
          </li>
          <li>
            {/* <a href="#photo">Resources</a> */}
            <Link to="/Login">Resources</Link>
          </li>

          <li>
            <a href="#services">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>

          <li>
            <a
              href="#"
              className="btn-floating btn-small blue darken-2 tooltipped"
              data-tooltip="LinkedIn"
            >
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="btn-floating btn-small green darken-2 tooltipped"
              data-tooltip="WhatsApp"
            >
              <i className="fa fa-whatsapp"></i>
            </a>
          </li>
          {/* Log-in and New Registration buttons */}
          <li>
            <button
              className="btn indigo "
              style={{ marginLeft: "10px", marginBottom: "5px" }}
            >
              <i className="fa fa-sign-in prefix"></i> LogIn
            </button>
          </li>
          <li>
            <button
              className="btn green"
              style={{ marginLeft: "10px", marginBottom: "5px" }}
            >
              <i className="fa fa-user-plus prefix"></i> SignUp
            </button>
          </li>
        </ul>

        <ul className="sidenav gray lighten-2" id="mobile-menu">
        <li>
            <a href="#photo">Home</a>
          </li>
          <li>
            <a href="#photo">Resources</a>
          </li>
          <li>
            <a href="#services">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <button
              className="btn indigo"
              style={{ marginLeft: "10px", marginBottom: "5px" }}
            >
              <i className="fa fa-sign-in prefix"></i> LogIn
            </button>
          </li>
          <li>
            <button
              className="btn green"
              style={{ marginLeft: "10px", marginBottom: "5px" }}
            >
              <i className="fa fa-user-plus prefix"></i> SignUp
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
