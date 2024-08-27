
import React, { useEffect, useRef } from "react";

import logo from "./image/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const loginModalRef = useRef(null);
  const signupModalRef = useRef(null);

  useEffect(() => {
    // Initialize Materialize components
    const M = window.M;
    const sidenavElems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(sidenavElems, {});

    // Initialize the modals
    M.Modal.init(loginModalRef.current);
    M.Modal.init(signupModalRef.current);
  }, []);

  const openModal1 = () => {
    const M = window.M;
    const modalInstance = M.Modal.getInstance(loginModalRef.current);
    if (modalInstance) {
      modalInstance.open();
    }
  };

  const openModal2 = () => {
    const M = window.M;
    const modalInstance = M.Modal.getInstance(signupModalRef.current);
    if (modalInstance) {
      modalInstance.open();
    }
  };

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
            <Link to="/Resource">Resources</Link>
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
          <li>
            {/* Log-in Button */}
            <button
              className="btn indigo"
              style={{ marginLeft: "10px", marginBottom: "5px" }}
              onClick={openModal1}
            >LogIn</button>
          </li>
          <li>
            <button
              className="btn green"
              style={{ marginLeft: "10px", marginBottom: "5px" }}

              onClick={openModal2}

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

              onClick={openModal1}

            >
              <i className="fa fa-sign-in prefix"></i> LogIn
            </button>
          </li>
          <li>
            <button
              className="btn green"
              style={{ marginLeft: "10px", marginBottom: "5px" }}
              onClick={openModal2}

            >
              <i className="fa fa-user-plus prefix"></i> SignUp
            </button>
          </li>
        </ul>

        {/* Modal Structure for LogIn */}
        <div ref={loginModalRef} id="modal1" className="modal text-darken-2">
          <div className="modal-content blue-text text-darken-2 ">
            <form>
              <div className="input-field">
                <input id="email" type="email" className="validate" required />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field">
                <input
                  id="password"
                  type="password"
                  className="validate"
                  required
                />
                <label htmlFor="password">Password</label>
              </div>
              <button type="submit" className="waves-effect waves-light btn">
                Login
              </button>
            </form>
          </div>
          <div className="modal-footer">
            <a
              href="#!"
              className="modal-close waves-effect waves-green btn-flat"
            >
              Agree
            </a>
          </div>
        </div>

        {/* Modal Structure for SignUp */}
        <div ref={signupModalRef} id="modal12" className="modal text-darken-2">
          <div className="modal-content blue-text text-darken-2 ">
            <form>
              <div className="input-field">
                <input
                  id="signup-name"
                  type="text"
                  className="validate"
                  required
                />
                <label htmlFor="signup-name">Name</label>
              </div>
              <div className="input-field">
                <input
                  id="signup-email"
                  type="email"
                  className="validate"
                  required
                />
                <label htmlFor="signup-email">Email</label>
              </div>
              <div className="input-field">
                <input
                  id="signup-course"
                  type="text"
                  className="validate"
                  required
                />
                <label htmlFor="signup-course">Course</label>
              </div>
              <div className="input-field">
                <input
                  id="signup-rollno"
                  type="text"
                  className="validate"
                  required
                />
                <label htmlFor="signup-rollno">Rollno</label>
              </div>
              <div className="input-field">
                <input
                  id="signup-telephone"
                  type="tel"
                  className="validate"
                  required
                />
                <label htmlFor="signup-telephone">Telephone</label>
              </div>
              <div className="input-field">
                <input
                  id="signup-password"
                  type="password"
                  className="validate"
                  required
                />
                <label htmlFor="signup-password">Password</label>
              </div>
              <button type="submit" className="waves-effect waves-light btn">
                SignUp
              </button>
            </form>
          </div>
          <div className="modal-footer">
            <a
              href="#!"
              className="modal-close waves-effect waves-green btn-flat"
            >
              Agree
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
