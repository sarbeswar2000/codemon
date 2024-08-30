import React from "react";
import Navbar from "./Components/Navbar";
import Slider from "./Components/Slider";
import PhotoSection from "./Components/Photosection";
import ServicesSection from "./Components/ServiceSection";
//import ContactSection from "./Components/ContactSection";
import Footer from "./Components/Footer";
import ContactForm from "./Components/ContactForm";
import Ourjurney from "./Components/Ourjurney";
import JoinClub from "./Components/JoinClub";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Login from "./Login";
import Howto from "./Components/Howto";

function AfterLogin() {
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
                <Howto/>
                <PhotoSection />
                <Ourjurney />
                <ServicesSection />
                <JoinClub />
                <ContactForm />
              </>
            }
          />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default AfterLogin();
