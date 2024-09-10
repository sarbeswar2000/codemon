import React from "react";
import img1 from "./image/C++.jpg";


import './Ourjurney.css'; // Import the CSS file

const Ourjurney = () => {
  const timelineData = [
    {
      img: img1,
      title: "2017",
      period: "2018-2019",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, aperiam ",
      position: "left",
    },
    {
      img: img1,
      title: "2018",
      period: "2019-2020",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, aperiam ",
      position: "right",
    },
    {
      img: img1,
      title: "Tesla Inc.",
      period: "2020-2021",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, aperiam ",
      position: "left",
    },
    {
      img: img1,
      title: "Toyota Inc.",
      period: "2021-2022",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, aperiam ",
      position: "right",
    },
   
  ];

  return (
    <div className="dd">
      <h2 align="center " style={{color:"white" ,fontWeight:"bold", paddingTop:"30px"}}>Our Journey </h2>
      <div className="timeline">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className={`cont ${item.position}-cont `}
                style={{ animationDelay: `${index}s` }}
                
              >
                <img src={item.img} alt={item.title} />
                
                <div className="text-box row ">
                  <div className="col l8">
                  <h6>{item.title}</h6>
                  <small>{item.period}</small>
                  <p>{item.description}</p>
                  <span
                    className={
                      item.position === "left"
                        ? "left-cont-arrow"
                        : "right-cont-arrow"
                    }
                  ></span>
                  </div>
                  <div className="col l4">
                    helolk
                  </div>
                  
                  
                </div>
              </div>
            ))}
          </div>
    </div>
    
  );
};

export default Ourjurney;
