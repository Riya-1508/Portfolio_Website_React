import React from 'react'
import Navbar from "../components/navbar";
import Heroimg2 from '../components/Heroimg2';
import Footer from "../components/Footer";
import AboutContent from '../components/AboutContent';
const About = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="ABOUT" text="I am a full stack developer" />
      <AboutContent/>
      <Footer />
    </div>
  );
}

export default About
