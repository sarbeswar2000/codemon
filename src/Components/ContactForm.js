import React from 'react';

const ContactForm = () => {
  return (
    <section className="section-container scrollspy" id="contact">
      <div className="row">
        <div className="col s12 l5">
          <h2 className="blue-grey-text ">Get In touch</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="col s12 l4 offset-l2">
          <form>
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
