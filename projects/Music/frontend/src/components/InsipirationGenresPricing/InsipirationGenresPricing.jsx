import React from "react";
import "./InsipirationGenresPricing.css";
import ariana from "../../images/ariana-grande.webp";
import mic from "../../images/studio-mic.jpg";
import manGuitar from "../../images/man-guitar.jpg";

const InsipirationGenresPricing = () => {
  return (
    <>
      <div className="inspiration">
        <div className="inspiration-left">
          <h1>Limitless inspiration from hundreds of genres</h1>
          <span>
            Combine samples from house to cinematic, techno to trap, and EDM to
            ambient to create something unique. We've traveled around the world
            to record inspiring samples—from glaciers in Iceland to abandoned
            mines in Utah.
          </span>
        </div>
        <div className="inspiration-right">
          <div className="mic">
            <img className="imgs" src={mic} alt="" />
          </div>
          <div className="ariana">
            <img className="imgs" src={ariana} alt="" />
          </div>
          <div className="manGuitar">
            <img className="imgs" src={manGuitar} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default InsipirationGenresPricing;
