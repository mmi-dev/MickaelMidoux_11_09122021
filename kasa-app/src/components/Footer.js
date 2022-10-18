import React from "react";
import logo_nb from "../img/logo_nb.svg";

export default function Footer(){

    const date = new Date()
    const year = date.getFullYear()

    return(
         <footer>
            <div className="logo-nb">
                <img src={logo_nb} alt="logo kasa"/>
            </div>
            <div className="copyright">
                &copy {year} Kasa. All rights reserved
            </div>
        </footer>
        );
}