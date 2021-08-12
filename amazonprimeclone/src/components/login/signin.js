import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FireBaseContext } from "../../context/firebase";
import { Context } from "../../context/Context";
import classes from  "./login.css";

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
                     history.push("/")
                }).catch(err=>{setError("incorrect details")});
            }
    return(
        <Link to="/signin">
                    <div className="body-ctnr">
            <div className="form-ctnr">
                             <div className="logo-txt">
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/avod/AV_Logo_150._CB430404026_.png"/>
                </div>
            <div className="form-ctnr1">
                <div className="form-sub-ctnr">
            <h1 className="title-txt">Sign-In</h1>
            <h1 style={{color:"red"}}>{error}</h1>
            <div className="field-ctnr">
                <span> Email or mobile phone number</span>
           <br/>
                <input className="txt-box" type="textbox" onChange={(e)=>{
                setEmail(e.target.value)
            }}/><br/>
            </div>
            <div className="field-ctnr">
            <span>Password</span><br/>
                <input  className="txt-box" type="password" onChange={(e)=>{
                setPassword(e.target.value)
            }}/><br/>
            </div>
            <div className="fieldctnrtxt">
            <p >By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
            </div>
            <div >
            <button  className="field-ctnr primary btn" onClick={()=>{loginfunc()}} disabled={password.length>=2&&email.length>=5?false:true} style={{border:"none"}}>Sign-In</button>
            </div>
            <div className="faded-txt">
            <h5 className="fade-ctnt" >New to Amazon?</h5>
            </div>
            <Link to="/register">
            <div >
            <button  className="field-ctnr secondary btn"  style={{border:"none"}}>Create your Amazon account</button>
            </div>
            </Link>
            </div>
            </div>
            </div>
            </div>
            </Link>

    )

}