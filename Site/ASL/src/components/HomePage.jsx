import React from 'react';
import "../styles/HomePage.css"
import sideImage from "../images/side-image.png"
import logo from "../images/logo.png"
import caret from "../images/lang-caret.png"
import {Link } from "react-router-dom";

const HomePage = () => {
  return (
    
    <div className="desktop-color">
      <img className="sign" alt="logo" src={logo} />
      <Link to="/video"><button className="start-button">
        <div className="overlap-group">
          <div className="text-wrapper">Start</div>
        </div>
      </button></Link>
      <div className="languages-button">
        <div className="div">Languages</div>
        <img className="languages-caret" alt="Languages caret" src={caret} />
      </div>
      <div className='d-flex justify-content-center align-items-center image-box'>
      <img src='/side-image.png' className='image'/>
      </div>
      <div className='d-flex justify-content-center align-items-center button-box'>
      <img src='/Start-Button.png' />
      </div>
    </div>
  );
};

export default HomePage;
