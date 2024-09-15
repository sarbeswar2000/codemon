import React from 'react'
import imag2 from "./image/people.png";
import imag3 from "./image/university.png";
import imag4 from "./image/resource.png";
import imag5 from "./image/CCCblack.png";
function Howto() {
  return (
    <>
        
       <div className="row " style={{ color:"#263238"}}>
        <h4 className="center" style={{fontWeight:"bold"}}> How to work our club</h4>
        <div style={{marginLeft:"40px"}} > 
        <div className="row" style={{marginTop:"50px"}}>
      <div className="col s12 l2 center">
       <img src={imag2} style={{height:70, width:70}}/> 
       <h6 style={{fontWeight:"bold"}}>Enthusiastic people</h6>
       Give one hour a week
      </div>
      <div className="col s12 l1 center">
      <span style={{fontSize:"50px",fontWeight:"bold"}}> +</span>

       </div>
      <div className="col s12 l2 center"><img src={imag3} style={{height:70, width:70}}/> 
       <h6  style={{fontWeight:"bold"}}>University</h6>
       Offers space and equipment
       </div>
       <div className="col s12 l1 center">
      <span style={{fontSize:"50px",fontWeight:"bold"}}> +</span>

       </div>
      <div className="col s12 l2 center"><img src={imag4} style={{height:70, width:70}}/> 
      
       <h6  style={{fontWeight:"bold"}}>Free resources
       </h6>
       Projects and support from Code Club</div>
       <div className="col s12 l1 center">
      <span style={{fontSize:"50px",fontWeight:"bold"}}> =</span>

       </div>
      <div className="col s12 l2 center">
        <img src={imag5} style={{height:80, width:170}}/> 
      
       <h6  style={{fontWeight:"bold"}}>CUH Coding Club</h6>
       Learn code with us</div>
      
    </div>
        </div>
      </div>
    </>
  )
}

export default Howto;
