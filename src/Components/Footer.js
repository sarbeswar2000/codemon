import React from 'react';

const Footer = () => {
  return (  
    <footer class="page-footer blue-grey darken-3">
  
    <div class="container ">
      <div class="row">
        <div class="col s12 l6">
        <h4>About </h4>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
         <p>This website is design by Our club members(Students) Batch-2023 </p>
        </div>

         <div class="col s12 l4 offset-l2 ">


          <h4>Connect</h4>
          <ul>
            <li><i className="fa fa-linkedin left btn-floating indigo btn-small"></i><a href="#" className="grey-text text-lighten-3">LinkedIn</a></li><br/>
            
            <li><i class="fa fa-whatsapp left btn-floating green btn-small"></i><a href="#" class="grey-text text-lighten-3">Whatsapp</a></li>
              <br/>
              <li><i class="fa fa-youtube-play left btn-floating red darken-4 btn-small"></i><a href="#" class="grey-text text-lighten-3">Youtube</a></li>
              <br/>
              Email: cuhcodeclub@gmail.com
          </ul>
        </div> 
    
    </div>
    </div>

    <div class="footer-copyright blue-grey darken-4">

      <div className="container center align">&copy;2024 CUH Coding Club</div>
    </div> 
    </footer>
  );
};

export default Footer;