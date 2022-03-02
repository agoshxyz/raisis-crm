import React from "react";
import "./Home.css";
import checkmark from '../../../images/Checkmark.svg'
import heroImage from "../../../images/hero-image.png";
const Home = () => {
  return (
    <div className="discover">
      <div className="discover-text">
        <div className="discover-title"> DESCOPERĂ RAISISCRM </div>
        <div className="discover-sub-title">
          A new way to manage people and do business.
        </div>
        <div className="discover-description">
        The most powerful and simple way to collaborate with your team. RaisisCRM lets you handle all your work in one place.
        </div>
        <div className="discover-slide-box">
          <div className="discover-slider-button"> Începe trial-ul gratuit de 14 zile</div>
          <div className="discover-round-stroke-button">Discută cu noi</div>
        </div>
        <div className="feature-container">
          <div className="discover-checkmark">
            <img src={checkmark} alt="checkmark" className="checkmark"/>
            Create invoices &lt; estimates </div>
          <div className="discover-checkmark">
          <img src={checkmark} alt="checkmark" className="checkmark"/>
            Track time &lt; expenses </div>
          <div className="discover-checkmark">
          <img src={checkmark} alt="checkmark" className="checkmark"/>
             Add employees, track attendance &lt; manage leaves  </div>
        </div>
      </div>

      <div className="discover-image">
        <img src={heroImage} alt="Hero Image" />
      </div>
    </div>
  );
};

export default Home;
