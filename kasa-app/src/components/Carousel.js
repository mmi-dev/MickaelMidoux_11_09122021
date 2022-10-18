import React, {useState} from "react";
import arrow from "./../img/arrow.svg"

export default function Carousel({pictures}){
    const nbPictures = pictures.length
    const [currentPicture, setCurrentPicture]=useState(0)
    const prevPicture = ()=>{
        setCurrentPicture(currentPicture===0?pictures.length-1:currentPicture-1)
    }
    const nextPicture = ()=>{
        setCurrentPicture(currentPicture===pictures.length-1?0:currentPicture+1)
    }

    return(
            <div className="carousel">
                <div className="carousel_wrapper">
                    {pictures.map((image,index)=>{
                        return(
                            <div
                            key={index}
                            className={index===currentPicture?"carousel_picture carousel_picture-active":"carousel_picture"}

                            >
                                <img className="carousel_image" src={image} alt=""/>
                            </div>

                        )
                    })}
                    {nbPictures > 1 
                        ? 
                            <>
                            <span className="arrow-prev"><img src={arrow} alt="arrow" onClick={prevPicture}/></span>
                            <span className="arrow-next"><img src={arrow} alt="arrow" onClick={nextPicture}/></span>
                            <span className="pagination">{currentPicture+1+" / "+nbPictures}</span>
                            </>
                        : 
                            <></>
                    }
                </div>
            </div>
        );
}