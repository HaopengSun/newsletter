import React, { useState, useEffect } from "react";
import Button from "../button/Button";
import Form from "../form/Form";
import Nav from "../nav/Nav";
import Content from "../content/Content";
import useTimeout from "../../hooks/timeout";

import "./Subscribe.scss"

export default function Subscribe() {

  const [width, setWindowWidth] = useState(
    window.innerWidth > 1023 ? window.innerWidth * 0.5 : window.innerWidth * 0.8
  );

  const [sub, setSub] = useState(false)

  useEffect(() => { 
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => {
      window.removeEventListener("resize",updateDimensions);
    };
  }, [])

  const updateDimensions = () => {
    const width = window.innerWidth > 1023 ? window.innerWidth * 0.5 : window.innerWidth * 0.8
    setWindowWidth(width)
  }

  const { style, handleChat } = useTimeout(width);

  return (
    <div>
      <Nav />
      <Content />
      <span className="newsletter">
        {sub ? <p style={{color: "white"}}>You successfully subscribe the newsletter!</p> :
          <div>
            <p>Subscribe Newsletter and get latest news!</p>
            <Button sub onClick={handleChat}>Subscribe</Button>
          </div>}
      </span>
      <Form style={style} handleChat={handleChat} setSub={setSub}/>
    </div>
  )
}