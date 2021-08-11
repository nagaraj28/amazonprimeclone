import React, { useContext, useEffect,useState } from "react";
import Footer from "../footer/footer";
import HeaderContainer from "../container/header";
import { Context } from "../context/Context";
import { useFavContent } from "../hooks";
import { favselectionMap } from "../utils";
import FavCardsList from "../container/favCardsList";
export default function Favourites(){
 const {favseries} = useFavContent('series');
  const {favmovies} = useFavContent('movies');
   let favdataCollection = [];
   favdataCollection=favselectionMap({favseries,favmovies});    
   const [favData,setFavData] =useState([]);
   const {userId} =useContext(Context);
   //console.log("favs");
 //  console.log(favdataCollection);
      useEffect(()=>{
         favdataCollection=favselectionMap({favseries,favmovies});    
         setFavData(favdataCollection.favContentData);
      },[favdataCollection.favContentData.length!==favData.length,userId]);      
      console.log("favData")
      console.log(favData);
      
    return (
  <>
            <HeaderContainer/>
  <div >
  <h4 style={{marginLeft:"50px",marginBottom:"40px",textDecoration:"underline",color:"white",textUnderlinePosition:"under"}}>WatchList</h4>
    <h4 style={{marginLeft:"50px",marginBottom:"20px"}}>All</h4>
      <hr style={{marginLeft:"40px",marginRight:"25px",opacity:"0.5"}}/>
      <div style={{margin:"0 40px",display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(230px, 1fr) )",gridGap:"25px"}}>
      {
            //movies
        favdataCollection['movies'].map((section,index)=>{
                      return <FavCardsList key ={`${index}`} section={section} typeVal={"movies"}/>  
                     }   
                     )
                  }
                   {
            //series
            favdataCollection['series'].map((section,index)=>{
                      return <FavCardsList key ={`${index}`} section={section} typeVal={"series"}/>  
                     }   
                     )
                     
                  }
      </div>
    </div>
                
    <Footer/>
  </>
    )
    
}