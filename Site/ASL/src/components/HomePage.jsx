import React from 'react';
import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <div className="desktop-color">
      <img src='/logo.png' className='logo' />
      <img src='/Languages-Button.png' className='languages-btn' />

      <div className='orange'>
        <h1 className='title'>Sign Language Detector</h1>
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
