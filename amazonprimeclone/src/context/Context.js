import React,{useState, createContext, useContext} from "react";
import { FireBaseContext } from "./firebase";
import { useFavContent } from "../hooks";
import { favselectionMap } from "../utils";


export  const Context = createContext();
export default function ContextProvider({children}){
    const [isProfileExpand,setProfileExpand] = useState(false);
    const [genre,setGenre]  = useState(null);
    const [searchText,setSearchText]  = useState('');
    const [playerItem,setplayerItem]  = useState({});
    const [profileName,setProfileName]=useState('SystemName');
    const [userId,setUserId]=useState("dummy");
    const [currentTypeValue,setCurrentType]=useState("series");

    const {firebase} = useContext(FireBaseContext);
      function profileExpand() {
        console.log("profile clicked")
        setProfileExpand(!(isProfileExpand))
      }     
     
      function genreUtil(section) {
        console.log("section")
        setGenre(section);
      }     
      function searchUtil(searchvalue) {
        console.log("searchText")
        setSearchText(searchvalue);
      }     
      function userNameAndId(){
        console.log("setting up username and id call")
        const user = firebase.auth().currentUser;
        if(user!==null){
          const updateName = user.displayName;
          if(updateName){
            console.log(user.uid)
            setProfileName(user.displayName);
            setUserId(user.uid);
          }
         else
         setProfileName("no-userName");
      }
      else{
        setProfileName("SystemName");
      }

    }
    function playerItemUtil(dataValue){
      setplayerItem(dataValue);
    }
    function currentType(value){
      setCurrentType(value);
    }

    function addToFavourites(dataItem,type,docId){
      console.log("add clicked"+docId);
            firebase.firestore().collection("users").doc(userId).collection(type).doc(docId).set(dataItem); 
    }

    function deleteFromFavourites(type,docId){
      console.log("delete from favourites "+docId);
            firebase.firestore().collection("users").doc(userId).collection(type).doc(docId).delete(); 
    }
    
  return (<Context.Provider value={{isProfileExpand,profileExpand,genre,genreUtil,searchText,searchUtil,profileName,userNameAndId,playerItem,playerItemUtil,addToFavourites,currentType,currentTypeValue,deleteFromFavourites,userId}}>
        {children}
    </Context.Provider>)
}
