import React ,{useEffect, useState} from "react";
import Carousel from "../components/carousel/carousel";
import Films from "../container/films";
import HeaderContainer from "../container/header";
import Series from "../container/series";
import Footer from "../footer/footer";
import Search from "./search";
import Fuse from 'fuse.js';
import { Link } from "react-router-dom";

export default function Home({dataCollection}){
   console.log(dataCollection['series']);

    return (
        <>
        <HeaderContainer/>
        <Carousel dataCollection={dataCollection}/> 
        <Series dataCollection={dataCollection} />
        <Films dataCollection={dataCollection}/>
        <Footer/>
    </>
    )
}