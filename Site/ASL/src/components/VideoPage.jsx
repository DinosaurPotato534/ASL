import React from "react";
import "../styles/VideoPage.css";
import logo from "../images/logo.png"
import caret from "../images/lang-caret.png"
import ASLVideo from "../components/ASLVideo.jsx"

const VideoPage = () => {
  return (
    <div className="desktop-color">
      <img className="sign" alt="logo" src={logo} />
      <button className="stop-button">
        <div className="overlap-group-2">
          <div className="rectangle" />
          <div className="text-wrapper-2">Stop</div>
        </div>
      </button>
      <div className="languages-button">
        <div className="div">Languages</div>
        <img className="languages-caret" alt="Languages caret" src={caret} />
      </div>
      <div className="overlap">
        <div className="sign-language">SIGN LANGUAGE DETECTOR</div>
      </div>
      <div className="rectangle-2"><ASLVideo /></div>
    </div>
  );
};

export default VideoPage;