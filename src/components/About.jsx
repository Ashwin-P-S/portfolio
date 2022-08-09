import React from 'react'
import { useState } from "react";
import "./styles/about.css"
import degree from "./assets/degree.svg"
import location from "./assets/location.svg"
import github from "./assets/github.svg"
import twitter from "./assets/twitter.svg"
import linkedin from "./assets/linkedin.svg"
import mail from "./assets/mail.svg"

function About({ count }) {
    const [like, increaseLike] = useState(count);
    return (
        <div className='aboutWrap' data-aos={"fade-down"} data-aos-duration="500">
            <div className='about'>

                <div className="aboutMe">
                    <div className="deg">
                        <p>  Education </p>
                        <div>
                            <img src={degree} alt="degree" />
                        </div>
                    </div>
                    <div className="score">
                        <p>
                            <span> UG </span>
                            <br /> <br />
                            Computer Science and Engineering
                            <br />
                            2020 - 2024
                        </p>
                    </div>
                </div>

                <div className="aboutMe">
                    <div className="deg">
                        <p>  Location </p>
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
            <div className="socialBox">
                <div className="connect">
                    <p>
                        Let's Connect!
                    </p>
                </div>
                <div className="social">
                    <a href="https://twitter.com/ashwinsiva54" target="_blank" rel="noopener noreferrer">
                        <img src={twitter} alt="twitter" />
                    </a>
                    <a href="https://github.com/Ashwin-P-S" target="_blank" rel="noopener noreferrer">
                        <img src={github} alt="github" />
                    </a>
                    <a href="https://www.linkedin.com/in/ashwin-p-s-465397202/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedin} alt="linkedin" />
                    </a>
                    <a href="mailto:ashwinsiva54@gmail.com" target="_blank" rel="noopener noreferrer">
                        <img src={mail} alt="mail" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default About
