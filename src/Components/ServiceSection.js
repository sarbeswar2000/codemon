import React from 'react';

const ServicesSection = () => {
  return (
    <section className="container section scrollspy" id="services">
      <div className="row">
        <div className="col s12 l4">
          <h2 className="indigo-text text-darken-4">What I do..</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna ali</p>
        </div>
        <div className="col s12 l6 offset-l2">
          <ul className="tabs">
            <li className="tab col s6">
              <a href="#photography" className="indigo-text text-darken-4">Photography</a>
            </li>
            <li className="tab col s6">
              <a href="#editing" className="indigo-text text-darken-4">Editing</a>
            </li>
          </ul>
          <div className="col s12" id="photography">
            <p className="flow-text indigo-text text-darken-4">PHOTOGRAPHY</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
          </div>
          <div className="col s12" id="editing">
            <p className="flow-text indigo-text text-darken-4">EDITING</p>
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
