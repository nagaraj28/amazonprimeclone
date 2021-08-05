import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FireBaseContext } from "../../context/firebase";
import { Context } from "../../context/Context";



export default function SignIn(){
    const [email,setEmail]=useState('');
    const [password,setPassword] = useState('')
    const [error,setError] = useState('')
    const history = useHistory();
    const {firebase} = useContext(FireBaseContext);
    const {userNameAndId} = useContext(Context);
 const loginfunc=()=>{
        console.log("login page submit")
      console.log(email);
    console.log(password);
                    firebase.auth().signInWithEmailAndPassword(email, password).then(()=>{
                        userNameAndId(); 
                     history.push("/home")
                }).catch(err=>{setError("incorrect details")});
            }
    return(
        <Link to="/signin">
            <h1>SignIn</h1>
            <h1 style={{color:"red"}}>{error}</h1>
            Email
                <input type="textbox" onChange={(e)=>{
                setEmail(e.target.value)
            }}/><br/>
                Password
                <input type="password" onChange={(e)=>{
                setPassword(e.target.value)
            }}/><br/>
            <button onClick={()=>{loginfunc()}}>submit</button>
            </Link>
    )

}