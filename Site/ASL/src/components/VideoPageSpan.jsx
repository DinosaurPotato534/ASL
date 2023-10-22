import React from "react";
import "../styles/VideoPage.css";
import SpanishVideo from "./SpanishVideo";
import {Link } from "react-router-dom";

const VideoPageSpan = () => {
  return (
    <div className="desktop-color">
      <img src='/logo.png' className='logo' />

      <div className='orange'>
        <h1 className='title'>Sign Language Detector</h1>
      </div>
      <div className='d-flex justify-content-center align-items-center image-box'>
      <SpanishVideo />
      </div>
      <div className='d-flex justify-content-center align-items-center button-box'>
      <Link to="/"><img src='/Stop-Button.png' /></Link>
      </div>
    </div>
  );
};

export default VideoPageSpan;