import React from "react";
import "./Input.scss";

export default function Input(props) {
  return (
      <input
        type="text"
        className="subscribe-form"
        placeholder={props.placeholder}
        onChange={e => props.setValue(e.target.value)}
        value={props.value}
      ></input>
  );
}