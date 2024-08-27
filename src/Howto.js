import React from 'react'
import imag2 from "./Components/image/people.png";
import imag3 from "./Components/image/university.png";
import imag4 from "./Components/image/resource.png";
import imag5 from "./Components/image/logo.png";
function Howto() {
  return (
    <>
       <div className="row #263238 blue-grey darken-4 " style={{ color:"white"}}>
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
    </>
  )
}

export default Howto;
