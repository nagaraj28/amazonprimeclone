import React from "react";
import HeaderContainer from "../container/header";
import Series from "../container/series";
import Footer from "../footer/footer";

export default function TVShows({dataCollection}){

  return (
    <>
    <HeaderContainer/>
    <Series dataCollection={dataCollection}/>
    <Footer/>
</>
)
  
}