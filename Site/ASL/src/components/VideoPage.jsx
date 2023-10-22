import React from "react";
import "../styles/VideoPage.css";
import ASLVideo from "../components/ASLVideo.jsx"
import {Link } from "react-router-dom";

const VideoPage = () => {
  return (
    <div className="desktop-color">
<<<<<<< Updated upstream
      <img src='/logo.png' className='logo' />
      <img src='/Languages-Button.png' className='languages-btn' />

      <div className='orange'>
        <h1 className='title'>Sign Language Detector</h1>
=======
      <img className="sign" alt="logo" src={logo} />
      <Link to="/"><button className="stop-button">
        <div className="overlap-group-2">
          <div className="rectangle" />
          <div className="text-wrapper-2">Stop</div>
        </div>
      </button></Link>
      <div className="languages-button">
        <div className="div">Languages</div>
        <img className="languages-caret" alt="Languages caret" src={caret} />
>>>>>>> Stashed changes
      </div>
      <div className='d-flex justify-content-center align-items-center image-box'>
      <ASLVideo />
      </div>
      <div className='d-flex justify-content-center align-items-center button-box'>
      <img src='/Stop-Button.png' />
      </div>
    </div>
  );
};

export default VideoPage;