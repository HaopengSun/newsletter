import React, { useState } from "react";
import icon from '../../assets/icon.jpeg'

import "./Nav.scss";

export default function Nav(props) {
  const [open, setOpen] = useState(false)
  const isMobile = window.innerWidth <= 768;
  const style = open ? { right: "0" } : { right: "-500px" }

  const closeMenu = () => {
    if (isMobile) setOpen(!open)
  }

  return (
  <div className={"topnav " + (props.menuOpen && "active")}>
    <div className="left" style={style}>
      <img src={icon} alt="icon" />
      <a href="#home" id="home" onClick={closeMenu}>SIA Innovations</a>
      <a href="#news" onClick={closeMenu}>News</a>
      <a href="#contact" onClick={closeMenu}>Contact</a>
      <a href="#about" onClick={closeMenu}>About</a>
    </div>
    <div className="right" onClick={closeMenu}>
      <span className="line1"></span>
      <span className="line2"></span>
      <span className="line3"></span>
    </div>
  </div>
  )
}