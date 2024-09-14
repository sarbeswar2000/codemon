import React from "react";
import image1 from "../image/python.png";
import image2 from "../image/HTML.png";
import image3 from "../image/DSA.png";
import image4 from "../image/c-programming.png";
import image5 from "../image/java.png";
import image6 from "../image/CSS.jpg";
import image7 from "../image/javascript.jpeg";
import image8 from "../image/C++.jpg";
import image9 from "../image/SQL.jpeg";
import image10 from "../image/React.png";
import image11 from "../image/PHP.png";

const courseData = [
  { img: image1, description: "Python course details here.", links:"https://drive.google.com/file/d/16FJ4Vn2xjzF1nX6ocCs_AuFL7wOPP2TJ/view" },
  { img: image2, description: "HTML course details here." ,links:""},
  { img: image3, description: "DSA course details here." ,links:"https://www.mta.ca/~rrosebru/oldcourse/263114/Dsa.pdf" },
  { img: image4, description: "C Programming course details here.",links:"" },
  { img: image5, description: "Java course details here." ,links:""},
  { img: image6, description: "CSS course details here.",links:"" },
  { img: image7, description: "JavaScript course details here.",links:"" },
  { img: image8, description: "C++ course details here." ,links:""},
  { img: image9, description: "SQL course details here.",links:"" },
  { img: image10, description: "React course details here." ,links:""},
  { img: image11, description: "PHP course details here." ,links:""},
];

const Courses = () => {
  return (
    <>
      <div>
        <h2 className="blue-grey-text center" style={{ fontWeight: "bold" }}>
          Courses
        </h2>
        <div className="row">
          {courseData.map((course, index) => (
            <a href= {course.links}>
            <div key={index} className="col s6 m3">
              <div className="card">
                <div className="card-image">
                  <img src={course.img} height={200} width={400} alt="course" />
                </div>
                <div className="card-content blue-grey darken-4 white-text">
                  <p>{course.description}</p>
                </div>
              </div>
            </div></a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Courses;
