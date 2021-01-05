import React from "react";
import logo from "../image_resources/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavBar() {
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
          <li><a href="#" className="current">Home</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </div>
    </nav>
  );
}
