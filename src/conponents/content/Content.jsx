import React, { useEffect, useState } from "react";
import Card from "../card/Card";
import axios from 'axios';
import arrow from '../../assets/arrow.png'
import "./Content.scss";

export default function Content() {
  const [services, setServices] = useState([])
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    axios.get('./data.json').then(response => {
      setServices(response.data)
    })
  }, [])

  const nextSlide = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 3)
      : setCurrentSlide(currentSlide < services.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="content">
      <div className="top">
        <h1>We Deploy</h1>
        <h1 className="change">Customized Digital & Cognitive Solutions</h1>
        <h1>to integrate technologies</h1>
        <h1>at the core of your business model</h1>
        <br/>
        <br/>
      </div>
      <div className="down">
        <div className="service" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
          {services.map((service, idx) => 
            <Card key={idx} title={service.title} content={service.content}/>
          )}
        </div>
        <div className="arrows">
          <img src={arrow} className="arrow left" alt="arrow" onClick={() => nextSlide("left")}/>
          <img src={arrow} className="arrow right" alt="arrow" onClick={() => nextSlide()}/>
        </div>
      </div>
    </div>
  )
}