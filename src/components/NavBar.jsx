import React from "react";
import logo from "../image_resources/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function NavBar() {

  const handleClick = (target) => {

    const homeBtn = document.getElementById('home-nav-btn')
    const aboutBtn = document.getElementById('about-nav-btn')
    
    if (target.id === homeBtn.id) {
      aboutBtn.className = ''
      return target.className === 'current' ? null : target.className = 'current'
    } else if (target.id === aboutBtn.id) {
      homeBtn.className = ''
      return target.className === 'current' ? null : target.className = 'current'
    }
  }

  return (
    <nav id="main-nav">
      <div className="container">
        <img src={logo} alt="NewsGrid Logo" className="logo" />
        <div className="social">
          <a href="http://facebook.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon className="fa-2x" icon={["fab", "facebook"]} />
          </a>
          <a href="http://twitter.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon className="fa-2x" icon={["fab", "twitter"]} />
          </a>
          <a href="http://instagram.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon className="fa-2x" icon={["fab", "instagram"]} />
          </a>
          <a href="http://youtube.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon className="fa-2x" icon={["fab", "youtube"]} />
          </a>
        </div>
        <ul>
          <Link to="/">
            <li id='home-nav-btn' onClick={e => handleClick(e.target)} className='current'>Home</li>
          </Link>
          <Link to="/about">
            <li id='about-nav-btn' onClick={e => handleClick(e.target)}>About</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
