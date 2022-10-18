import React from "react";
import {Link} from "react-router-dom";

export default function NotFound(){
    return(
         <main>
        <div className="error">
            <div className="error-no"><span>404</span></div>
            <div className="error-comment"><span>Oups! La page que </span><span>vous demandez n'existe pas.</span></div>
            <div className="error-link"><Link to="/">Retour sur le page d'accueil</Link></div>
        </div>
        </main>
        );
}