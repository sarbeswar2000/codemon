import React from "react";
import image1 from "./image/python.png";
import image2 from "./image/HTML.png";
import image3 from "./image/DSA.png";
import image4 from "./image/c-programming.png";
import { Link } from "react-router-dom";
import "./Photosection.css";
const Photosection = () => {
  return (
    <>
    <div >
    <div class="row">
    <h2 className="blue-grey-text center" style={{fontWeight:"bold"}}>Courses</h2>
    <div class="col s6 m3">
      <a href="#">
      <div class="card" >
        <div class="card-image">
          <img src={image1} height={200} width={400}/>
          
        
        </div>
        <div class="card-content #263238 blue-grey darken-4 white-text">
          <p>Python is commonly used for developing websites and software, task automation, data analysis,
            and data visualization.</p>
        </div>
      </div>
      </a>
      
    </div>
    <div class="col s6 m3">
      <div class="card">
        <div class="card-image">
          <img src={image2}  height={200} width={400}/>
          
         
        </div>
        <div class="card-content blue-grey darken-4 white-text">
          <p>Web development refers to the tasks associated with creating, building, and maintaining websites and web applications.</p>
        </div>
      </div>
    </div>
    <div class="col s6 m3">
      <div class="card">
        <div class="card-image">
          <img src={image3}  height={200} width={400}/>
          
         
        </div>
        <div class="card-content  blue-grey darken-4 white-text">
          <p>Data Structures and Algorithms (DSA) is a fundamental part of Computer Science that teaches systematic problem-solving.</p>
        </div>
      </div>
    </div>
    <div class="col s6 m3">
      <div class="card">
        <div class="card-image">
          <img src={image4}  height={200} width={400}/>
          
         
        </div>
        <div class="card-content  blue-grey darken-4 white-text">
          <p>C is a general-purpose computer programming language for system administration, network programming, and embedded software.</p>
        </div>
      </div>
    </div>
    <Link to="/Login" class="btn #263238 blue-grey darken-4 red-text " style={{marginLeft:"20px", fontWeight:"bold"}}>See More..</Link>
     {/* <a class="btn  #263238 blue-grey darken-4" style={{marginLeft:"20px"}}>See More..</a> */}

  </div>
    </div>
    </>
  );
};

export default Photosection;
