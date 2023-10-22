import React from 'react';
import "../styles/HomePage.css"
import {Link } from "react-router-dom";

const HomePage = () => {
  return (

    <div className="desktop-color">
      <img src='/logo.png' className='logo' />

      <div className='orange'>
        <h1 className='title'>Sign Language Detector</h1>
      </div>
      <div className='d-flex justify-content-center align-items-center image-box'>
      <img src='/side-image.png' className='image'/>
      </div>
      <div className='d-flex justify-content-center align-items-center button-box'>
      <Link to="/video-eng"><img src='/English-Button.png' /></Link>
      <Link to="/video-ind"><img src='/Indian-Button.png' style={{ marginLeft: 20 }}/></Link>
      <Link to="/video-arab"><img src='/Arabic-Button.png' style={{ marginLeft: 20 }}/></Link>
      <Link to="/video-span"><img src='/Spanish-Button.png' style={{ marginLeft: 20 }}/></Link>
      </div>
    </div>
  );
};

export default HomePage;
