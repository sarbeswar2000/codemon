import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Slider from "./Components/Slider";
import PhotoSection from "./Components/Photosection";
import ServicesSection from "./Components/ServiceSection";
//import ContactSection from "./Components/ContactSection";
import Footer from "./Components/Footer";
import ContactForm from "./Components/ContactForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Ourjurney from "./Components/Ourjurney";
import JoinClub from "./Components/JoinClub";
import Howto from "./Components/Howto";
import Resource from "./Components/Resource";

import ParalexImage from "./Components/ParalexImage";

function App() {
  

import Login from "./Components/Login";
import Signup from "./Components/Signup";

function App() {
  const [userName,setUserName]=useState("");
  useEffect(()=>
  {
    const storedUserName = localStorage.getItem("userName");
    if (storedUserName) {
      setUserName(storedUserName);
    }
  })

  return (
    <div>
      <Router>
        <Navbar  userName={userName} setUserName={setUserName}/>
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
          <Route path="/Login" element={<Login setUserName={setUserName}/>} />
          <Route path="/Signup" element={<Signup/>} />

        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
