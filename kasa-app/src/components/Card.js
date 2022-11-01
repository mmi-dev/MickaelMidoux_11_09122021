import * as React from "react";
import {Link} from "react-router-dom";

const Card = (props)=>{

    return(
        <Link to={"/logement/"+props.lgtId}>
            <div className="card">
                <div className="card-img">
                    <img src={props.imgUrl} alt={props.title}/>
                </div>
                <h3 className="card-title">{props.title}</h3>
            </div>
        </Link>
        );
}

export default Card;