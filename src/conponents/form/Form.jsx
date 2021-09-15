import React from "react";
import Button from "../button/Button"
import Input from "../input/Input"

import "./Form.scss"

export default function Form(props) {

  function confirm(){
    console.log('confirm')
  }

  function validation(){
    console.log('validation')
  }

  return ( props.popup ?
    (<section className="subscribe">
      <h1 className="title">Subscribe Now!</h1>
      <form autoComplete="off" className="subscribe_form" onSubmit={event => {
        event.preventDefault();
        validation();
      }}>
        <div>
          <Input placeholder="Name"/>
          <Input placeholder="Company"/>
          <Input placeholder="Email"/>
        </div>
        <div>
          <Button confirm onClick={confirm}>Confirm</Button>
          <Button danger onClick={confirm}>Clear</Button>
          <Button close onClick={props.popupForm}>back</Button>
        </div>
      </form>
    </section>) : '')
}