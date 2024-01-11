import React from "react";
import "./Hero.css";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_icon from "../Assets/hero_image.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="heroLeft">
        <h2>New arrivals only</h2>
        <div>
          <div className="handIdon">
            <p>New</p>
            <img src={hand_icon} alt="hand  icon" />
          </div>
          <p>Collections</p>
          <p>For everyone</p>
        </div>
        <div className="heroLatestBtn">
          <div> Latest Collection</div>
          <img src={arrow_icon} alt="arrow icon" />
        </div>
      </div>
      <div className="heroRight">
        <img src={hero_icon} alt="hero icon" />
      </div>
    </div>
  );
};

export default Hero;
