import React from "react";
import image1 from "./image/hd2.jpg";
const Photosection = () => {
  return (
    <section className="container section scrollspy" id="photo">
      <div className="row">
        <div className="col s12 l4">
          <img
            src={image1}
            className="materialboxed responsive-img"
            alt="Photo 1"
          />
        </div>
        <div className="col s12 l6 offset-l1">
          <h2 className="indigo-text text-darken-4">Portraits</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna{" "}
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col s12 l4 push-l7 offset-l1">
          <img
            src="./image/hd2.jpg"
            className="responsive-img materialboxed"
            alt="Photo 2"
          />
        </div>
        <div className="col s12 l6 pull-l4 right-align">
          <h2 className="indigo-text text-darken-4">Portraits</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna{" "}
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col s12 l4">
          <img
            src="image/hd6.jpg"
            className="responsive-img materialboxed"
            alt="Photo 3"
          />
        </div>
        <div className="col s12 l6 offset-l1">
          <h2 className="indigo-text text-darken-4">Portraits</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Photosection;
