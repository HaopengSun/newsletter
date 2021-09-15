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

  return <section className="subscribe" style={props.style}>
      <Button className="back" close onClick={props.handleChat}>back</Button>
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
          <Button confirm onClick={() => {
            confirm()
            props.handleChat()
          }}>Confirm</Button>
          <Button danger onClick={confirm}>Clear</Button>
        </div>
      </form>
    </section>
}