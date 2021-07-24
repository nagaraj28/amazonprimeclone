import React from "react";
import { Link } from "react-router-dom";
import classes from "./gridCards.css"
export default function GridCard({dataItem}) {
    console.log(dataItem);
   return(
      <Link to="/player">
     {/* <div className="cardcontainer-box">    */}
          <div className="card-container">
       <div className="cardImage">
       <img src={dataItem.imageSrc} alt="img1"/>
        </div>
        <div className="cardtext" > 
        <div className="card-btns-ctnr">
           <div style={{display:"flex",marginRight:"6em"}}>
           <Link to="/player/playvideo">
           <span style={{}}>
               <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
               width="85" height="85"
               viewBox="0 0 172 172"
               style={{fill:"#000000;"}}><g transform="" ><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{mixBlendMode:"normal"}}><path d="M0,172v-172h172v172z" fill="none"></path><path d="M86,120.4c-18.9986,0 -34.4,-15.4014 -34.4,-34.4v0c0,-18.9986 15.4014,-34.4 34.4,-34.4h0c18.9986,0 34.4,15.4014 34.4,34.4v0c0,18.9986 -15.4014,34.4 -34.4,34.4z" fill="#ffffff"></path><g fill="#000000"><path d="M86,57.33333c-15.8326,0 -28.66667,12.83407 -28.66667,28.66667c0,15.8326 12.83407,28.66667 28.66667,28.66667c15.8326,0 28.66667,-12.83407 28.66667,-28.66667c0,-15.8326 -12.83407,-28.66667 -28.66667,-28.66667zM80.26667,96.03333v-20.06667c0,-1.18107 1.34733,-1.85473 2.29333,-1.14667l13.37873,10.03333c0.7654,0.57333 0.7654,1.72 0,2.29333l-13.37873,10.03333c-0.946,0.70807 -2.29333,0.0344 -2.29333,-1.14667z"></path></g></g></g></svg>
                             </span>
                 </Link>
           <span style={{ marginTop:"32px"}}>Play</span>
          </div>
           <div style={{display:"flex",marginTop:"30px"}}>
           <span style={{marginRight:""}}>
           <svg width="30px" height="30px" xmlns="http://www.w3.org/2000/svg"><title>Add</title><path d="M3 12h18m-9 9V3" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"></path></svg>
             </span> 
             <span className="">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" height="20px" width="20px" ><path fill="currentColor" fill-rule="evenodd" d="M12,20 C10.152,20 8.455,19.367 7.1,18.314 L18.314,7.1 C19.367,8.455 20,10.152 20,12 C20,16.418 16.418,20 12,20 M4,12 C4,7.582 7.582,4 12,4 C13.848,4 15.545,4.633 16.9,5.686 L5.686,16.9 C4.633,15.545 4,13.848 4,12 M12,2 C6.477,2 2,6.477 2,12 C2,17.523 6.477,22 12,22 C17.523,22 22,17.523 22,12 C22,6.477 17.523,2 12,2" transform="translate(-2 -2)"></path></svg>
                   </span>
           </div>
        </div>
        <div style={{marginLeft:"2rem",marginRight:"2rem",marginTop:"3rem",color:"white"}}>
        <p>included with prime</p>
     <h4>{dataItem.title}</h4>
     <p>{dataItem.description}</p>
        </div>
       </div>
  </div>
    {/* </div> */}
      </Link>
);
}