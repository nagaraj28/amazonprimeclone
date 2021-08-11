import React from "react";
import Footer from "../footer/footer";
import HeaderContainer from "../container/header";
import Films from "../container/films";
import Carousel from "../components/carousel/carousel";

export default function Movies({dataCollection}){
  return (
    <>
    <HeaderContainer/>
    <Carousel/>
    <Films dataCollection={dataCollection}/>
    <Footer/>
</>
)
}