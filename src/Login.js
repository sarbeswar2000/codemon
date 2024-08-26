import React from 'react'
import ServicesSection from './Components/ServiceSection';
import Photosection from './Components/Photosection';
import Courses from './Components/Pages/Courses';
import Slider from './Components/Slider';
import ContactForm from './Components/ContactForm';
function Login() {
  return (
    <div>
      <Slider/>
     <Courses />
      <ContactForm/>
    </div>
  )
}
export default Login;
