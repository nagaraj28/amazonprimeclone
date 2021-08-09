import React from "react";
import { CardContainer } from "./cardcontainer";

export default function Series({dataCollection}){
   return(
       <>{
        dataCollection['series'].map((section,index)=>{
            return <CardContainer key ={`${index}`}  section={section} type={"Tv Shows"} typeVal={"series"} />  
           }   
           )  
       }
       </>
   )    
}