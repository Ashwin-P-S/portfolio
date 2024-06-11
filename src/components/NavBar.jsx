import React from 'react';
import '../index.css';
import {useState, useEffect} from 'react';

function NavBar({setCurrentPage}) {

    const toggleNav = () => {
        setToggleMenu(!toggleMenu);
    }

    const changeCurrentPage = (n) => {
        setCurrentPage(n);
    }

    useEffect(() => {

        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', changeWidth);

    }, [])

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [toggleMenu, setToggleMenu] = useState(false);

    return (

        <div className="navbar">

            <div className="menuBtn">
                <div className="menu" onClick={toggleNav}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
            </div>

            <div className="welcome">
                <p> Hi, Nice to Meet You! </p>
            </div>

            {
                (toggleMenu || screenWidth > 600) && (
                    <div className="linksContainer">
                        <div className="links" onClick={() => {
                            toggleNav();
                            changeCurrentPage(1);
                        }}> Home <span></span></div>
                        <div className="links" onClick={() => {
                            toggleNav();
                            changeCurrentPage(2);
                        }}> Projects <span></span></div>
                        <div className="links" onClick={() => {
                            toggleNav();
                            changeCurrentPage(3);
                        }}> About <span></span></div>
                    </div>
                )
            }

        </div>
    )
}

export default NavBar
