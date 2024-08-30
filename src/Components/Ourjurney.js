import React from 'react';

import image1 from "./image/hd2.jpg";
import image2 from "./image/hd6.jpg";
import image3 from "./image/training.jpg";
import "./Ourjurney.css";

function OurJourney() {
  return (
    <section className="section scrollspy indigo darken-2 blue-grey darken-4 white-text section22" id="photo">
      <h2 className="center" style={{ fontWeight: "bold" }}>Our Journey</h2>
      
      <div className="journey-container">
        <div className="row journey-row fade-in-left">
          <div className="col s12 l4 journey-img">
            <img
              src={image3}
              className="materialboxed responsive-img"
              alt="Photo 1"
              height={200}
              width={300}
            />
          </div>
          <div className="col s12 l6 offset-l1 journey-text">
            <h4 className="text-darken-4">1st gen</h4>
            <p>Python is commonly used for developing websites and software, task automation, data analysis, and data visualization.</p>
          </div>
        </div>

        <div className="row journey-row fade-in-right">
          <div className="col s12 l4 journey-img">
            <img
              src={image3}
              className="responsive-img materialboxed"
              alt="Photo 2"
              height={200}
              width={300}
            />
          </div>
          <div className="col s12 l6 offset-l1 journey-text">
            <h4 className="text-darken-4">2nd Gen</h4>
            <p>Web development refers to the tasks associated with creating, building, and maintaining websites and web applications.</p>
          </div>
        </div>

        <div className="row journey-row fade-in-left">
          <div className="col s12 l4 journey-img">
            <img
              src={image3}
              className="responsive-img materialboxed"
              alt="Photo 3"
              height={200}
              width={300}
            />
          </div>
          <div className="col s12 l6 offset-l1 journey-text">
            <h4 className="text-darken-4">3rd Gen</h4>
            <p>Data Structures and Algorithms (DSA) is a fundamental part of Computer Science that teaches systematic problem-solving.</p>
          </div>
        </div>
      </div>

      <div className="journey-line"></div>
    </section>
  );
}

export default OurJourney;
