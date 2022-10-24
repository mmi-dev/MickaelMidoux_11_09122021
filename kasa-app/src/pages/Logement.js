import React from "react";
import{useParams} from "react-router-dom";
import Carousel from "../components/Carousel";
import DropDown from "../components/DropDown";
import Rating from "../components/Rating";
import logementsData from "../data/logements.json";
import NotFound from "./NotFound";

export default function Logement(){
    // recuperation de l'id du logement dans l'url
    let { lgtId } = useParams();

    // recuperation des details du logement dans le fichier json à partir de l'id
    const idList = logementsData.map(lgt => lgt.id)
    const lgtIndex = idList.indexOf(lgtId)
    const lgtDetails = logementsData[lgtIndex]
    if(lgtIndex<0){
        return <NotFound/>
    }else{
        return(
            <main className="lgt">
                <Carousel className="lgt-pictures" pictures={lgtDetails.pictures}/>
                <div className="lgt-details">
                    <div className="lgt-details-g">
                        <div className="lgt-title">
                            {lgtDetails.title}
                        </div>
                        <div className="lgt-location"> 
                            {lgtDetails.location}
                        </div>
                        <div className="lgt-tag">
                        {lgtDetails.tags.map((tag, index)=> <span key={index}>{tag}</span>)}
                        </div>
                    </div>
                    <div className="lgt-details-d">
                        <div className="lgt-host">
                            <div className="lgt-host__name">
                                <span>{lgtDetails.host.name.split(' ')[0]}</span>
                                <span>{lgtDetails.host.name.split(' ')[1]}</span>
                            </div>
                            <img className="lgt-host__picture" src={lgtDetails.host.picture} alt="logo kasa"/>
                        </div>
                        <div className="lgt-rating">
                            <Rating rate={lgtDetails.rating} nbStars={5}/>
                        </div>
                    </div>
                </div>
            
                <div className="dropdown_wrapper">
                    <div className="lgt-description">
                        <DropDown 
                            title="Description"
                            content={lgtDetails.description}
                            state="closed"
                        />
                    </div>
                    <div className="lgt-equipements">
                        <DropDown 
                            title="Equipements"
                            content={
                                <ul>
                                    {lgtDetails.equipments.map( (eqt, index) => <li key={index} >{eqt}</li>)}
                                </ul>
                            }
                            state="closed"
                        />
                    </div>
                </div>
            </main>
        );
    }
}