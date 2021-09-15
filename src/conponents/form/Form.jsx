import React, { useState } from "react";
import Button from "../button/Button"
import Input from "../input/Input"

import "./Form.scss"

export default function Form(props) {

  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [email, setEmail] = useState('')

  function confirm(){
    console.log(name, company, email)
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
          <Input setValue={setName} placeholder="Name"/>
          <Input setValue={setCompany} placeholder="Company"/>
          <Input setValue={setEmail} placeholder="Email"/>
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