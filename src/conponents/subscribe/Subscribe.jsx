import React, { useState } from "react";
import Button from "../button/Button"
import Form from "../form/Form"
import Nav from "../nav/Nav"
import Content from "../content/Content"

import "./Subscribe.scss"

export default function Subscribe() {

  const [popup, setPopup] = useState(false)

  function popupForm(){
    setPopup(!popup)
  }

  return (
    <div>
      <Nav />
      <Content />
      <span className="newsletter">
        <p>Subscribe Newletter!</p>
        <Button confirm onClick={popupForm}>Subscribe</Button>
      </span>
      <Form popup={popup} popupForm={popupForm}/>
    </div>
  )
}