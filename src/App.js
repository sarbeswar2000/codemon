import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Slider from "./Components/Slider";
import PhotoSection from "./Components/Photosection";
import ServicesSection from "./Components/ServiceSection";
//import ContactSection from "./Components/ContactSection";
import Footer from "./Components/Footer";
import ContactForm from "./Components/ContactForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Team from "./Components/Pages/Team";
import Ourjurney from "./Components/Ourjurney";
import JoinClub from "./Components/JoinClub";
import Howto from "./Components/Howto";
import Resource from "./Components/Resource";

import ParalexImage from "./Components/ParalexImage";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Designation from "./Components/Pages/Designation";
import PhotoGallery from "./Components/Pages/PhotoGallery";

function App() {
  const photos = [
    './image\academic.jpg',
    'https://via.placeholder.com/400x300?text=Photo+2',
    'https://via.placeholder.com/400x300?text=Photo+3',
    'https://via.placeholder.com/400x300?text=Photo+4',
  ];
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
                 <Designation/>
                 <ServicesSection />
                <PhotoSection />
                <Ourjurney />
                <JoinClub />
                {/* <PhotoGallery photos={photos}/> */}
                <ContactForm />
              </>
            }
          />
          <Route path="/Resource" element={<Resource/>} />
          <Route path="/Login" element={<Login setUserName={setUserName}/>} />
          <Route path="/Signup" element={<Signup/>} />
          <Route path="/Team" element={<Team/>}/>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;