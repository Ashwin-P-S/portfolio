import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div className="navbar">
          <div className="welcome">
            <p>Hey there, Welcome !</p>
          </div>
          <div className="linksContainer">
          <Link to='/' className="links">  Home  </Link>
          <Link to='about' className="links" > About  </Link>
          <Link to='/contact' className="links" >  Contact  </Link>
          </div>
        </div>
    )
}

export default NavBar
