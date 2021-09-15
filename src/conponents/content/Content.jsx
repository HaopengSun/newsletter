import React, { useRef } from "react";

import "./Content.scss";

export default function Content() {
  const textRef = useRef();

  return (
    <div className="content">
      <div className="left">
        <h1>We deploy</h1>
        <h1 className="change">customized digital & cognitive solutions</h1>
        <h1>to integrate technologies</h1>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Our service:
            <span ref={textRef}></span>
          </h2>
        </div>
      </div>
    </div>
  )
}