
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
            Coding Club Members
          </h2>
          <div className="col s12">
            <div className="card-panel teal  blue-grey">
              <div className="row ">
                <div className="col s12 m3">
                  <img src={image1} alt="Image" className="circle responsive-img" style={{height:"250px", width:"300px"}}/>
                </div>
                <div className="col s12 m9">
                  <span className="white-text">
                    <h5>Dr. Sunil Kumar (Convener)[ Assistant Professor (Dept-CS & IT) - CUH ]</h5>

                    I am  Sunil Kumar, holding a Ph.D. alongside M.Tech. and MCA degrees. Additionally, I have qualified prestigious exams like UGC NET and GATE. My primary areas of expertise include Computer Networks, Cyber Security, and IoT Network Security, with a special focus on the Internet of Vehicles (IoV). With years of research and teaching experience, I am passionate about advancing these fields through innovative solutions and insightful knowledge-sharing. 
                  <br/>
                    
                    You can reach me for any inquiries or collaborations.<br/>
                     
                      <span style={{fontWeight:"bold"}}> Email: drsunilk@cuh.ac.in.</span>
                    
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col s12">
            <div className="card-panel teal  blue-grey">
              <div className="row">
                <div className="col s12 m3">
                  <img src={image4} style={{height:"250px", width:"300px"}}alt="Image" className="circle responsive-img"/>
                </div>
                <div className="col s12 m9">
                  <span className="white-text">
                    <h5>Nitin Goyal (Member)[ Assistant Professor (Dept-CSE) - CUH ]</h5>
                   

                    Hello, I am Nitin Goyal, with a PhD in Computer Engineering from the National Institute of Technology (NIT), Kurukshetra. I hold an M.Tech in Computer Science and Engineering and a B.Tech in Computer Engineering, both from Kurukshetra University. My research interests lie in advanced networking systems, including Mobile AdHoc Networks (MANET), Vehicular AdHoc Networks (VANET), Flying AdHoc Networks (FANET), Wireless Sensor Networks (WSN), Underwater Wireless Sensor Networks (UWSN), and the Internet of Things (IoT). <a href="https://sites.google.com/view/nitingoyal/home?authuser=0">More...</a><br/> For any academic or research collaborations, feel free to contact me at <br/>
                    <span style={{fontWeight:"bold"}}>Email: dr.nitingoyal30@gmail.com.</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col s12">
            <div className="card-panel teal  blue-grey">
              <div className="row ">
                <div className="col s12 m3">
                  <img src={image3} style={{height:"250px", width:"300px"}} alt="Image" className="circle responsive-img"/>
                </div>
                <div className="col s12 m9">
                  <span className="white-text">
                  <h5>Dr. Priti Maratha (Member)[ Assistant Professor (Dept- CS & IT) - CUH ] </h5>
                  Hello, I am Priti Maratha, holding a PhD from the prestigious National Institute of Technology (NIT) Kurukshetra. My academic journey is enriched by a Master’s degree in Computer Applications (MCA) and qualification in the UGC NET-JRF. My research interests span across the fields of Internet of Things (IoT), Machine Learning, Optimization, and Networking. Through my work, I aim to contribute to the advancement of these domains. <br/> For any academic or research inquiries, I can be reached at email. 
                  <br/>
                  <span style={{fontWeight:"bold"}}>Email: drpriti@cuh.ac.in.</span>
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
          <div className="col s12 m4  ">
              <div className="card-panel teal  blue-grey">
                <span className="white-text">
                  <h5>Amit Rikhari</h5>
                  Msc.Data Science <br/>Batch: 2023-25
                </span>
              </div>
            </div>
            <div className="col s12 m4 ">
              <div className="card-panel teal  blue-grey">
                <span className="white-text"><h5>Name</h5>
                MCA<br/>
                Batch: 2023-25
                </span>
              </div>
            </div>
            <div className="col s12 m4 ">
              <div className="card-panel teal  blue-grey">
                <span className="white-text">
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
           <span style={{fontSize:"18px",fontWeight:"boldx"}}> Here is the Volunteers list (2024-25): <a href="https://drive.google.com/file/d/16FJ4Vn2xjzF1nX6ocCs_AuFL7wOPP2TJ/view?usp=sharing"> Click</a></span>
        </div>
      </div>



      
    </div>
     
    
    </div>
  )
}

export default Team
 