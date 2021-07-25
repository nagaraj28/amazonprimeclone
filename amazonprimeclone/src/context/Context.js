import React,{useState, createContext, useContext,useEffect} from "react";
import { FireBaseContext } from "./firebase";


export  const Context = createContext();
export default function ContextProvider({children}){
    const [isProfileExpand,setProfileExpand] = useState(false);
    const [genre,setGenre]  = useState(null);
    const [searchText,setSearchText]  = useState('');
    const [playerItem,setplayerItem]  = useState({});
    const [profileName,setProfileName]=useState('SystemName');
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
      function userName(){
        const user = firebase.auth().currentUser;
        if(user!==null){
          const updateName = user.displayName;
          if(updateName)
         setProfileName(user.displayName);
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
  return (<Context.Provider value={{isProfileExpand,profileExpand,genre,genreUtil,searchText,searchUtil,profileName,userName,playerItem,playerItemUtil}}>
        {children}
    </Context.Provider>)
}
