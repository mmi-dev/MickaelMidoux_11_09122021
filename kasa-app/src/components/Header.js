import React from "react";
import {Link, NavLink} from "react-router-dom";
import logo from "../img/logo.svg";

export default function Header(){

    let activeClassName = "active-page"

    return(
        <header>
            <div className="logo">
            <Link to="/"><img src={logo} alt="logo kasa"/></Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink 
                            to="." 
                            className={({ isActive }) => isActive ? activeClassName : undefined }
                            end
                        >
                            Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="About" 
                            className={({ isActive }) => isActive ? activeClassName : undefined }
                        >
                            A Propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
        );
}