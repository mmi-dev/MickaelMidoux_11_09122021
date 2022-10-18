import React from "react";
import {Link} from "react-router-dom";
import logo from "../img/logo.svg";

export default function Header(){
    return(
        <header>
            <div className="logo">
                <img src={logo} alt="logo kasa"/>
            </div>
            <nav>
                <ul>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/About">A Propos</Link></li>
                </ul>
            </nav>
        </header>
        );
}