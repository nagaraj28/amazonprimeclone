import React, { useContext } from "react";
import CardsList from "../container/cardsList";
import Footer from "../footer/footer";
import HeaderContainer from "../container/header";
import { Context } from "../context/Context";

export default function Genre({dataCollection}){
  const {genre} = useContext(Context);
    return (
  <>
  <HeaderContainer/>
  <div >
    <h4 style={{marginLeft:"50px",marginBottom:"20px"}}>{genre.title}</h4>
      <hr style={{marginLeft:"40px",marginRight:"25px",opacity:"0.5"}}/>
      <div style={{margin:"0 40px",display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(230px, 1fr) )",gridGap:"25px"}}>
      <CardsList  section={genre}/> 
      {/*
            //movies
          dataCollection['movies'].map((section,index)=>{
                      return <CardsList key ={`${index}`} section={section}/>  
                     }   
                     )
                  }
                  */
                }
      </div>
    </div>
    <Footer/>
  </>

    )
}