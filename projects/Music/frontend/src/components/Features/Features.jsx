import React from "react";
import { FaMugHot } from "react-icons/fa";
import { BsFillHeartFill } from "react-icons/bs";
import "./Features.css";


const Features = () => {
  return (
    <>
      <div className="main-features">
        <div className="main-feature">
          <FaMugHot />
          <span className="feature-title">100% royalty-free </span>
          <span className="description">
            Use samples to create anything. They're cleared for commercial use
            in new works.
          </span>
        </div>
        <div className="main-feature ">
          <BsFillHeartFill />
          <span className="feature-title">Yours Forever</span>
          <span className="description">
            Keep everything you download, even if you cancel.
          </span>
        </div>
        <div className="main-feature">
          <FaMugHot />
          <span className="feature-title">No commitements</span>
          <span className="description">
            Cancel your subscription at any time, no questions asked.
          </span>
        </div>
      </div>
    </>
  );
};

export default Features;
