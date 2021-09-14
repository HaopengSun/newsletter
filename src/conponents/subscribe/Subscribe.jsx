import React, { useState } from "react";
import Button from "../button/Button"
import Input from "../input/Input"

import "./Subscribe.scss"

const classNames = require('classnames');

export default function Subscribe() {

  const [popup, setPopup] = useState('false')

  function confirm(){
    console.log('confirm')
  }

  function validation(){
    console.log('validation')
  }

  let subscribeForm = classNames('subscribe', {'subscribe--popup': popup});

  return (
    <div>
      <Button confirm onClick={confirm}>Subscribe</Button>
      <div className={subscribeForm}>
        <section className="subscribe">
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
            </div>
          </form>
        </section>
      </div>

    </div>
  )
}