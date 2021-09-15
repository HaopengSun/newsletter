import React from "react";

import "./Nav.scss";

export default function Nav() {
   return (
    <div className="topnav" id="myTopnav">
      <a href="#home" id="home">Home</a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
      <a href="#classname" className="icon">
        <i className="fa fa-bars"></i>
      </a>
    </div>
   )
}