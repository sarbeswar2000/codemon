import React from 'react';

const ContactForm = () => {
  return (
    <section className="section-container scrollspy" id="contact">
      <div className="row">
        <div className="col s12 l5">
        <div class="video-container center">
            <iframe width="400" height="480" src="//www.youtube.com/embed/Q8TXgCzxEnw?rel=0" frameborder="0" allowfullscreen></iframe>
          </div>
        

        </div>
        <div className="col s12 l4 offset-l2">
          <form>
          <h2 className="blue-grey-text ">Get In touch</h2>
            <div className="input-field">
              <i className="material-icons prefix">mail</i>
              <input type="email" id="email" />
              <label htmlFor="email">Your Email</label>
            </div>
            <div className="input-field">
              <i className="material-icons prefix">message</i>
              <textarea id="textarea2" class="materialize-textarea" ></textarea>
              <label htmlFor="message">Your Message</label>
            </div>
            <div className="input-field">
              <i className="material-icons prefix">date_range</i>
              <input type="date" id="date" className="datepicker" />
            </div>
            <div className="input-field center">
              <button className="btn indigo waves-effect waves-grey" type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
