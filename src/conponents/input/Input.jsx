import React from "react";
import "./Input.scss";

export default function Input(props) {
  const className = props.type ? "checkbox" : "subscribe-form"
  return (
      <input
        type={props.type ? props.type : "text"}
        className={className}
        placeholder={props.placeholder}
        onChange={e => props.setValue(props.type ? e.target.checked : e.target.value)}
        value={props.value}
      ></input>
  );
}