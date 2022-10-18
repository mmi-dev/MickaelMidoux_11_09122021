import React from "react";

export default function Banner(props){


    return(
         <div className="banner">
            <div className="background">{getBackgroundUrl()}</div>
            <div className="overlay"></div>
            <div className="title">
                 {props.title}
            </div>
        </div>
        );

    function getBackgroundUrl() {
        return <img src={props.bgImg} alt="logo kasa" />;
    }
}