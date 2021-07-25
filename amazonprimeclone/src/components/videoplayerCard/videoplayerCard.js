import React, { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./videoplayerCard.css"
import HeaderContainer from "../../container/header";
import Footer from "../../footer/footer";
import PlayVideo from "../playVideo/playVideo";
import { Context } from "../../context/Context";
export default function PlayerCard(props){
        const {playerItem} = useContext(Context);
        console.log(playerItem);
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
                  
                <span className="btn-borders">
                   <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg"><title>Add</title><path d="M3 12h18m-9 9V3" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"></path></svg>
                   </span>
                   <span  className="btn-borders">
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>Watch Party</title><g fill="none" fill-rule="evenodd" transform="rotate(45 13.621 11.293)"><polygon stroke="currentColor" stroke-linejoin="round" stroke-width="2" points="7.362 15.985 12.862 27.985 18.362 15.985"></polygon><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.20520683,12.8786797 C7.9841616,11.0305625 7.19297531,10.0986243 6.20520683,9.87867966"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.8890873,12.6109127 C20.4469968,9.53071743 18.8646243,7.97748706 16.8890873,7.6109127" transform="matrix(-1 0 0 1 37.778 0)"></path><circle cx="3.316" cy="7.49" r="1" fill="currentColor"></circle><circle cx="20.657" cy="11.879" r="1" fill="currentColor"></circle><circle cx="3.316" cy="11.732" r="1" fill="currentColor"></circle><circle cx="1.195" cy="9.611" r="1" fill="currentColor"></circle><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12.557293,13.0753788 C14.5891901,10.5746233 14.5891901,4.94159902 11.0953579,4.94159902 C8.22476933,4.94159902 8.63047547,8.5284102 10.8269766,8.5284102 C13.5809029,8.5284102 16.0116573,2.4313965 11.751917,0.0753787975"></path></g></svg>
                   </span>
                </div>
                 


           {
                   /*
 <video width="100%" height="600" controls>
    <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
            type="video/webm" />
    <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
            type="video/mp4" />
    Sorry, your browser doesn't support embedded videos.
</video>

                   */

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