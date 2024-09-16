import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (  
    <footer className="page-footer blue-grey darken-3">
  
    <div className="container ">
      <div className="row">
        <div className="col s12 l6">
        <h4>About </h4>

        <p>
        CUH coding club (CCC) is a community where individuals with a shared interest in programming come together to collaborate, learn, and improve their skills. Members work on projects, solve coding challenges, and explore new technologies.
        </p>
         <p>This website was designed and developed by students from  our club, Batch of 2023: <br/>
          Sohel Aktar (MCA),
          Sarbeswar Behera (MCA) </p>
        </div>

         <div className="col s12 l4 offset-l2 ">


          <h4>Connect</h4>
          <ul>
            <li><i className="fa fa-linkedin left btn-floating indigo btn-small"></i><a href="https://www.linkedin.com/company/coding-club-cuh/" className="grey-text text-lighten-3">LinkedIn</a></li><br/>
            
            <li><i className="fa fa-whatsapp left btn-floating green btn-small"></i><a href="https://chat.whatsapp.com/LC7TMaZYPxxC1iKSvaPWqP" className="grey-text text-lighten-3">Whatsapp</a></li>
              <br/>
              <li><i className="fa fa-youtube-play left btn-floating red darken-4 btn-small"></i><a href="#!" className="grey-text text-lighten-3">Youtube</a></li>
              <br/>
              Email:<a href='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=codingclub@cuh.ac.in' target='_blank'> codingclub@cuh.ac.in</a>
          </ul>
        </div> 
    
    </div>
    </div>

    <div className="footer-copyright blue-grey darken-4">

      <div className="container center align">&copy;{currentYear} CUH Coding Club</div>
    </div> 
    </footer>
  );
};

export default Footer;