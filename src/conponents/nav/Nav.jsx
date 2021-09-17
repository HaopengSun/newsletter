import React from "react";
import icon from '../../assets/icon.jpeg'

import "./Nav.scss";

export default function Nav(props) {
   return (
    <div className={"topnav " + (props.menuOpen && "active")}>
      <div className="left">
        <img src={icon} alt="icon" />
        <a href="#home" id="home">SIA Innovations</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
      <div className="right" onClick={() => props.setMenuOpen(!props.menuOpen)}>
        <span className="line1"></span>
        <span className="line2"></span>
        <span className="line3"></span>
      </div>
    </div>
   )
}