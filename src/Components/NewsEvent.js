import React from 'react';
import './NewEvent.css';
import newimg from './image/new-star.gif';
import PhotoGallery from './Pages/PhotoGallery';

const NewsEvent = () => {
  return (
    <section className="section scrollspy" id="services">
      <div className="row" style={{ padding: '10px' }}>
        {/* News & Events Section */}
        <div className="col s12 l6 news">
          <h3 className="blue-grey-text center">News & Events</h3>
          <div className="scroll" style={{ marginBottom: '10px' }}>
            <ul style={{ lineHeight: '300%' }}>
              {[
                {des:'Our upcoming event: Web Development Course Bootscamp coming soon 25-09-24 click for registration',lnk:"https://docs.google.com/forms/d/e/1FAIpQLSeTsiQGlYYM_0xE5GSUQs6taAGawg49i24iUbFtJwvFx9b0vw/closedform" },
                 {
                  des:' Python BootsCamp Coming Soon Click For Registration',
                  lnk:"#!"
                 }
              ].map((text, index) => (
                <li key={index}>
                  <a href={text.lnk}>
                    <h6 className='hh6'>
                      {text.des} 
                      <img src={newimg} alt="event" height="50" width="50" style={{ marginLeft: '10px' }} />
                    </h6>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Photo Gallery Section */}
        <div className="col s12 l5 offset-l1">
          <h3 className="blue-grey-text center">Photo Gallery</h3>
          <PhotoGallery />
        </div>
      </div>
    </section>
  );
};

export default NewsEvent;
