"use client";

import React from "react";
import { Button } from "./Button";

const Hero = () => {
  return (
    <div className="hero-container">
      <video src="/videos/video1.mp4" autoPlay loop muted playsInline />
      <h1>Precision. Integrity. Shine.</h1>
      <p>Cleaning solutions designed for businesses and homes.</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          SERVICES
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={() => console.log("hey")}
        >
          GET A QUOTE <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
};

export default Hero;
