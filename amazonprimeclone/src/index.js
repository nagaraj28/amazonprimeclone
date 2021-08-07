import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import  ContextProvider from "./context/Context"
import {FireBaseContext} from "./context/firebase"
import SignIn from './components/login/signin';
import {Switch,Route} from "react-router-dom"


/*import {seedDatabase} from './seed';*/

const config = {
  apiKey: "AIzaSyBtMzh4l7bx8EPC3WpIFyMPzKH0vxGHbY8",
    authDomain: "primeclone-6674f.firebaseapp.com",
    databaseURL: "https://primeclone-6674f-default-rtdb.firebaseio.com",
    projectId: "primeclone-6674f",
    storageBucket: "primeclone-6674f.appspot.com",
    messagingSenderId: "413398665069",
    appId: "1:413398665069:web:3439e17d7e4b3879a13c64",
    measurementId: "G-066TPG4YKQ"
}

const firebase = window.firebase.initializeApp(config);
/*seedDatabase(firebase);*/
ReactDOM.render(
  <FireBaseContext.Provider value={{firebase: window.firebase}}>
      <ContextProvider>
     <Router>
<App />
</Router>
  </ContextProvider>
  </FireBaseContext.Provider>
    ,
  document.getElementById('root')
);

