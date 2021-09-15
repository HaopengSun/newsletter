import React from "react";
import "./Input.scss";

export default function Input(props) {
  return (
      <input 
        className="subscribe-form"
        placeholder={props.placeholder}
        onChange={e => props.setValue(e)}
      ></input>
  );
}