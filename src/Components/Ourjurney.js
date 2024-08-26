import React from 'react'

import image1 from "./image/hd2.jpg";
import image2 from "./image/hd6.jpg";
import image3 from "./image/hd4.jpg";
import "./Ourjurney.css";
function Ourjurney() {
  return (
    <section className="section scrollspy #1a237e indigo darken-2#263238 blue-grey darken-4 white-text section22" id="photo">
      <h2 className=" text-darken-4 center" style={{fontWeight:"bold"}}>Our Journey</h2>
    {/* <hr style={{height:"2px" ,width:
      "700"
    }} />  */}
      <div className="row container">
      
        <div className="col s12 l4">
          <img
            src={image1}
            className="materialboxed responsive-img"
            alt="Photo 1" height={200} width={300}
          />
        </div>
        <div className="col s12 l6 offset-l1">
          <h4 className=" text-darken-4">Python</h4>
          <p>
          Python is commonly used for developing websites and software, task automation, data analysis, and data visualisation. 
          </p>
        </div>
      </div>
      <div className="row container">
        <div className="col s12 l4 push-l7 offset-l1">
          <img
            src={image2}
            className="responsive-img materialboxed"
            alt="Photo 2" height={200} width={300}
          />
        </div>
        <div className="col s12 l6 pull-l4 right-align">
          <h4 className=" text-darken-4">Web Devlopment</h4>
          <p>
          Web development, also known as website development, refers to the tasks associated with creating, building, and maintaining websites and web applications that run online on a browser. It may, however, also include web design, web programming, and database management.
          </p>
        </div>
      </div>
      <div className="row container">
        <div className="col s12 l4">
          <img
            src={image3}
            className="responsive-img materialboxed"
            alt="Photo 3"  height={200} width={300}
          />
        </div>
        <div className="col s12 l6 offset-l1">
          <h4 className="text-darken-4">DSA</h4>
          <p>
          Data Structures and Algorithms (DSA) is a fundamental part of Computer Science that teaches you how to think and solve complex problems systematically. Using the right data structure and algorithm makes your program run faster, especially when working with lots of data.
          </p>
        </div>
      </div>
    </section>


    

    
  )
}

export default Ourjurney;
