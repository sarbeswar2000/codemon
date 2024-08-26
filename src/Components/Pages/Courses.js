import React from "react";
import image1 from "../image/python.png";
import image2 from "../image/web.jpg";
import image3 from "../image/DSA.png";
import image4 from "../image/c-programming.png";
const Courses = () => {
  return (
    <>
      <div>
        <div class="row">
          <h2 className=" blue-grey-text center" style={{fontWeight:"bold"}}>Courses</h2>
          <div class="col s6 m3">
            <a href="#">
              <div class="card">
                <div class="card-image">
                  <img src={image1} height={200} width={400} />
                </div>
                <div class="card-content">
                  <p>
                    I am a very simple card. I am good at containing small bits
                    of information. I am convenient because I require little
                    markup to use effectively.
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div class="col s6 m3">
            <div class="card">
              <div class="card-image">
                <img src={image2} height={200} width={400} />
              </div>
              <div class="card-content">
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
            </div>
          </div>
          <div class="col s6 m3">
            <div class="card">
              <div class="card-image">
                <img src={image3} height={200} width={400} />
              </div>
              <div class="card-content">
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
            </div>
          </div>
          <div class="col s6 m3">
            <div class="card">
              <div class="card-image">
                <img src={image4} height={200} width={400} />
              </div>
              <div class="card-content">
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
         
          <div class="col s6 m3">
            <a href="#">
              <div class="card">
                <div class="card-image">
                  <img src={image1} height={200} width={400} />
                </div>
                <div class="card-content">
                  <p>
                    I am a very simple card. I am good at containing small bits
                    of information. I am convenient because I require little
                    markup to use effectively.
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div class="col s6 m3">
            <div class="card">
              <div class="card-image">
                <img src={image2} height={200} width={400} />
              </div>
              <div class="card-content">
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
            </div>
          </div>
          <div class="col s6 m3">
            <div class="card">
              <div class="card-image">
                <img src={image3} height={200} width={400} />
              </div>
              <div class="card-content">
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
            </div>
          </div>
          <div class="col s6 m3">
            <div class="card">
              <div class="card-image">
                <img src={image4} height={200} width={400} />
              </div>
              <div class="card-content">
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
