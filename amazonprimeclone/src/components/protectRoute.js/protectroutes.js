import React, { useContext } from "react";
import { Redirect, Route } from "react-router";
import { Context } from "../../context/Context";



export default function ProtectedRoute({component:Component,...rest}){
    const {userId} = useContext(Context);

    return (
        <Route  {...rest} render={props=>{
            if(userId&&userId!=="dummy")
            return (<Component {...rest}{...props}/>)
            else
            return (<Redirect to={
            {
              pathname:'/signin',
              state: {
                from: props.location
              }
            }
          } />)}}  />
        
    )
}