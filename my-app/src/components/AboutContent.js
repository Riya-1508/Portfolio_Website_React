import { Link } from "react-router-dom"
import "./AboutContent.css"
import React from 'react'
import React1 from "../assets/react1.avif"
import React2 from "../assets/react2.png"
const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>More About me</h1>
        <p>
          I am a full stack developer using MERN stack.I create fully functional
          and responsive websites for my clients.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={React2} className="img" alt="true" />
          </div>
          <div className="img-stack bottom">
            <img src={React1} className="img" alt="true" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutContent
