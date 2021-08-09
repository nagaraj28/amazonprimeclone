import Header  from "../components/navbar";
import { Link, useHistory } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Context } from "../context/Context";
import { FireBaseContext } from "../context/firebase";
import classes from "./header.css"
export default function HeaderContainer() {
  const {isProfileExpand,profileExpand,searchUtil,profileName} = useContext(Context);
  const {firebase} = useContext(FireBaseContext);
  const history = useHistory();
  return (
    <Header >
    <Header.NavBar >
      <Link  to="/home">
      <Header.Logo style={{color:"white"}}>primevideo</Header.Logo>
      </Link>
    <Header.List>
      <Link to="/home">
      <Header.ListItem> Home </Header.ListItem>
      </Link>
      <Link to="/tvshows">
      <Header.ListItem> TVShows </Header.ListItem>
      </Link>
      <Link to="/movies">
      <Header.ListItem> Movies </Header.ListItem>
      </Link>
      <Link to="/kids">
      <Header.ListItem> Kids </Header.ListItem>
      </Link>  
      </Header.List>
      <Header.SearchContainer>
      <Header.SearchIcon src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAACZUlEQVRIia2VP0xTURSHv3O9pH3BDgZEIiQ64IAdSkpJiDEEE3ecDE7KZBRlJbobJ2M6QGQRXYhxksTRRIWSkPS9ikN16agGDJ1AAknb4+B7Bpv2vTb1N90/55zvnHvvO0+oUy6XS8Tj8RlgChgGeoFd4CvwxnGc5WQyuV/v10xyfJLP56dFJAv0hfjsiMjc6Ojo61YAJhh4nvdQRFb84OsiMm2MGXAcJ2atHVTVG0AOOKOqr1zXfdByBX7mK0AVuJ/JZJ41c3Bd9y6QBU6IyHRUJeKfecnP/E5Y8DrIArDtOM6FsDsx/oX2qepaK8EBMpnMIrAB9B8cHNwKszX8eS0YYxZbCR5IVRd8v6kowDCAiKy3A+jq6lrzQRejAD0AsVhstx1Ad3d3YN8TBSgDHB0d9bYDKJfLp4NhKEBVvwBUq9WJdgDW2sC+GAoQkVUAEZltNbiqSmAf+DcFOI6zDOwAl/33HSnXdWdV9RKwHY/HX4YCksnkvojMAQpkoyD5fP6eiDz1p0+iGt/fZuf3lkf+2oaqLlSr1fVEIvFzb2+vz1o7ISJB5oF2jTFX0+n050gAgOd511U1C/SHJLUNPAHm8Vu5qs6LyDljzFI6nf7RFABQLBZPHh4e3gSu+R9R8D8oisiqtfZFKpX6VSgUUrVa7Z2/H6hUqVSujI+Pf2sKaEee582o6vO65X8gpoFfy1LV8w2Wh6y17zc3NwehwwoKhcLZWq32ERhqsF2y1k52BADY2toaqFQqH5pAPnV0RAAjIyPfrbWTQKnBdk/HFQRqVImI3P5vgGOQt8ApVX08Nja29BvUdOySpS3laAAAAABJRU5ErkJggg=="/>
      <Header.SearchBox type="text-box" placeholder="Search"  onKeyPress={(e)=>{
        if(e.key==='Enter'){
          searchUtil(e.target.value)
        history.push("/search");
        }
         }}/>
      </Header.SearchContainer>
      <Header.Profile onClick={profileExpand} >
        <div style={{display:"flex"}}>
        <h3 className="proName" >{profileName}</h3>
        {
        isProfileExpand?(<span className="drpdwn">
            <svg width="30" height="17" xmlns="http://www.w3.org/2000/svg"><g> <title>background</title> <rect fill="none" id="canvas_background" y="-1" x="-1"/></g><g> <title>Layer 1</title> <polygon transform="rotate(-180 24,24) " id="svg_1" points="0,12.438 48,12.438 24,35.562 " fill="#cccccc"/> </g></svg>
            </span>):(<span className="drpdwn">
            <svg width="30" height="17" xmlns="http://www.w3.org/2000/svg"><g> <title>background</title> <rect fill="none" id="canvas_background" y="-1" x="-1"/></g><g> <title>Layer 1</title> <polygon transform="rotate(-180 24,24) " id="svg_1" points="0,12.438 48,12.438 24,35.562 " fill="#cccccc"/> </g></svg>

                        </span>)
}
       </div>
           
        <div style={{display:isProfileExpand?"block":"none"}}>
        <div style={{maxWidth:"100%",display:"flex",backgroundColor:"#0f171e",position:"absolute",zIndex:"5",right:"2%",lineHeight:"40px",color:"#c4cacf"}}>
          <ul style={{display:"flex",listStyle:"none",}}>
            <div style={{marginRight:"5em",}}>
            <li className="pro-list" onClick={()=>{
              history.push("/favourites")
            }}>Your Watchlist</li>
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
