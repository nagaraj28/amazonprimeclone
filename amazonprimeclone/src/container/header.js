import Header  from "../components/navbar";
import { Link, useHistory } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Context } from "../context/Context";
import { FireBaseContext } from "../context/firebase";
export default function HeaderContainer() {
  const {isProfileExpand,profileExpand,searchUtil,profileName} = useContext(Context);
  const {firebase} = useContext(FireBaseContext);
  const history = useHistory();
  return (
    <Header >
    <Header.NavBar >
      <Link  to="/home">
      <Header.Logo>primevideo</Header.Logo>
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
      <Header.SearchBox type="text-box" placeholder="Search" onChange={(e)=>{searchUtil(e.target.value)}}/>
      </Header.SearchContainer>
      <Header.Profile onClick={profileExpand} >
        <h3 >{profileName}</h3>
        <div style={{display:isProfileExpand?"block":"none"}}>
        <div style={{maxWidth:"100%",display:"flex",backgroundColor:"#0f171e",position:"absolute",zIndex:"5",right:"2%",lineHeight:"40px",color:"#c4cacf"}}>
          <ul style={{display:"flex",listStyle:"none",}}>
            <div style={{marginRight:"5em",}}>
            <li>Your Watchlist</li>
            <li>Account and Settings</li>
            <li>Watch Anywhere</li>
            <li>Your Watchlist</li>
            <li onClick={()=>{
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
            <li>Your Watchlist</li>
            <li>Account and Settings</li>
            <li>Watch Anywhere</li>
            <li>Your Watchlist</li>
            </div>
          </ul>
        </div>
        </div>
       
      </Header.Profile>
    </Header.NavBar>
    </Header>
 
  );
}
