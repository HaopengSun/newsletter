import React, {useRef, useEffect} from "react";
import { init } from "ityped"

import "./Content.scss";

export default function Content() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Consulting Services", "SIA Custom Services", "Deployment & Support", "Products & Solutions"]
    })
  })

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