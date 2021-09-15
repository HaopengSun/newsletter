import React from "react";

import "./Button.scss";

const classNames = require('classnames');

export default function Button(props) {
   let buttonClass = classNames('button', {
      'button--confirm': props.confirm,
      'button--danger': props.danger,
      'button--close': props.close
   });
   return <button 
      className={buttonClass}
      onClick={props.onClick}
      >{props.children}</button>;
}