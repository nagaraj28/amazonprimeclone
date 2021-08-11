import React from "react";
import Carousel from "../components/carousel/carousel";
import HeaderContainer from "../container/header";
import Series from "../container/series";
import Footer from "../footer/footer";

export default function TVShows({dataCollection}){

  return (
    <>
    <HeaderContainer/>
    <Carousel/>
    <Series dataCollection={dataCollection}/>
    <Footer/>
</>
)
  
}