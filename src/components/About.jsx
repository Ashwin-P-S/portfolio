import React from 'react'
import { useState } from "react";
import degree from "./assets/degree.svg"
import location from "./assets/location.svg"
import "./styles/about.css"

function About({ count }) {
    const [like, increaseLike] = useState(count);
    return (
        <div className='about' data-aos={"fade-down"} >

            <div className="aboutMe">
                <div className="deg">
                    <p> My Education </p>
                    <div>
                        <img src={degree} alt="degree" />
                    </div>
                </div>
                <div className="score">
                    <p>
                        <span>UG</span>
                        <br /> <br />
                        Computer Science and Engineering
                        <br />
                        2020 - 2024
                    </p>
                </div>
            </div>

            <div className="aboutMe">
                <div className="deg">
                    <p> My Location </p>
                    <div>
                        <img src={location} alt="location" />
                    </div>
                </div>
                <div className="location">
                    <p> I'm from Madurai. <br /> <br /> Tamil Nadu | India </p>
                </div>
            </div>

            <div className="aboutMe">
                <div className="like">
                    <p> Likes. </p>
                    <div>
                        <p> {like}+ </p>
                    </div>
                </div>
                <div className="likeBtn">
                    <button onClick={() => increaseLike(like + 1)} >Like Me</button>
                </div>
            </div>
        </div>
    )
}

export default About
