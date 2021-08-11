import React, { useState } from "react";

import classes from "./carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useWindowDimensions } from "../../hooks";


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red",marginRight:"30px",fontSize:"100px"}}
      onClick={onClick}
    />
  );
}

const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <button
    {...props}
    className={
      "slick-next slick-arrow" +
      (currentSlide === slideCount - 1 ? " slick-disabled" : "")
    }
    aria-hidden="true"
    aria-disabled={currentSlide === slideCount - 1 ? true : false}
    type="button"
    style={{marginRight:"30px"}}
  >
    Next
  </button>
);


function Arrow(props) {
  let className = props.type === "next" ? "nextArrow" : "prevArrow";
  className += (props.currentSlideIndex===0&&props.type==="prev")?" hide":"";
  className += (props.currentSlideIndex===4&&props.type==="next")?" hide":"";
  className += " arrow";
  const char = props.type === "next" ? ">" : "<";
  return (
    <span className={className} onClick={props.onClick}>
      {char}
    </span>
  );
}


export default function Carousel() {

  console.log("width of screen",useWindowDimensions());
  const screenWidth=useWindowDimensions();
  const [currentSlideIndex,setCurrentSlideIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow:<Arrow type="next" currentSlideIndex={currentSlideIndex}/>,
    prevArrow:<Arrow type="prev" currentSlideIndex={currentSlideIndex}/>,
    afterChange: current => setCurrentSlideIndex(current),
    appendDots: dots => (
        <ul> {dots} </ul>
    ),
    customPaging: i => (
      <div
       className={currentSlideIndex===i?"dot active":"dot"}
      >
      </div>
    )
  };

  console.log("slideindx",currentSlideIndex)

    return (
          <Slider {...settings}> 
             <img   
            src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_SherniLaunch/928cf8f5-d21f-4999-b2e7-7aac6b1e059b._UR3000,600_SX1500_FMwebp_.jpeg"
            alt=" " height={screenWidth<=1220?250:""}
          />   <img   
          src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_SherniLaunch/928cf8f5-d21f-4999-b2e7-7aac6b1e059b._UR3000,600_SX1500_FMwebp_.jpeg"
          alt=" " height={screenWidth<=1220?250:""}
        />   <img   
        src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_SherniLaunch/928cf8f5-d21f-4999-b2e7-7aac6b1e059b._UR3000,600_SX1500_FMwebp_.jpeg"
        alt=" " height={screenWidth<=1220?250:""}
      />   <img   
      src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_SherniLaunch/928cf8f5-d21f-4999-b2e7-7aac6b1e059b._UR3000,600_SX1500_FMwebp_.jpeg"
      alt=" " height={screenWidth<=1220?250:""}
    />   <img   
    src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_SherniLaunch/928cf8f5-d21f-4999-b2e7-7aac6b1e059b._UR3000,600_SX1500_FMwebp_.jpeg"
    alt=" " height={screenWidth<=1220?250:""}
  />
       
        
          </Slider>
       );
}

 /*
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

      */