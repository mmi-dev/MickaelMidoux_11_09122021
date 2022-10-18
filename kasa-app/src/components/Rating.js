import React from "react";
import Star from "../components/Star";
import Colors from "../sass/_color.module.scss";


export default function Rating(props){

    const [currentRate, setCurrentRate] = React.useState(props.rate)
    const [overValue, setOverValue] = React.useState(undefined)

    const nbStars = Array(props.nbStars).fill(0)
    // const nbStars = Array(5).fill(0)

    const handleClick = (rate)=>{
        setCurrentRate(rate)
    }
    const handleMouseOver = rate=>{
        setOverValue(rate)
    }
    const handleMouseLeave = ()=>{
        setOverValue(undefined)
    }

    return(
            <div className="rating">
                {
                nbStars.map((_,index)=><span className="star"
                    key={index}
                    onClick={()=>handleClick(index+1)}
                    onMouseOver={()=>handleMouseOver(index+1)}
                    onMouseLeave={()=>handleMouseLeave()}
                    ><Star 
                        color={(overValue || currentRate) > index ? Colors.primary : Colors.star}
                    /></span>
                )}
            </div>
        );
}