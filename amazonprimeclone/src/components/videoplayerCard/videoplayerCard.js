import React, { useContext,useState,useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import classes from "./videoplayerCard.css"
import HeaderContainer from "../../container/header";
import Footer from "../../footer/footer";
import PlayVideo from "../playVideo/playVideo";
import { Context } from "../../context/Context";
import { favselectionMap } from "../../utils";
import { useFavContent } from "../../hooks";
export default function PlayerCard(props){
        const {playerItem,addToFavourites,deleteFromFavourites,currentTypeValue,userId,videoTypeVal} =useContext(Context);
        console.log(playerItem);
        const {favseries} = useFavContent('series');
  const {favmovies} = useFavContent('movies');
   let favdataCollection = [];
   favdataCollection=favselectionMap({favseries,favmovies});    
   const [favData,setFavData] =useState([]);
   const [isFav,setIsFav]=useState({fav:false})
   favdataCollection=favselectionMap({favseries,favmovies});    
   //console.log("favs");
 //  console.log(favdataCollection);
      useEffect(()=>{
         setFavData(favdataCollection.favContentData);
      },[favdataCollection.favContentData.length,userId,isFav]);
      console.log("favData")
      console.log(favData); 
    return (
            <>
            <HeaderContainer/>
   <div className="card-img-container">
           <div className="desc-container">
           <h1>{playerItem.title}</h1>
           <div>
                   <span>
                   2 h 12 min
                   </span>
                   <span>
                           2021
                   </span>
                   <span>
                           X-Ray
                   </span>
                   <span>
                           U/A 13+
                   </span>
           </div>
           <div>
                   <p className="desc-txt">{playerItem.description}</p>
           </div>

           <div className="btns-container" >
                           <span className="playbtn-ctnr" >
                                   <Link to="/player/playVideo">
                             <span className="play-btn">
                                   Play
                           </span>
                           </Link>                                         
                   </span>
                  {
                        (favData.filter(item=>(item.id===playerItem.id)).length>0)?(<span  onClick={()=>{
                                if(videoTypeVal)
                                deleteFromFavourites(videoTypeVal,playerItem.docId)
                                else
                                deleteFromFavourites(currentTypeValue,playerItem.docId)
                                 favdataCollection=favselectionMap({favseries,favmovies});
                                 setFavData(favdataCollection.favContentData);
                                 setIsFav((prevState)=>({
                                    ...prevState,
                                    fav:!(prevState.fav)
                                 }))
                             }}>
                             <svg height="25px" id="svg2" version="1.1" viewBox="0 0 32 32" width="32px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg"  ><g id="background"><rect fill="none" height="32" width="32"/></g><g id="document_x5F_text_x5F_remove"><title>remove from favourites</title><path d="M24,14.059V5.584L18.414,0H0v32h24v-0.059c4.499-0.5,7.998-4.309,8-8.941C31.998,18.366,28.499,14.556,24,14.059z    M17.998,2.413L21.586,6h-3.588V2.413z M2,30V1.998h14v6.001h6v6.06c-1.752,0.194-3.352,0.89-4.652,1.941H4v2h11.517   c-0.412,0.616-0.743,1.289-0.994,2H4v2h10.059C14.022,22.329,14,22.661,14,23c0,2.829,1.308,5.351,3.349,7H2z M23,29.883   c-3.801-0.009-6.876-3.084-6.884-6.883c0.008-3.801,3.083-6.876,6.884-6.885c3.799,0.009,6.874,3.084,6.883,6.885   C29.874,26.799,26.799,29.874,23,29.883z M20,12H4v2h16V12z"/><g><rect height="2" width="10" x="18" y="22"/></g></g></svg></span>):(<span className="btn-borders"  
                               onClick={()=>{
                                       console.log(videoTypeVal,playerItem.docId);
                                       if(videoTypeVal)
                                       addToFavourites(playerItem,videoTypeVal,playerItem.docId)
                                       else
                                       addToFavourites(playerItem,currentTypeValue,playerItem.docId)
                                       favdataCollection=favselectionMap({favseries,favmovies});
                                 setFavData(favdataCollection.favContentData);
                               setIsFav((prevState)=>({
                                    ...prevState,
                                    fav:!(prevState.fav)
                                 }))
                             }}>
                        <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg"><title>Add</title><path d="M3 12h18m-9 9V3" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"></path></svg>
                        </span>)
                  }
                   <span  className="btn-borders">
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>Watch Party</title><g fill="none" fill-rule="evenodd" transform="rotate(45 13.621 11.293)"><polygon stroke="currentColor" stroke-linejoin="round" stroke-width="2" points="7.362 15.985 12.862 27.985 18.362 15.985"></polygon><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.20520683,12.8786797 C7.9841616,11.0305625 7.19297531,10.0986243 6.20520683,9.87867966"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.8890873,12.6109127 C20.4469968,9.53071743 18.8646243,7.97748706 16.8890873,7.6109127" transform="matrix(-1 0 0 1 37.778 0)"></path><circle cx="3.316" cy="7.49" r="1" fill="currentColor"></circle><circle cx="20.657" cy="11.879" r="1" fill="currentColor"></circle><circle cx="3.316" cy="11.732" r="1" fill="currentColor"></circle><circle cx="1.195" cy="9.611" r="1" fill="currentColor"></circle><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12.557293,13.0753788 C14.5891901,10.5746233 14.5891901,4.94159902 11.0953579,4.94159902 C8.22476933,4.94159902 8.63047547,8.5284102 10.8269766,8.5284102 C13.5809029,8.5284102 16.0116573,2.4313965 11.751917,0.0753787975"></path></g></svg>
                   </span>
                </div>
           {
                   /*<video width="100%" height="600" controls>
    <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
            type="video/webm" />
    <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
            type="video/mp4" />
    Sorry, your browser doesn't support embedded videos.
</video>           */

           }
           </div>
          
      <div className="img-container">
      <img className="img-cover" width="4200" height="600" src={playerItem.imageSrc}/*"https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/c60bd07848ad25c1b43d432d6311e5824f338443f6277c5e4438230ee3c2d8c1._RI_V_TTW_.jpg"*/ alt={playerItem.slug}/>
      </div>

   </div>
   <Footer/>
         
   </>
   
        )


}