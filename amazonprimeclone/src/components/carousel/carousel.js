import React from "react";

import classes from "./carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



export default function Carousel(props) {
 
    return (
    <div className="carousel">
        <div className="carousel-item carousel-item-visible">
          <img
            src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_SherniLaunch/928cf8f5-d21f-4999-b2e7-7aac6b1e059b._UR3000,600_SX1500_FMwebp_.jpeg"
            alt=" "
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_SherniLaunch/928cf8f5-d21f-4999-b2e7-7aac6b1e059b._UR3000,600_SX1500_FMwebp_.jpeg"
            alt=" "
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_SherniLaunch/928cf8f5-d21f-4999-b2e7-7aac6b1e059b._UR3000,600_SX1500_FMwebp_.jpeg"
            alt=" "
          />
        </div>
<div className="carousel-actions">
        <button id="carousel-button-prev" aria-label="Previous Slidex">P</button>
        <button id="carousel-button-next" aria-label="Next Slide">N</button>
    </div>
     <ul className="carouselPageList">
        <li className="carouselPage active">
        </li>
        <li className="carouselPage">
       </li>
       <li className="carouselPage">
        </li>
        <li className="carouselPage">
        </li>
        <li className="carouselPage">
        </li>
     </ul>
    </div>

  );
}
