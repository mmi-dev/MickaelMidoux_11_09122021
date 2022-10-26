import React from "react";
import Card from "../components/Card";
import Banner from "../components/Banner";
import logementsData from "../data/logements.json";
import homeBannerImg from "../img/home-banner.png";

export default function About(){

    return(
        <main>
            <Banner bgImg={homeBannerImg} title=""/>
            <div className="cards">
                { logementsData.map((lgt, index)=>
                    <Card 
                        title={lgt.title}
                        imgUrl={lgt.cover}
                        lgtId={lgt.id}
                        key={index}
                    />
                )}
            </div>

            </main>
        );
}