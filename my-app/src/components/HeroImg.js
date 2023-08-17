import "./Heroimg.css"
import React from 'react'
import Introimg from "../assets/heroimg.png"
import { Link } from "react-router-dom"
const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={Introimg} alt="Introimg" />
      </div>
      <div className="content">
        <p>HELLO, I AM A FREELANCER</p>
        <h1>React Developer</h1>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroImg
