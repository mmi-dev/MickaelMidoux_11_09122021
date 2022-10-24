import React from "react";

export default function Banner(props){

 const getBackgroundUrl = () => {
        return <img src={props.bgImg} alt="logo kasa" />;
    }

    return(
         <div className="banner">
            <div className="background">{getBackgroundUrl()}</div>
            <div className="overlay"></div>
            <div className="title">
                 {props.title}
            </div>
        </div>
        );

}