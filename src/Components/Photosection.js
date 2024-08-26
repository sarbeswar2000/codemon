import React from "react";
import image1 from "./image/python.png";
import image2 from "./image/web.jpg";
import image3 from "./image/DSA.png";
import image4 from "./image/c-programming.png";
const Photosection = () => {
  return (
    <>
   

    <div >
    <div class="row">
    <h2 className="#263238 center">Courses</h2>
    <div class="col s6 m3">
      <a href="#">
      <div class="card">
        <div class="card-image">
          <img src={image1} height={200} width={400}/>
          
        
        </div>
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
        </div>
      </div>
      </a>
      
    </div>
    <div class="col s6 m3">
      <div class="card">
        <div class="card-image">
          <img src={image2}  height={200} width={400}/>
          
         
        </div>
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
        </div>
      </div>
    </div>
    <div class="col s6 m3">
      <div class="card">
        <div class="card-image">
          <img src={image3}  height={200} width={400}/>
          
         
        </div>
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
        </div>
      </div>
    </div>
    <div class="col s6 m3">
      <div class="card">
        <div class="card-image">
          <img src={image4}  height={200} width={400}/>
          
         
        </div>
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
        </div>
      </div>
    </div>
     <a class="btn  #263238 blue-grey darken-4" style={{marginLeft:"20px"}}>See More..</a>

  </div>
    </div>
    </>
  );
};

export default Photosection;
