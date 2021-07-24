import React from "react";
import Footer from "../footer/footer";
import HeaderContainer from "../container/header";
import Films from "../container/films";

export default function Movies({dataCollection}){
  return (
    <>
    <HeaderContainer/>
    <Films dataCollection={dataCollection}/>
    <Footer/>
</>
)
}