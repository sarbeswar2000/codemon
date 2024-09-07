
import React, { useEffect } from 'react';
import "./ServiceSection.css"
import M from 'materialize-css';
import PhotoGallery from './Pages/PhotoGallery';

const ServicesSection = () => {
  
  return (
    <section className=" section scrollspy " id="services">
      <div className="row" style={{padding:"10px"}}>
        <div className="col s12 l6  news" >
        <h3 className="blue-grey-text center">News & Events</h3>
        
            <div class="scroll  "  style={{margin:"10px"}}>
            <ul style={{lineHeight:"300%"  }}>
              <li > <a href='#'>
                <h6 style={{fontWeight:"bold"}}>Hello this is the link of 1st event nkhshdhohSSHDDHks nksahhod SJHOJH sjhdoS DK scoJSJK sojbd it is only test type templete and this is semple (Date-28/01/24)</h6>
                </a></li>
                <li > <a href='#'>
                <h6 style={{fontWeight:"bold"}}>Hello this is the link of 1st event(Date-28/01/24)</h6>
                </a></li> 
                <li > <a href='#'>
                <h6 style={{fontWeight:"bold"}}>Hello this is the link of 1st event(Date-28/01/24)</h6>
                </a></li> <li > <a href='#'>
                <h6 style={{fontWeight:"bold"}}>Hello this is the link of 1st event(Date-28/01/24)</h6>
                </a></li> <li > <a href='#'>
                <h6 style={{fontWeight:"bold"}}>Hello this is the link of 1st event(Date-28/01/24)</h6>
                </a></li>
              
            </ul>
             
              </div> 
          
        
        </div>
        <div className="col s12 l5 offset-l1" >
        <h3 className="blue-grey-text center">Photo Gallery</h3>
           <PhotoGallery/>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
