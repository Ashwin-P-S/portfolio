import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

function NavBar() {

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
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

    <div className="navbar" >

      <div className="menuBtn">
        <div className="menu" onClick={toggleNav} >
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
          <div className="linksContainer" data-aos={"fade-down"}>
            <Link to='/' className="links" onClick={toggleNav} data-aos={"fade-left"} data-aos-duration={"800"} > Home </Link>
            <Link to='/projects' className='links' onClick={toggleNav} data-aos={"fade-left"} data-aos-duration={"1200"}> Projects </Link>
            <Link to='/about' className="links" onClick={toggleNav} data-aos={"fade-left"} data-aos-duration={"1600"}> About  </Link>
            {/* <Link to='/contact' className="links" >  Contact  </Link> */}
          </div>
        )
      }

    </div>
  )
}

export default NavBar
