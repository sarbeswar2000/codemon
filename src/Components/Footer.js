import React from 'react';

const Footer = () => {
  return (
 
    <footer className="page-footer grey darken-3">
  
    <div className="container">
      <div className="row">
        <div className="col s12 l6">
        <h4>About me</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
         <p>Lorem Ut enim ad minim veniam,
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
         <div className="col s12 l4 offset-l2">
          <h4>Connect</h4>
          <ul>
            <li><i className="fa fa-linkedin left btn-floating indigo btn-small"></i><a href="#" className="grey-text text-lighten-3">LinkedIn</a></li><br/>
            
            <li><i className="fa fa-whatsapp left btn-floating green btn-small"></i><a href="#" className="grey-text text-lighten-3">Whatsapp</a></li>
    
    
          </ul>
        </div> 
    
    </div>
    </div>
    <div className="footer-copyright grey darken-4">
      
      <div className="container center align">&copy;2024 CodeMon</div>
    </div> 
    </footer>
  );
};

export default Footer;
