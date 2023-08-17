import React from 'react'
import Navbar from "../components/navbar";
import Heroimg2 from '../components/Heroimg2';
import Footer from "../components/Footer";
import PricingCards from '../components/PricingCards';
import Work from '../components/work';
const Project = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading = "PROJECTS" text = "Some of my recent works"/>
      <Work/>
      <PricingCards/>
      <Footer/>
    </div>
  )
}

export default Project
