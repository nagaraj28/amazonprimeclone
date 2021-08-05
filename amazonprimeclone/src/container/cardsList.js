import React from "react";
import classes from "./cardsList.css";
import GridCard from "../components/gridCards/gridCards";

export default function CardsList({section}){
       const cardsMap=section.data.map((dataItem,index)=>(
 <GridCard  key={index} dataItem={dataItem} />
            ))
    return (cardsMap);
}