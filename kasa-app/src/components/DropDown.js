import * as React from "react";
import arrow from "./../img/arrow.svg"

const DropDown = (props)=>{
    const [state, setState] = React.useState(props.state)


    const handelClick = (e)=>{
        if( state === "closed" ){
            e.target.parentElement.classList.add("open")
            e.target.parentElement.parentElement.nextElementSibling.classList.add("open")
            setState("open")}
        else{
            e.target.parentElement.classList.remove("open")
            e.target.parentElement.parentElement.nextElementSibling.classList.remove("open")
            setState("closed")
        }
    }


    return(
         <div className="dropdown">
            <div className="dropdown-header">
                <h3>{props.title}</h3>
                <span className= {"arrow "+(state==="open"?state:"")}  ><img src={arrow} alt="arrow" onClick={handelClick}/></span>
            </div>
            <div className={"dropdown-content "+(state==="open"?state:"")}>
            <div className="dropdown-content-text">   
            {props.content}</div>
            </div>
        </div>
        );
}

export default DropDown;