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
        <div className="body-ctnr">
<div className="form-ctnr">
                 <div className="logo-txt">
    <img src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/avod/AV_Logo_150._CB430404026_.png"/>
    </div>
<div className="form-ctnr1">
    <div className="form-sub-ctnr">
<h1 className="title-txt">Create account</h1>
<h1 style={{color:"red"}}>{status}</h1>
<div className="field-ctnr">
Your Name<br/>
    <input className="txt-box" type="textbox" onChange={(e)=>{
    setFirstName(e.target.value)
}}/><br/></div>
<div className="field-ctnr">
Email<br/>
    <input className="txt-box" type="textbox" onChange={(e)=>{
    setEmail(e.target.value)
}}/><br/>
</div>
<div className="field-ctnr">
Password<br/>
    <input className="txt-box" type="password" onChange={(e)=>{
    setPassword1(e.target.value)
}}/><br/></div>
<div className="field-ctnr">
Re-enter password<br/>
    <input  className="txt-box" type="password" onChange={(e)=>{
    setPassword2(e.target.value)
}}/><br/>
</div>
<p style={{color:"red"}}>{ password1>1 && password2>1 && password1!==password2?"passwords mismatch":""}</p>
<div >
<button  className="field-ctnr primary btn" onClick={()=>{registerDetails()}} disabled={(email.length>10&&password1.length>3&&password2.length>3&&firstName.length>0)?false:true} style={{border:"none"}}>Create your Amazon account</button>
</div>
<div className="fieldctnrtxt">
<p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
</div>
<div className="fieldctnrtxt" >
            <p  className="link-text1">Already have an account? <Link className="link-text2" to="/signin">Sign-In</Link></p>
            </div>
</div>
</div>
</div>
</div>
</Link>
       
    )

}