import React,{useState,useEffect,useContext} from "react"
import Fuse from "fuse.js";
import Home from "./pages/home";
import {Switch,Route} from "react-router-dom"
import Movies from "./pages/movies";
import Kids from "./pages/kids";
import TVShows from "./pages/tvShows";
import PlayerCard from "./components/videoplayerCard/videoplayerCard";
import PlayVideo from "./components/playVideo/playVideo";
import { useContent } from "./hooks";
import { selectionMap } from "./utils";
import Register from "./components/login/registration";
import SignIn from "./components/login/signin";
import Genre from "./pages/genre";
import Search from "./pages/search";
import { Context } from "./context/Context";
import HeaderContainer from "./container/header";
import Footer from "./footer/footer";

function App() {

  /*let ref1=useRef(null);
  let ref2=useRef(null);
  let ref3=useRef(null);
*/

const {series} = useContent('series');
    const {movies} = useContent('movies');
    const dataCollection = selectionMap({series,movies});
   
    return (
    <>
 <Switch>
 <Route exact path="/signin">
   <SignIn/>
   </Route>
 <Route exact path="/register">
   <Register/>
   </Route>
   <Route exact path="/home">
   <Home dataCollection={dataCollection}/>
   </Route>
   <Route exact path="/movies">
    <Movies dataCollection={dataCollection}/>
   </Route>
   <Route exact path="/tvshows">
    <TVShows dataCollection={dataCollection}/>
   </Route>
   <Route exact path="/kids">
    <Kids dataCollection={dataCollection}/>
   </Route>
   <Route exact path="/player">
    <PlayerCard dataCollection={dataCollection}/>
   </Route>
   <Route exact path="/player/playVideo">
    <PlayVideo dataCollection={dataCollection}/>
   </Route>
   <Route exact path="/genre">
    <Genre dataCollection={dataCollection}/>
   </Route>
   <Route exact path="/search">
    <Search dataCollection={dataCollection}/>
   </Route>
 </Switch>
    </>
       )
}

export default App;
