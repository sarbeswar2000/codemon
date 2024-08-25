import React from "react";
import image1 from "./image/python.png";
import image2 from "./image/web.jpg";
import imag2 from "./image/people.png";
import imag3 from "./image/university.png";
import imag4 from "./image/resource.png";
import imag5 from "./image/logo.png";
import image3 from "./image/DSA.png";
const Photosection = () => {
  return (
    <>
    <div className="row #1a237e indigo darken-2 " style={{ color:"white"}}>
        <h3 className="center" style={{fontWeight:"bold"}}> How to work coding club</h3>
        <div className="container" > 
        <div class="row" style={{margin:"20px", marginTop:"40px"}}>
      <div class="col s2 center">
       <img src={imag2} style={{height:100, width:100}}/> 
       <h5>Enthusiastic people</h5>
       Give one hour a week
      </div>
      <div class="col s1 center">
      <span style={{fontSize:"70px",fontWeight:"bold"}}> +</span>

       </div>
      <div class="col s2 center"><img src={imag3} style={{height:100, width:100}}/> 
       <h5>University</h5>
       Offers space and equipment
       </div>
       <div class="col s1 center">
      <span style={{fontSize:"70px",fontWeight:"bold"}}> +</span>

       </div>
      <div class="col s2 center"><img src={imag4} style={{height:100, width:100}}/> 
      
       <h5>Free resources
       </h5>
       Projects and support from Code Club</div>
       <div class="col s1 center">
      <span style={{fontSize:"70px",fontWeight:"bold"}}> =</span>

       </div>
      <div class="col s2 center">
        <img src={imag5} style={{height:100, width:100}}/> 
      
       <h5>CodeMon</h5>
       Learn code with CodeMon</div>
      
    </div>
        </div>
      </div>

    <div className='container' >
    <div class="row">
    <h2 className="indigo-text text-darken-4 center">Courses</h2>
    <div class="col s6 m4">
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
    <div class="col s6 m4">
      <div class="card">
        <div class="card-image">
          <img src={image2}  height={200} width={400}/>
          
         
        </div>
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
        </div>
      </div>
    </div>
    <div class="col s6 m4">
      <div class="card">
        <div class="card-image">
          <img src={image3}  height={200} width={400}/>
          
         
        </div>
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
        </div>
      </div>
    </div>
  </div>
    </div>
    </>
  );
};

export default Photosection;
