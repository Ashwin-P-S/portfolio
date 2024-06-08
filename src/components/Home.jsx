import React from 'react'
import './styles/home.css'

import avatar from './assets/mf-avatar.svg'
import happy from './assets/happy.png'
import whatIDo from './assets/whatIDo.svg'

import html from './assets/techStack/html.svg'
import javascript from './assets/techStack/javascript.svg'
import php from './assets/techStack/php.svg'
import mysql from './assets/techStack/mysql.svg'
import mongoDb from './assets/techStack/mongodb.svg'
import expressJs from './assets/techStack/expressjs.svg'
import reactJs from './assets/techStack/reactjs.svg'
import nodeJs from './assets/techStack/nodejs.svg'


function Home() {

    return (
        <div className='wrap' data-aos={"fade-down"} data-aos-duration="500">
            <div className="container" >
                <div className="profile">
                    <img src={avatar} alt="avatar" />
                </div>
                <div className="content">
                    <p> I'm <strong> Ashwin</strong> </p>
                    <p>Web Developer | DSA Enthusiast</p>
                    <p> Computer Science Student <a href='https://psnacet.edu.in' target={"_blank"} rel={"noreferrer"} >@Psnacet</a></p>
                </div>
            </div>

            <div className="subContainer">
                <div className="subContent">
                    <div className='myContent'>
                        <p className="whatIDo"> What I do? </p>
                        <div className='whatBox'>
                            <img src={whatIDo} alt="whatIDo" />
                        </div>
                        <p>
                            I design and code beautifully simple things and
                            I love what I do. <br /> <br /> I like to code things from scratch and
                            enjoy bringing ideas to life in the browser
                        </p>
                        <br />
                        <p>
                            - Always be Happy -
                        </p>
                        <img src={happy} alt="happy" id="happyIcon" />
                    </div>
                    <div className='tech-stack'>
                        <p className="whatIDo">What Tech Stack I use? </p>
                        <hr />
                        <div className="laravel">
                            <img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" alt="Laravel Logo" id="laravel"></img>
                        </div>
                        <hr />
                        <div className='php-mysql'>
                            <img src={php} alt="php" id="php" />
                            <img src={mysql} alt="mysql" id="mysql" />
                        </div>
                        <hr />
                        <div className="web">
                            <img src={html} alt="html" />
                            <img src="https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg" alt="css" />
                            <img src={javascript} alt="javascript" id="javascript" />
                        </div>
                        <hr />
                        <div className="mern">
                            <img src={mongoDb} alt="mongoDB" />
                            <img src={expressJs} alt="expressJs" />
                            <img src={reactJs} alt="reactJs" />
                            <img src={nodeJs} alt="nodeJs" />
                        </div>
                        <hr />
                    </div>
                </div>
                <p>
                    Keep smiling be'coz life is a beautiful thing and there's so much to smile about
                </p>
            </div>
        </div>
    )
}

export default Home
