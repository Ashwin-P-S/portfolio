import React from 'react'
import avatar from './assets/mf-avatar.svg'
import happy from './assets/happy.png'
import whatIDo from './assets/whatIDo.svg'
import './styles/home.css'

function Home() {

    return (
        <div className='wrap' data-aos={"fade-down"} data-aos-duration="500">
            <div className="container" >
                <div className="profile">
                    <img src={avatar} alt="avatar" />
                </div>
                <div className="content">
                    <p> I'm <strong> Ashwin</strong> </p>
                    <p> Computer Science Student @<a href='https://psnacet.edu.in' target={"_blank"} rel={"noreferrer"} >Psnacet</a></p>
                </div>
            </div>

            <div className="subContainer">
                <div>
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
                    <img src={happy} alt="happy" />
                </div>
                <p data-aos={"fade-down"} data-aos-duration="800" >
                    Keep smiling be'coz life is a beautiful thing and there's so much to smile about
                </p>
            </div>
        </div>
    )
}

export default Home
