import React from "react";
import Navbar from "./Components/Navbar";
import Slider from "./Components/Slider";
import PhotoSection from "./Components/Photosection";
import ServicesSection from "./Components/ServiceSection";
//import ContactSection from "./Components/ContactSection";
import Footer from "./Components/Footer";
import ContactForm from "./Components/ContactForm";
<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
=======
import Ourjurney from "./Components/Ourjurney";
import JoinClub from "./Components/JoinClub";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Login from "./Login";
import Howto from "./Howto";

>>>>>>> 83e54c35565c0bf199f29a7c5a31e15dc829eaf8
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
<<<<<<< HEAD
        {/* <Route path="/LoginPage" element={<LoginPage />} /> */}
        </Routes>
      </Router>
      <Slider />
      <PhotoSection />
      <ServicesSection />
      
      <ContactForm />
=======
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
>>>>>>> 83e54c35565c0bf199f29a7c5a31e15dc829eaf8

      <Footer />
    </div>
  );
}

export default App;
