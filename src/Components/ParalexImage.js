
import image1 from "./image/code.jpg";
import React, { useEffect } from 'react';

const ParallaxComponent = () => {
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
    <div className="parallax-container white-text center" style={{height:"200px"}}>
      <div className="parallax ">
        <img src={image1} alt="Parallax Image" />
      </div>
      <h3  style={{fontWeight:"bold", marginTop:"50px"}}>A Peer-learning community in CUH  </h3>
      <h5> Department of CS & IT</h5>
    </div>
  );
};

export default ParallaxComponent;
