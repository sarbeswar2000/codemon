import React from "react";
import Navbar from "./Components/Navbar";
import Slider from "./Components/Slider";
import PhotoSection from "./Components/Photosection";
import ServicesSection from "./Components/ServiceSection";
//import ContactSection from "./Components/ContactSection";
import Footer from "./Components/Footer";
import ContactForm from "./Components/ContactForm";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/LoginPage";

import Ourjurney from "./Components/Ourjurney";
import JoinClub from "./Components/JoinClub";
import Howto from "./Components/Howto";
import Resource from "./Components/Resource";
import ParalexImage from "./Components/ParalexImage";

function App() {
  
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
         
          <Route
            path="/"
            element={
              <>
                <Slider />
                 <ParalexImage/> 
                <Howto />
               
                <PhotoSection />
                <Ourjurney />
                <ServicesSection />
                <JoinClub />
                <ContactForm />
              </>
            }
          />
          <Route path="/Resource" element={<Resource/>} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
