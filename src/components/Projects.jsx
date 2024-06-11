import React from "react";
import "./styles/projects.css"

import works from "./assets/works.svg"
import php from './assets/techStack/php.svg'
import mysql from './assets/techStack/mysql.svg'
import reactJs from './assets/techStack/reactjs.svg'
import cProgram from './assets/techStack/cProgram.svg'

function Projects() {

    return (
        <div className="projectsBox" data-aos={"fade-down"} data-aos-duration="500">

            <div className="works" data-aos={"fade-down"} data-aos-duration="1000">

                <p> My Recent Work </p>
                <p> Here's a few projects I've developed </p>

            </div>

            <div className="img" data-aos={"fade-down"} data-aos-duration="1250">

                <img src={works} alt="works" />

            </div>

            <div className="worksBox" data-aos={"fade-down"} data-aos-duration="1500">

                <div className="projects">

                    <img src={reactJs} alt="reactJs" id="reactId" />

                    <h3> Weather App </h3>

                    <div className="desc">

                        <p>
                            The Weather Forecasting Application using API.
                            Get a quick Weather Forecast for any location. This Application was bootstrapped with Create-React-App
                        </p>

                    </div>

                    <div className="codeBtn">

                        <a className="input" href="https://weatherscrapper.netlify.app" target="_blank" rel="noopener noreferrer">
                            Visit {">"}
                        </a>

                        <a className="input" href="https://github.com/Ashwin-P-S/WeatherApp" target="_blank" rel="noopener noreferrer">
                            Code {">"}
                        </a>

                    </div>

                </div>

                <div className="projects">

                    <img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" alt="Laravel Logo" id="laravelId" />

                    <h3> ChatWelfare - Schemes for Physically Challenged Persons </h3>

                    <div className="desc">

                        <p>
                            Explore available support schemes for Physically Challenged Person. This project addresses the challenges faced by physically challenged individuals.
                        </p>

                    </div>

                    <div className="codeBtn">

                        <a className="input" href="https://github.com/Ashwin-P-S/ChatWelfare" target="_blank" rel="noopener noreferrer">
                            View Project {">"}
                        </a>

                    </div>

                </div>

                <div className="projects">

                    <div className="php-mysql-id">

                        <img src={php} alt="php" id="phpId" />
                        <img src={mysql} alt="mysql" id="mysqlId" />

                    </div>

                    <h3> AgroProducts </h3>

                    <div className="desc">

                        <p>
                            Agriculture products Shopping WebApp. AgroProduct System makes better connection among Farmers and Buyers ensures food quality and ignores Middleman.
                        </p>

                    </div>

                    <div className="codeBtn">

                        <a className="input" href="https://github.com/Ashwin-P-S/AgroProducts" target="_blank" rel="noopener noreferrer">
                            View Project {">"}
                        </a>

                    </div>

                </div>

                <div className="projects">

                    <img src={cProgram} alt="cProgram" id="cProgram" />

                    <h3> Railway Reservation System </h3>

                    <div className="desc">

                        <p>
                            An Reservation System to Book / Cancel Tickets.
                            This is an Mini Project written in C Language
                        </p>

                    </div>

                    <div className="codeBtn">
                        <a className="input" href="https://github.com/Ashwin-P-S/MiniProject_RRS" target="_blank" rel="noopener noreferrer">
                            View Project {">"}
                        </a>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Projects