import React from "react";
import Navbar from "./Components/Navbar";
import Slider from "./Components/Slider";
import PhotoSection from "./Components/Photosection";
import ServicesSection from "./Components/ServiceSection";
import ContactSection from "./Components/ContactSection";
import Footer from "./Components/Footer";
import ContactForm from "./Components/ContactForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
        {/* <Route path="/LoginPage" element={<LoginPage />} /> */}
        </Routes>
      </Router>
      <Slider />
      <PhotoSection />
      <ServicesSection />
      
      <ContactForm />

      <Footer />
    </div>
  );
}

export default App;
