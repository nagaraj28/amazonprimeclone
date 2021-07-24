import React,{useContext, useState} from "react";
import { Link} from "react-router-dom";
import { FireBaseContext } from "../../context/firebase";



export default function Register(){
    const [email,setEmail]=useState('');
    const [password1,setPassword1] = useState('')
    const [password2,setPassword2] = useState('')
    const [firstName,setFirstName] = useState('')
    const [status,setStatus] = useState('');
    const {firebase} =useContext(FireBaseContext);
    const registerDetails=()=>{
        console.log("register page")
        console.log(status);
        firebase.auth().createUserWithEmailAndPassword(email, password1).then((result)=>{
            setStatus("registration Succesfull");
                result.user.updateProfile({
                    displayName:firstName,
                }).catch(err=>{setStatus(err)});
    })
    
}
    return(
        <Link to="/register">
             <h1 style={{color:"red"}}>{status}</h1>
            <h1>SignIn</h1>
            firstName:
                <input type="textbox" placeholder="firstName" onChange={(e)=>{
                setFirstName(e.target.value)
            }}/>
                Email:
                <input type="textbox" placeholder="email" onChange={(e)=>{
                setEmail(e.target.value)
            }}/>
              Password  <input type="password" placeholder="password" onChange={(e)=>{
                setPassword1(e.target.value)
            }}/>
              Reenter Password
                <input type="password" placeholder="password" onChange={(e)=>{
                setPassword2(e.target.value)
            }}/>
                <button onClick={registerDetails}>submit</button>
        </Link>
       
    )

}