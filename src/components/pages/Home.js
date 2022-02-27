import React from "react";
import "./Home.css";

import heroImage from '../../images/hero-image.png'
const Home = () => {
  return (
    <div className="discover">

      <div className="discover-text">
        <div className="discover-title"> DESCOPERĂ RAISISCRM </div>
        <div className="discover-sub-title">
          Platformă de sistematizare a afacerii de la A la Z
        </div>
        <div className="discover-description">
          Cel mai puternic și simplu mod de a colabora cu echipa ta. RaisisCRM
          permite să gestionați toate proiectele într-un singur loc.
        </div>
      </div>

      <div className="discover-image">
        <img src={heroImage}  alt="Hero Image" />
      </div>
    </div>
  );
};

export default Home;
