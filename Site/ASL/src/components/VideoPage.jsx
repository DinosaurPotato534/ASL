import React from "react";
import "../styles/VideoPage.css";
import ASLVideo from "../components/ASLVideo.jsx"

const VideoPage = () => {
  return (
    <div className="desktop-color">
      <img src='/logo.png' className='logo' />
      <img src='/Languages-Button.png' className='languages-btn' />

      <div className='orange'>
        <h1 className='title'>Sign Language Detector</h1>
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