import React from "react";
import classes from "./cardsList.css";
import FavGridCard from "../components/gridCards/favGridCards";
export default function FavCardsList({section,typeVal}){
       const cardsMap=section.data.map((dataItem,index)=>(
 <FavGridCard  key={index} dataItem={dataItem} typeVal={typeVal} />
            ))
    return (cardsMap);
}