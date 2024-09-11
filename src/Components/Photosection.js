import React from "react";
import { useNavigate } from "react-router-dom";
import image1 from "./image/python.png";
import image2 from "./image/HTML.png";
import image3 from "./image/DSA.png";
import image4 from "./image/c-programming.png";
import { Link } from "react-router-dom";
import "./Photosection.css";
const Photosection = () => {
  const navigate = useNavigate();
  const userName = localStorage.getItem("userName");
  const handleSeeMoreClick = (e) => {
    if (userName) {
      // User is logged in, redirect to Resources page
      navigate("/Resource");
    } else {
      // User is not logged in, show alert and redirect to Login page
      e.preventDefault();
      alert("You must be logged in to access more resources.");
      navigate("/Login");
    }
  };
  return (
    <>
      <div>
        <div className="row">
          <h2 className="blue-grey-text center" style={{ fontWeight: "bold" }}>
            Courses
          </h2>
          <div className="col s6 m3">
            <a href="#">
              <div className="card">
                <div className="card-image">
                  <img src={image1} height={200} width={400} />
                </div>
                <div className="card-content #263238 blue-grey darken-4 white-text">
                  <p>
                    Python is commonly used for developing websites and
                    software, task automation, data analysis, and data
                    visualization.
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="col s6 m3">
            <div className="card">
              <div className="card-image">
                <img src={image2} height={200} width={400} />
              </div>
              <div className="card-content blue-grey darken-4 white-text">
                <p>
                  Web development refers to the tasks associated with creating,
                  building, and maintaining websites and web applications.
                </p>
              </div>
            </div>
          </div>
          <div className="col s6 m3">
            <div className="card">
              <div className="card-image">
                <img src={image3} height={200} width={400} />
              </div>
              <div className="card-content  blue-grey darken-4 white-text">
                <p>
                  Data Structures and Algorithms (DSA) is a fundamental part of
                  Computer Science that teaches systematic problem-solving.
                </p>
              </div>
            </div>
          </div>
          <div className="col s6 m3">
            <div className="card">
              <div className="card-image">
                <img src={image4} height={200} width={400} />
              </div>
              <div className="card-content  blue-grey darken-4 white-text">
                <p>
                  C is a general-purpose computer programming language for
                  system administration, network programming, and embedded
                  software.
                </p>
              </div>
            </div>
          </div>
          <button
            className="btn #263238 blue-grey darken-4 red-text"
            style={{ marginLeft: "20px", fontWeight: "bold" }}
            onClick={handleSeeMoreClick}
          >
            See More..
          </button>
        </div>
      </div>
    </>
  );
};

export default Photosection;
