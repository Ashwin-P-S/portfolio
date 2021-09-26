import React from 'react'
import fb from './images/fb.png';
import github from './images/github.png';
import instagram from './images/instagram.png';
import linkedin from './images/linkedin.png';
function Contact() {
    return (
        <div className="contact">
        <div className="contactContainer">
        <span className="material-icons">email</span>&nbsp;
        <a href="mailto:ashwinsiva54@gmail.com"> Gmail: ashwinsiva54 </a>
        </div>
        <div className="socialContainer">
            <a href="https://ashwin-p-s.github.io/socialmedia" target="_blank" rel="noreferrer"> Stay Connected to My Socials  </a>
            <div className="imageContainer">
            <img src={ linkedin } alt="linkedin" />
            <img src={ github } alt="github" />
            <img src={ instagram } alt="instagram" />
            <img src={ fb } alt="fb" />
            </div>
        </div>
        </div>
    )
}

export default Contact
