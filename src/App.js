import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Slider from "./Components/Slider";
import PhotoSection from "./Components/Photosection";

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
import Designation from "./Components/Pages/designation";
import PhotoGallery from "./Components/Pages/PhotoGallery";
import NewsEvent from "./Components/NewsEvent";

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
                 <Designation/>
                  <NewsEvent/>
                <PhotoSection />
                <Ourjurney />
                <JoinClub />
                <ContactForm />
              </>
            }
          />
          <Route path="/Resource" element={<Resource/>} />
          <Route path="/Login" element={<Login setUserName={setUserName}/>} />
          <Route path="/Signup" element={<Signup/>} />
          <Route path="/Team" element={<Team/>}/>
          <Route path="/ContactForm" element={<ContactForm/>}/>

        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;