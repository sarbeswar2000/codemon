import React from 'react';

const ServicesSection = () => {
  return (
    <section className="container section scrollspy" id="services">
      <div className="row">
        <div className="col s12 l4">
          <h2 className="indigo-text text-darken-4">What I do..</h2>
          <p>lo ksaijh ijsaiass</p>
          <div class="video-container">
            <iframe width="853" height="480" src="//www.youtube.com/embed/Q8TXgCzxEnw?rel=0" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
        <div className="col s12 l6 offset-l2">
          
          <div className="col s12" id="photography">
            <p className="indigo-text text-darken-4">PHOTOGRAPHY</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
          </div>
          <div className="col s12" id="editing">
            <p className="indigo-text text-darken-4">EDITING</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
