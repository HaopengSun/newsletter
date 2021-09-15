import React from "react";

import "./Button.scss";

const classNames = require('classnames');

export default function Button(props) {
   let buttonClass = classNames('button', {
      'button--confirm': props.confirm,
      'button--danger': props.danger,
      'button--close': props.close,
      'button--sub': props.sub,
   });
   return <button
      type={props.type ? props.type : "text"}
      className={buttonClass}
      onClick={props.onClick}
      >{props.children}</button>;
}