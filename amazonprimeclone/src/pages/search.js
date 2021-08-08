import React, { useState,useEffect, useContext } from "react";
import CardsList from "../container/cardsList";
import HeaderContainer from "../container/header";
import Footer from "../footer/footer";
import Fuse from "fuse.js";
import { Context } from "../context/Context";
export default function Search({dataCollection}){
  const {searchText} = useContext(Context);
  const [movieSItems,setMovieSItems] = useState([{}]);
  const [tvSItems,settvSItems] = useState([{}]);
  useEffect(()=>{
      const fuse1 = new Fuse(dataCollection['movies'],{keys:['data.title']});
      const results1 = fuse1.search(searchText).map(item=>item);
       setMovieSItems(results1);
       const fuse2 = new Fuse(dataCollection['series'],{keys:['data.title']});
      const results2 = fuse2.search(searchText).map(item=>item);
      settvSItems(results2);
  },[searchText]);
  console.log(movieSItems);
  console.log(tvSItems);
  console.log(searchText)

    return (
        <>
        <HeaderContainer/>
        <div >
          <h4 style={{marginLeft:"50px",marginBottom:"20px"}}>search results for "{searchText}"</h4>
            <hr style={{marginLeft:"40px",marginRight:"25px",opacity:"0.5"}}/>
            <div style={{margin:"0 40px",display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(230px, 1fr) )",gridGap:"25px"}}>
                     {
                    (searchText.length>0 && movieSItems.length>0 && ("item" in movieSItems[0]) )?movieSItems.map((section,index)=>(<CardsList key={index} section={section.item}/>)):(<div></div>)          
                    }
                    {
                    (searchText.length>0 && tvSItems.length>0 && ("item" in tvSItems[0]))?tvSItems.map((section,index)=>(<CardsList  key={index} section={section.item}/>)):(<div></div>)          
                    }
            </div>
          </div>
          <Footer/>
        </>
      
          )

}