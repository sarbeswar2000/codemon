import React, { useState } from "react";
const host = "http://localhost:3000";
const ContactForm = () => {
   const [email,setEmail]=useState("");
   const [msg,setMsg]=useState("");
   const [name,setName]=useState("");
  const onhandleSubmit =async()=>{
    const response = await fetch(`${host}/Auth/sendFeedback`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name,email,msg, }),
  });
 
}
  return (
    <section className="section-container scrollspy" id="contact">
      <div className="row">
        <div className="col s12 l5">
          <div className="video-container center">
            <iframe
              width="400"
              height="480"
              src="//www.youtube.com/embed/Q8TXgCzxEnw?rel=0"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="col s12 l4 offset-l2">
          <form onSubmit={onhandleSubmit}>
            <h2 className="blue-grey-text">Get In touch</h2>
            <div className="input-field">
              <i className="material-icons prefix">person</i>
              <input id="name" type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required />
              <label htmlFor="name">Name</label>
            </div>
            <div className="input-field">
              <i className="material-icons prefix">mail</i>
              <input type="email" id="email" 
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               required
              />
              <label htmlFor="email">Your Email</label>
            </div>
            <div className="input-field">
              <i className="material-icons prefix">message</i>
              <textarea id="textarea" className="materialize-textarea" 
               value={msg}
               onChange={(e) => setMsg(e.target.value)}
              />
              <label htmlFor="textarea">Your Message</label>
            </div>

            <div className="input-field center">
              <button
                className="btn indigo waves-effect waves-grey"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
