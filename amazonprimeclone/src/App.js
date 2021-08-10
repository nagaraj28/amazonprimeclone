import React,{useState,useEffect,useContext} from "react"
import Fuse from "fuse.js";
import Home from "./pages/home";
import {Switch,Route} from "react-router-dom"
import Movies from "./pages/movies";
import Kids from "./pages/kids";
import TVShows from "./pages/tvShows";
import PlayerCard from "./components/videoplayerCard/videoplayerCard";
import PlayVideo from "./components/playVideo/playVideo";
import { useContent,useFavContent } from "./hooks";
import { selectionMap,favselectionMap } from "./utils";
import Register from "./components/login/registration";
import SignIn from "./components/login/signin";
import Genre from "./pages/genre";
import Search from "./pages/search";
import HeaderContainer from "./container/header";
import { Context } from "./context/Context";
import Favourites from "./pages/favourites";
import { FireBaseContext } from "./context/firebase";
import ProtectedRoute from "./components/protectRoute.js/protectroutes";

  
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
   <ProtectedRoute exact path="/" dataCollection={dataCollection} component={Home}/>
   <ProtectedRoute exact path="/movies" dataCollection={dataCollection} component={Movies}/>
   <ProtectedRoute exact path="/tvshows" dataCollection={dataCollection} component={TVShows}/>
   <ProtectedRoute exact path="/kids" dataCollection={dataCollection} component={Movies}/>
   <ProtectedRoute exact path="/player" dataCollection={dataCollection} component={PlayerCard}/>
   <ProtectedRoute exact path="/player/playVideo" dataCollection={dataCollection} component={PlayVideo}/>
   <ProtectedRoute exact path="/genre" dataCollection={dataCollection} component={Genre}/>
   <ProtectedRoute exact path="/search" dataCollection={dataCollection} component={Search}/>
   <ProtectedRoute exact path="/favourites" component={Favourites}/>
 </Switch>
    </>
       )
}

export default App;
