import React from "react";
import "./Card.scss";

export default function Card(props) {
  return <div className="container">
    <div className="item">
      <div className="left">
        <div className="leftContainer">
          <div className="card">
            <div className="title">{props.title}</div>
            <p className="content">{props.content}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
}