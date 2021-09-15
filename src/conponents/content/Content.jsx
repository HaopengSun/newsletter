import React, { useRef } from "react";
import Card from "../card/Card";

import "./Content.scss";

export default function Content() {
  const textRef = useRef();
  const services = ['Consulting Services', 'SIA Custom Services', 'Deployment & Support', 'Products & Solutions']

  return (
    <div className="content">
      <div className="top">
        <h2>We deploy</h2>
        <h1 className="change">customized digital & cognitive solutions</h1>
        <h2>to integrate technologies</h2>
        <h1>at the core of your business model</h1>
        <br/>
        <br/>
      </div>
      <div className="down">
        {services.map((service, idx) => <Card key={idx} service={service} />)}
      </div>
    </div>
  )
}