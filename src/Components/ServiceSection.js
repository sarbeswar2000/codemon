
import React, { useEffect } from 'react';
import "./ServiceSection.css"
import M from 'materialize-css';
import img1 from "./image/e.jpg";
import img2 from "./image/f.jpg";
import img3 from "./image/h.jpg";
import img4 from "./image/hd1.jpg";
import img5 from "./image/hd2.jpg";

const ServicesSection = () => {
  useEffect(() => {
    const elems = document.querySelectorAll('.carousel');
    const instances = M.Carousel.init(elems, {
      // Your options here
    });
    
    // Cleanup to destroy the instances when the component unmounts
    return () => {
      instances.forEach(instance => instance.destroy());
    };
  }, []);
  return (
    <section className=" container section scrollspy " id="services">
      <div className="row">
        <div className="col s12 l6  news">
        <h3 className="blue-grey-text center">News & Events</h3>
        
            <div class="scroll  "  style={{margin:"10px"}}>
            <ul style={{lineHeight:"300%"  }}>
              <li > <a href='#'>
                <h6 style={{fontWeight:"bold"}}>Hello this is the link of 1st event nkhshdhohSSHDDHks nksahhod SJHOJH sjhdoS DK scoJSJK sojbd it is only test type templete and this is semple (Date-28/01/24)</h6>
                </a></li>
                <li > <a href='#'>
                <h6 style={{fontWeight:"bold"}}>Hello this is the link of 1st event(Date-28/01/24)</h6>
                </a></li> <li > <a href='#'>
                <h6 style={{fontWeight:"bold"}}>Hello this is the link of 1st event(Date-28/01/24)</h6>
                </a></li> <li > <a href='#'>
                <h6 style={{fontWeight:"bold"}}>Hello this is the link of 1st event(Date-28/01/24)</h6>
                </a></li> <li > <a href='#'>
                <h6 style={{fontWeight:"bold"}}>Hello this is the link of 1st event(Date-28/01/24)</h6>
                </a></li>
                <li > <a href='#'>
                <h6 style={{fontWeight:"bold"}}>Hello this is the link of 1st event(Date-28/01/24)</h6>
                </a></li> <li > <a href='#'>
                <h6 style={{fontWeight:"bold"}}>Hello this is the link of 1st event(Date-28/01/24)</h6>
                </a></li> <li > <a href='#'>
                <h6 style={{fontWeight:"bold"}}>Hello this is the link of 1st event(Date-28/01/24)</h6>
                </a></li>
                <li > <a href='#'>
                <h6 style={{fontWeight:"bold"}}>Hello this is the link of 1st event(Date-28/01/24)</h6>
                </a></li> <li > <a href='#'>
                <h6 style={{fontWeight:"bold"}}>Hello this is the link of 1st event(Date-28/01/24)</h6>
                </a></li> <li > <a href='#'>
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
        <div className="col s12 l6 ">
        <h3 className="blue-grey-text center">Photo Gallery</h3>
        <div class="carousel">
          <a class="carousel-item" href="#one!"><img src={img1} height={400} width={400}/></a>
          <a class="carousel-item" href="#two!"><img src={img2} height={400} width={400}/></a>
          <a class="carousel-item" href="#three!"><img src={img3} height={400} width={400}/></a>
          <a class="carousel-item" href="#four!"><img src={img4} height={400} width={400}/></a>
          <a class="carousel-item" href="#five!"><img src={img5} height={400} width={400}/></a>
         </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
