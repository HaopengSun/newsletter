import React, { useState } from "react";
import Button from "../button/Button"
import Input from "../input/Input"

import "./Form.scss"

export default function Form(props) {

  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [email, setEmail] = useState('')
  const [subscribe, setSubscribe] = useState(false)

  const [error, setError] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  function confirm(){
    console.log(name, company, email, subscribe)
  }

  function validation(){
    if (!name || !company || !email) {
      console.log('error!')
      setError(true)
      setErrorMsg('Please complete form filling!')
      return true
    } else if (!email.includes("@")){
      setError(true)
      setErrorMsg('Please input valid email!')
      return true
    } else {
      setError(false)
      return false
    }
  }
  
  function reset(){
    setError(false)
    setName('')
    setCompany('')
    setEmail('')
    setSubscribe(false)
  }
  
  return <section className="subscribe" style={props.style}>
      <div className="back" >
        <Button close onClick={props.handleChat}>Later</Button>
      </div>
      <h1 className="title">Subscribe Now!</h1>
      <form autoComplete="off" className="subscribe_form" onSubmit={event => {
        event.preventDefault();
        if (!validation()){
          confirm();
          props.handleChat();
          reset();
        }
      }}>
        <div>
          <Input setValue={setName} value={name} placeholder="Name"/>
          <Input setValue={setCompany} value={company} placeholder="Company"/>
          <Input setValue={setEmail} value={email} placeholder="Email"/>
          <div className="checkbox">
            <Input type="checkbox"  setValue={setSubscribe} value={subscribe} placeholder="Email"/>
            <label for="vehicle1">Would you like to receive emails from SIA innovations?</label><br></br>
          </div>
        </div>
        <div className="error">{error && <p className="errorMeg">{errorMsg}</p>}</div>
        <div className="buttons">
          <Button confirm type="submit">Confirm</Button>
          <Button danger onClick={reset}>Clear</Button>
        </div>
      </form>
    </section>
}