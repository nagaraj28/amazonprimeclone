
import React from "react";
import {Logo} from "../components/navbar/styles/navbarStyles";
import classes from "./footer.css"
export default function Footer(){
    return (
        <div className="footer-container">
            <Logo className="footer-logoText">
                primevideo
            </Logo>
            <ul className="footer-list">
               <li className="footer-item">
                   <a href="#">Terms and Privacy Notice</a>
               </li>
               <li className="footer-item">
                   <a href="#">send us feedback</a>
               </li>
               <li className="footer-item">
                   <a href="#">Help</a>
               </li>
               
               <li>
                
                   © 1996-2021, Amazon.com, Inc. or its affiliate
               </li>

            </ul>
        </div>
    )
}