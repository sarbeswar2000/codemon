import React from 'react';

const ServicesSection = () => {
  return (
    <section className="container section scrollspy" id="services">
      <div className="row">
        <div className="col s12 l6 ">
          
          <div className="col s12" id="photography">
            <h5 className="indigo-text blue-grey-text">Coding</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
          </div>
          <div className="col s12" id="editing">
            <h5 className="indigo-text  blue-grey-text">Learning</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
          </div>
        </div>
        <div className="col s12 l4 offset-l2">
          <h2 className="blue-grey-text">What I do..</h2>
          <div class="video-container">
            <iframe width="853" height="480" src="//www.youtube.com/embed/Q8TXgCzxEnw?rel=0" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
