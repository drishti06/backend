import React from "react";
import "./Sample.css";
import img1 from "../../images/img1.png";

const Sample = () => {
  return (
    <>
      <div className="sample">
        <div className="sample-left">
          <img src={img1} alt="" />
          <img src={img1} alt="" />
          <img src={img1} alt="" />
          <img src={img1} alt="" />
        </div>
        <div className="sample-right">
          <h1>The highest-quality samples on the market </h1>
          <span>
            Make better music with masterfully-recored samples-carefully crafted
            by leading sound desings, breakthrough producers, and establised
            icons like Oliver, KSHMR and Murda Beatz.
          </span>
        </div>
      </div>
    </>
  );
};

export default Sample;
