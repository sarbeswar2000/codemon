import React from 'react'
import "./JoinClube.css";
import img from "./image/training.jpg";
import img1 from "./image/free_traning.jpg";
import img2 from "./image/event.jpg";
import img3 from "./image/help.jpg";
function JoinClub() {
  return (
    <div className='container '>
      <div className='row center'>
        <h2 style={{color:"#263238", fontWeight:"bold"}}>Join Our Club community</h2>
        <div className='col s12 m6 offset-m2 l6 '>
        <div className="card">
          <div className="card-image">
            <img src={img} />
          </div>
          <div className="card-content #263238 blue-grey darken-4 white-text" >
            <p>
            Join our coding club to collaborate on exciting projects, sharpen your coding skills, and learn from fellow enthusiasts. Be part of a supportive and creative community!</p>
          </div>
          
      </div>
        </div>
        <div className='col s12 m6 '>
        <div className="card-panel col s12 box1" style={{ display: "flex", alignItems: "center" }}>
          <div className="col s4" style={{ display: "flex", justifyContent: "center" }}>
            <img src={img1} alt="" className="responsive-img" style={{ maxWidth: "100%", height: "125px" }} />
          </div>
          <div className="col s8">
            <h6 style={{ fontWeight: "bold" }}>Free Training</h6>
            <span className="black-text">
             Learn how to run a coding club - wherever you are
            </span>
          </div>
        </div>
        <div className="card-panel col s12 box1" style={{ display: "flex", alignItems: "center" }}>
          <div className="col s4" style={{ display: "flex", justifyContent: "center" }}>
            <img src={img2} alt="" className="responsive-img" style={{ maxWidth: "100%", height: "125px" }} />
          </div>
          <div className="col s8">
            <h6 style={{ fontWeight: "bold" }}>Events</h6>
            <span className="black-text">
              Meet the community at our free meetups and training events
            </span>
          </div>
        </div>

        <div className="card-panel col s12 box1" style={{ display: "flex", alignItems: "center" }}>
          <div className="col s4" style={{ display: "flex", justifyContent: "center" }}>
            <img src={img3} alt="" className="responsive-img" style={{ maxWidth: "100%", height: "125px" }} />
          </div>
          <div className="col s8">
            <h6 style={{ fontWeight: "bold" }}>Helps</h6>
            <span className="black-text">
              FAQs, guidees & everything you ever wanted to know  about Coding Club.
            </span>
          </div>
        </div> 
        </div>
      </div>
    </div>
  )
}

export default JoinClub;
