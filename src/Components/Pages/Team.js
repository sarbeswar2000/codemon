
import image1 from"../image/Sunil_sir.png";
import image2 from"../image/code.jpg";
import image3 from"../image/priti_mam.png";
import image4 from"../image/nitin_goyal_sir.jpeg";

import React, { useEffect } from 'react';
import ContactForm from '../ContactForm';

function Team() {
  useEffect(() => {
    const elems = document.querySelectorAll('.parallax');
    const instances = window.M.Parallax.init(elems);

    // Optional: cleanup function to destroy instances when component unmounts
    return () => {
      if (instances) {
        instances.forEach(instance => instance.destroy());
      }
    };
  }, []);
  return (
    <div>
      <div className="parallax-container white-text center" style={{height:"300px"}}>
      <div className="parallax ">
        <img src={image2} alt="Parallax Image" />
      </div>
      <h3  style={{fontWeight:"bold", marginTop:"100px"}}> Our Team in CUH Coding Club </h3>
     
      </div>
      <div className="container">
         <div className="row">  
          <h2>
            Coding Club Member 
          </h2>
          <div class="col s12">
            <div class="card-panel teal  blue-grey">
              <div class="row ">
                <div class="col s12 m3">
                  <img src={image1} alt="Image" class="circle responsive-img" style={{height:"250px", width:"300px"}}/>
                </div>
                <div class="col s12 m9">
                  <span class="white-text">
                    <h4>Sunil Kumar (Convener)</h4>
                    I am a very simple card. I am good at containing small bits of information.
                    I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
                    I am a very simple card. I am good at containing small bits of information.
                    I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
                    I am a very simple card. I am good at containing small bits of information.
                    I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="col s12">
            <div class="card-panel teal  blue-grey">
              <div class="row">
                <div class="col s12 m3">
                  <img src={image4} style={{height:"250px", width:"300px"}}alt="Image" class="circle responsive-img"/>
                </div>
                <div class="col s12 m9">
                  <span class="white-text">
                    <h4>Nitin Goyal (Member)</h4>
                    I am a very simple card. I am good at containing small bits of information.
                    I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
                    I am a very simple card. I am good at containing small bits of information.
                    I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
                    I am a very simple card. I am good at containing small bits of information.
                    I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="col s12">
            <div class="card-panel teal  blue-grey">
              <div class="row ">
                <div class="col s12 m3">
                  <img src={image3} style={{height:"250px", width:"300px"}} alt="Image" class="circle responsive-img"/>
                </div>
                <div class="col s12 m9">
                  <span class="white-text">
                  <h4>Priti Maratha (Member) </h4>
                    I am a very simple card. I am good at containing small bits of information.
                    I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
                    I am a very simple card. I am good at containing small bits of information.
                    I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
                    I am a very simple card. I am good at containing small bits of information.
                    I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
                  </span>
                </div>
              </div>
            </div>
          </div>
        
       
         </div>
      
      
          <div className="row">
          <h2>
            Coordinators 
          </h2>
          <div class="col s12 m4  ">
              <div class="card-panel teal  blue-grey">
                <span class="white-text">
                  <h5>Name</h5>
                  Msc.Data Science <br/>Batch: 2023-25
                </span>
              </div>
            </div>
            <div class="col s12 m4 ">
              <div class="card-panel teal  blue-grey">
                <span class="white-text"><h5>Name</h5>
                MCA<br/>
                Batch: 2023-25
                </span>
              </div>
            </div>
            <div class="col s12 m4 ">
              <div class="card-panel teal  blue-grey">
                <span class="white-text">
                <h5>Name</h5>
                MCA<br/>
                Batch: 2023-25
                </span>
              </div>
            
           
            </div>
          </div>
      
      <div className="row">
        <div className="col s12">
          <h2>
          Volunteers 
          </h2>
           <span style={{fontSize:"18px",fontWeight:"boldx"}}> Here is the Volunteers list (2024-25): <a href="#!"> Click</a></span>
        </div>
      </div>



      
    </div>
     
    
    </div>
  )
}

export default Team
 