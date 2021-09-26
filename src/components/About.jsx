import React from 'react'
import { useState } from "react";

function About( { count } ) {
    const [like, increaseLike] = useState(count);
    return (
        <>
        <div className="aboutContainer">
            <div className="likes">
                <p>Likes { like }+</p>
                <button onClick={ ()=> {
                    increaseLike( like + 1 );
                } } >Like me</button>
            </div>
            <div className="aboutMe">
                <p>UG : Computer Science Engineering | 2020 - 2024</p><br></br>
                <p>Hse : Computer Science | 2020 | 83.66 %</p><br></br>
                <p>Sslc : Matriculation | 2018 | 87.8 %</p>
            </div>
        </div>
        <div className="location">
                <p> 
                    <span className="material-icons">location_on</span>
                    <br></br>
                    Madurai, Tamil Nadu, India 
                </p>
            </div>
        </> 
    )
}

export default About
