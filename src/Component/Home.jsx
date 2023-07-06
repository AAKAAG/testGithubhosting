import React from "react";

import { App } from '../App'
import NavX from '../NavX'
import Pano from '../Pano'
import Hero from '../Hero'
import { Suspense } from 'react'
import Card from "./Card";



function Home(){
    return (

        <>
        <div className="container-fluid">     
        <Hero/>
        <Card/>
       
        </div>
    </>

    );
}

export default Home;