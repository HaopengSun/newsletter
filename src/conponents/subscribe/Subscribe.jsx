import React, { useState } from "react";
import Button from "../button/Button"
import Form from "../form/Form"
import Nav from "../nav/Nav"

import "./Subscribe.scss"

export default function Subscribe() {

  const [popup, setPopup] = useState(false)

  function popupForm(){
    setPopup(!popup)
  }

  return (
    <div>
      <Nav />
      <Button confirm onClick={popupForm}>Subscribe</Button>
      <Form popup={popup} popupForm={popupForm}/>
    </div>
  )
}