import React, { useState, useEffect } from "react";
import Button from "../button/Button"
import Form from "../form/Form"
import Nav from "../nav/Nav"
import Content from "../content/Content"

import "./Subscribe.scss"

export default function Subscribe() {

  const [width, setWindowWidth] = useState(0);
  const [style, setStyle] = useState({
    display: 'none'
  })

  useEffect(() => { 

    updateDimensions();

    window.addEventListener("resize", updateDimensions);
    return () => 
      window.removeEventListener("resize",updateDimensions);
   }, [])

  const updateDimensions = () => {
    const width = window.innerWidth > 1023 ? window.innerWidth * 0.5 : window.innerWidth * 0.8
    setWindowWidth(width)
  }

  const handleChat = () => {
    if (style.display === "none") {
      const newStyle = {
        display: "flex",
        flexDirection: "column",
        border: "3px solid black",
        borderRadius: "15px",
        position: "fixed",
        width: width,
        height: "80%",
        top: "40%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        background: "white",
        zIndex: "1",
        animation: "slide-up 1s"
      }
      setStyle(newStyle)
    } else {
      const newStyle = {
        display: "none",
      }
      setStyle(newStyle)
    }
  }

  return (
    <div>
      <Nav />
      <Content />
      <span className="newsletter">
        <p>Subscribe Newletter!</p>
        <Button confirm onClick={handleChat}>Subscribe</Button>
      </span>
      <Form style={style} handleChat={handleChat}/>
    </div>
  )
}