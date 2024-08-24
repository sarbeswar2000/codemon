import React, { useEffect } from 'react';

const Slider = () => {
  useEffect(() => {
    // Initialize the slider after the component mounts
    const M = window.M;
    const sliders = document.querySelectorAll('.slider');
    M.Slider.init(sliders, {
      indicators: true,
      height: 500,
      duration: 500,
      interval: 3000
    });
  }, []);

  return (
    <div className="slider">
      <ul className="slides">
        <li>
          <img src="image/hd2.jpg" alt="Slide 1" />
          <div className="caption center-align">
            <h3>This is our big Tagline!</h3>
            <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
          </div>
        </li>
        <li>
          <img src="image/hd1.jpg" alt="Slide 2" />
          <div className="caption left-align">
            <h3>Left Aligned Caption</h3>
            <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
          </div>
        </li>
        <li>
          <img src="image/hd5.jpg" alt="Slide 3" />
          <div className="caption right-align">
            <h3>Right Aligned Caption</h3>
            <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
          </div>
        </li>
        <li>
          <img src="image/hd9.jpg" alt="Slide 4" />
          <div className="caption top-align">
            <h3>Top Aligned Caption</h3>
            <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Slider;
