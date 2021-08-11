import Header  from "../components/navbar";
import { Link, useHistory } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Context } from "../context/Context";
import { FireBaseContext } from "../context/firebase";
import { useWindowDimensions } from "../hooks";
import classes from "./header.css"
export default function HeaderContainer() {
  const {isProfileExpand,profileExpand,searchUtil,profileName,isNavOpen,updateNav,updateCurrNavItem,currNavItem} = useContext(Context);
  const {firebase} = useContext(FireBaseContext);
  const history = useHistory();
 
  console.log("width of screen",useWindowDimensions());
  const screenWidth=useWindowDimensions();
  return (
    <Header className="header" >
    <Header.NavBar >
      <Link  to="/"><Header.Logo  className="logotext" style={{color:"white"}} onClick={()=>{
        updateCurrNavItem("home");
      }}>primevideo</Header.Logo></Link>
     <div className="nav-list-ctnr">
     <div className="browseitem" onClick={()=>{
       updateNav();
     }}>
        <span className="brse-item">Browse</span>
      {
    !(isNavOpen)?(<span className="drpdwnup">
                      <svg width="40" height="17" xmlns="http://www.w3.org/2000/svg"><g> <title>background</title> <rect fill="none" id="canvas_background" y="-1" x="-1"/></g><g> <title>Layer 1</title> <polygon transform="rotate(-180 24,24) " id="svg_1" points="0,12.438 48,12.438 24,35.562 " fill="#cccccc"/> </g></svg>
            </span>):(

<span className="drpdwndown">
<svg width="10" height="10" xmlns="http://www.w3.org/2000/svg">
 <style type="text/css"></style>
 <g>
  <title>background</title>
  <rect fill="none" id="canvas_background" height="12" width="10" y="-1" x="-1"/>
 </g>
 <g>
  <title>Layer 1</title>
  <g stroke="null" id="svg_1">
   <polygon stroke="#b2b2b2" fill="#cccccc" id="svg_2" points="3.4399988651275635,6.900001799644542 8.879997253417969,0 -2,0 3.4399988651275635,6.900001799644542 " class="st0"/>
  </g>
 </g>
</svg>
</span>)
} </div>
        <div className={(screenWidth<=900&&isNavOpen===true)?"navlistctnr closeNav":"navlistctnr opennav"}>
      <div className="navlist" >
      <Link   to="/" onClick={()=>{
        updateCurrNavItem("home");
      }}><span className={currNavItem==="home"?"listItem activenavtitle":"listItem"} >Home</span></Link>
      <Link  to="/tvshows" onClick={()=>{
        updateCurrNavItem("tvshows");
      }}>
      <span className={currNavItem==="tvshows"?"listItem activenavtitle":"listItem"}>
TVShows        </span>

      </Link>
      <Link  to="/movies" onClick={()=>{
        updateCurrNavItem("movies");
      }}>      <span className={currNavItem==="movies"?"listItem activenavtitle":"listItem"}>
Movies        </span>

      </Link>
      
      <Link  to="/kids"><span className={currNavItem==="kids"?"listItem activenavtitle":"listItem"} onClick={()=>{
        updateCurrNavItem("kids");
      }}>Kids </span>
      </Link>  
      </div>
      </div>
     </div>
     
     <Header.SearchContainer  >
      <Header.SearchIcon src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAACZUlEQVRIia2VP0xTURSHv3O9pH3BDgZEIiQ64IAdSkpJiDEEE3ecDE7KZBRlJbobJ2M6QGQRXYhxksTRRIWSkPS9ikN16agGDJ1AAknb4+B7Bpv2vTb1N90/55zvnHvvO0+oUy6XS8Tj8RlgChgGeoFd4CvwxnGc5WQyuV/v10xyfJLP56dFJAv0hfjsiMjc6Ojo61YAJhh4nvdQRFb84OsiMm2MGXAcJ2atHVTVG0AOOKOqr1zXfdByBX7mK0AVuJ/JZJ41c3Bd9y6QBU6IyHRUJeKfecnP/E5Y8DrIArDtOM6FsDsx/oX2qepaK8EBMpnMIrAB9B8cHNwKszX8eS0YYxZbCR5IVRd8v6kowDCAiKy3A+jq6lrzQRejAD0AsVhstx1Ad3d3YN8TBSgDHB0d9bYDKJfLp4NhKEBVvwBUq9WJdgDW2sC+GAoQkVUAEZltNbiqSmAf+DcFOI6zDOwAl/33HSnXdWdV9RKwHY/HX4YCksnkvojMAQpkoyD5fP6eiDz1p0+iGt/fZuf3lkf+2oaqLlSr1fVEIvFzb2+vz1o7ISJB5oF2jTFX0+n050gAgOd511U1C/SHJLUNPAHm8Vu5qs6LyDljzFI6nf7RFABQLBZPHh4e3gSu+R9R8D8oisiqtfZFKpX6VSgUUrVa7Z2/H6hUqVSujI+Pf2sKaEee582o6vO65X8gpoFfy1LV8w2Wh6y17zc3NwehwwoKhcLZWq32ERhqsF2y1k52BADY2toaqFQqH5pAPnV0RAAjIyPfrbWTQKnBdk/HFQRqVImI3P5vgGOQt8ApVX08Nja29BvUdOySpS3laAAAAABJRU5ErkJggg=="/>
      <Header.SearchBox className="search-box" type="text-box" placeholder="Search"  onKeyPress={(e)=>{
        if(e.key==='Enter'){
          searchUtil(e.target.value)
        history.push("/search");
        }
         }}/>
      </Header.SearchContainer>
      <Header.Profile onClick={profileExpand} >
        <div style={{display:"flex"}}>
          <span className="drpdwnup">
          <svg width="30" height="30.532" xmlns="http://www.w3.org/2000/svg"><g><title>background</title><rect fill="none" id="canvas_background" height="32.532" width="32" y="-1" x="-1"/></g><g><title>Layer 1</title><g stroke="null" id="svg_1"><path fill="#f76565" id="svg_2" d="m15.266,0.001c-8.430298,0 -15.266,6.834214 -15.266,15.265s6.835032,15.265 15.266,15.265c8.431639,0 15.266,-6.834214 15.266,-15.265s-6.834362,-15.265 -15.266,-15.265zm0,4.564413c2.789535,0 5.049998,2.261084 5.049998,5.049218c0,2.788805 -2.260462,5.049218 -5.049998,5.049218c-2.788194,0 -5.048657,-2.260414 -5.048657,-5.049218c0,-2.788134 2.260462,-5.049218 5.048657,-5.049218zm-0.003353,21.974492c-2.782159,0 -5.330292,-1.013196 -7.295708,-2.690234c-0.478781,-0.408363 -0.755052,-1.007161 -0.755052,-1.635464c0,-2.827696 2.288626,-5.090792 5.117054,-5.090792l5.875459,0c2.829098,0 5.109007,2.263096 5.109007,5.090792c0,0.628973 -0.27493,1.22643 -0.754382,1.634793c-1.964745,1.677708 -4.513549,2.690905 -7.296378,2.690905z"/></g><g id="svg_3"/><g id="svg_4"/><g id="svg_5"/><g id="svg_6"/><g id="svg_7"/><g id="svg_8"/><g id="svg_9"/><g id="svg_10"/><g id="svg_11"/><g id="svg_12"/><g id="svg_13"/><g id="svg_14"/><g id="svg_15"/><g id="svg_16"/><g id="svg_17"/></g></svg>
          </span>
        <p className="proName" >{profileName}</p>
        {
        isProfileExpand?(<span className="drpdwnup">
                      <svg width="40" height="17" xmlns="http://www.w3.org/2000/svg"><g> <title>background</title> <rect fill="none" id="canvas_background" y="-1" x="-1"/></g><g> <title>Layer 1</title> <polygon transform="rotate(-180 24,24) " id="svg_1" points="0,12.438 48,12.438 24,35.562 " fill="#cccccc"/> </g></svg>
            </span>):(

<span className="drpdwndown">
<svg width="10" height="10" xmlns="http://www.w3.org/2000/svg">
 <style type="text/css"></style>
 <g>
  <title>background</title>
  <rect fill="none" id="canvas_background" height="12" width="10" y="-1" x="-1"/>
 </g>
 <g>
  <title>Layer 1</title>
  <g stroke="null" id="svg_1">
   <polygon stroke="#b2b2b2" fill="#cccccc" id="svg_2" points="3.4399988651275635,6.900001799644542 8.879997253417969,0 -2,0 3.4399988651275635,6.900001799644542 " class="st0"/>
  </g>
 </g>
</svg>
</span>)
}
       </div>
        <div style={{display:isProfileExpand?"block":"none"}}>
        <div style={{maxWidth:"100%",display:"flex",backgroundColor:"#0f171e",position:"absolute",zIndex:"5",right:"2%",lineHeight:"40px",color:"#c4cacf"}}>
          <ul style={{display:"flex",listStyle:"none",}}>
            <div style={{marginRight:"5em",}}>
            <li className="pro-list" onClick={()=>{
              updateCurrNavItem("watchlist");
              history.push("/favourites")
            }} >Your Watchlist</li>
            <li className="pro-list">Account and Settings</li>
            <li className="pro-list">Watch Anywhere</li>
            <li className="pro-list">Help</li>
            <li className="pro-list" onClick={()=>{
               console.log("logging out current user...");
               firebase.auth().signOut().then(()=>{
                 console.log("signout successful");
                 history.push('/signin');
               }).catch((error)=>{
                 console.log(error);
               });
            }}>Not {profileName}?Sign out</li>
            </div>
            <div style={{paddingLeft:"2em",marginRight:"5em",borderLeft:"2px solid"}}>
            <li className="pro-list">Your Watchlist</li>
            <li className="pro-list">Account and Settings</li>
            <li className="pro-list">Watch Anywhere</li>
            <li className="pro-list">Your Watchlist</li>
            </div>
          </ul>
        </div>
        </div>
      </Header.Profile>
    
    </Header.NavBar>
    </Header>
 
  );
}
