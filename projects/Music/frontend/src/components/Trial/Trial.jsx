import React from "react";
import "./Trial.css";
import drums from "../../images/drums.jpg";

const Trial = () => {
  return (
    <div className="trial">
      <img src={drums} alt="" />
      <div className="trail-content">
        <h1>Try Company name today</h1>
        <button>
          <a href="pricing" className="pricing">
            Try Free for 14 days
          </a>
        </button>
      </div>
    </div>
  );
};

export default Trial;
