import React from "react";
import DropDown from "../components/DropDown";
import Banner from "../components/Banner";
import aboutData from "../data/about.json";
import aboutBannerImg from "../img/about-banner.png";

export default function About(){

    return(
        <main className="about-page">
            <Banner bgImg={aboutBannerImg} title={<><span>Chez vous, </span><span>partout ailleurs</span></>}/>
            <div className="dropdown_wrapper">
            {
            aboutData.map((about, index)=>
                <DropDown 
                    title={about.title}
                    content={about.content}
                    state='closed'
                    key={index}
                />
            )}
           </div>
        </main>
    );
}