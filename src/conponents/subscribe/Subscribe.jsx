import React from "react";
import Button from "../button/Button"
import Input from "../input/Input"

export default function Subscribe() {

  function confirm(){
    console.log('confirm')
  }

  function validation(){
    console.log('validation')
  }

  return (
  <>
  <section className="subscribe_card subscribe_card--create">
    <h2>Subscribe</h2>
    <form autoComplete="off" className="subscribe_form" onSubmit={event => {
      event.preventDefault()
      validation()
    }}>
      <Input placeholder="Name"/>
      <Input placeholder="Company"/>
      <Input placeholder="Email"/>
      <div>
        <Button confirm onClick={confirm}>Confirm</Button>
        <Button danger onClick={confirm}>Clear</Button>
      </div>
    </form>
  </section>
  </>
  )
}