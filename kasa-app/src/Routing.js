import React from 'react';
import{Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Logement from "./pages/Logement";
import NotFound from "./pages/NotFound";
import logementsData from "./data/logements.json";

const Routing = ()=>{
    return(
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/logement/:lgtId"  element={<Logement lgtDetails={logementsData[0]}/>} />
        <Route path="*" element={<NotFound />} />
    </Routes>
    )
    }

export default Routing