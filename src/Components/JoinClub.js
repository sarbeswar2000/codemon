import React from 'react'
import "./JoinClube.css";
import img from "./image/training.jpg";
function JoinClub() {
  return (
    <div className='container '>
      <div className='row center'>
        <h2 style={{color:"#263238", fontWeight:"bold"}}>Join Our Club community</h2>
        <div className='col s12 m6 offset-m2 l6 '>
        <div class="card">
          <div class="card-image">
            <img src={img} />
          </div>
          <div class="card-content #263238 blue-grey darken-4 white-text" >
            <p>I am a very simple card. I am good at containing small bits of information.
            I am convenient because I require little markup to use effectively.</p>
          </div>
          
      </div>
        </div>
        <div className='col s12 m6 '>
        <div className="card-panel col s12 box1" style={{ display: "flex", alignItems: "center" }}>
          <div className="col s4" style={{ display: "flex", justifyContent: "center" }}>
            <img src={img} alt="" className="responsive-img" style={{ maxWidth: "100%", height: "auto" }} />
          </div>
          <div className="col s8">
            <h6 style={{ fontWeight: "bold" }}>Free Training</h6>
            <span className="black-text">
              This is a square image. Add the "circle" class to it to make it appear circular.
            </span>
          </div>
        </div>
        <div className="card-panel col s12 box1" style={{ display: "flex", alignItems: "center" }}>
          <div className="col s4" style={{ display: "flex", justifyContent: "center" }}>
            <img src={img} alt="" className="responsive-img" style={{ maxWidth: "100%", height: "auto" }} />
          </div>
          <div className="col s8">
            <h6 style={{ fontWeight: "bold" }}>Events</h6>
            <span className="black-text">
              This is a square image. Add the "circle" class to it to make it appear circular.
            </span>
          </div>
        </div>

        <div className="card-panel col s12 box1" style={{ display: "flex", alignItems: "center" }}>
          <div className="col s4" style={{ display: "flex", justifyContent: "center" }}>
            <img src={img} alt="" className="responsive-img" style={{ maxWidth: "100%", height: "auto" }} />
          </div>
          <div className="col s8">
            <h6 style={{ fontWeight: "bold" }}>Helps</h6>
            <span className="black-text">
              This is a square image. Add the "circle" class to it to make it appear circular.
            </span>
          </div>
        </div>

       
        
        </div>
      </div>
      
    </div>
  )
}

export default JoinClub;
