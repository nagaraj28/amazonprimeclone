import React from "react";
import { CardContainer } from "./cardcontainer";

export default function Films({dataCollection}){
    return(
        <>{
         dataCollection['movies'].map((section,index)=>{
             return <CardContainer key ={`${index}`}  section={section} type={"Movies"} typeVal={"movies"}/>  
            }   
            )  
}
        </>
       
    )    
}