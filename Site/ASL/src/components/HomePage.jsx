import React from 'react';
import "../styles/HomePage.css"
import sideImage from "../images/side-image.png"
import logo from "../images/logo.png"
import caret from "../images/lang-caret.png"

const HomePage = () => {
  return (

    <div className="desktop-color">
      <img className="sign" alt="logo" src={logo} />
      <button className="start-button">
        <div className="overlap-group">
          <div className="text-wrapper">Start</div>
        </div>
      </button>
      <div className="languages-button">
        <div className="div">Languages</div>
        <img className="languages-caret" alt="Languages caret" src={caret} />
      </div>
      <div className="overlap">
        <div className="sign-language">SIGN LANGUAGE DETECTOR</div>
      </div>
      <img className="side-image" alt="Side image" src={sideImage}/>
    </div>
  );
};

export default HomePage;