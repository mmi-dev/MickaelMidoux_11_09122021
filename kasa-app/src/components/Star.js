import React from "react";

export default function Star(props){

    return(
        <svg id="img" width="24" height="24" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_8_185)">
                <path id="star" d="M21.645 15L18 3L14.355 15H3L12.27 21.615L8.745 33L18 25.965L27.27 33L23.745 21.615L33 15H21.645Z" fill={props.color}/>
            </g>
            <defs>
                <clipPath id="clip0_8_185">
                    <rect width="36" height="36" fill="white"/>
                </clipPath>
            </defs>
    </svg>
        );
}