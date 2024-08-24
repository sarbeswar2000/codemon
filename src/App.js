import React from "react";
import Navbar from "./Components/Navbar";
import Slider from "./Components/Slider";
import PhotoSection from "./Components/Photosection";
import ServicesSection from "./Components/ServiceSection";
import ContactSection from "./Components/ContactSection";
import Footer from "./Components/Footer";
import ContactForm from "./Components/ContactForm";

function App() {
  return (
    <div>
      <Navbar />
      <Slider />
      <PhotoSection />
      <ServicesSection />
      <ContactSection />
      <ContactForm/>
       
      <Footer />
    </div>
  );
}

export default App;
