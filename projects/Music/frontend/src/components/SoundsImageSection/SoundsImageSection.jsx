import React from "react";
import "./SoundsImageSection.css";
import femalesinger from "../../images/femaleSinger.png";
import image86 from "../../images/image86.png";

const SoundsImageSection = () => {
  return (
    <div className="soundimages">
      <div className="firstImg">
        <img src={image86} alt="" />
        <span>
          Vocal <strong>Future</strong> Electronica
        </span>
      </div>
      <img src={femalesinger} alt="" />
    </div>
  );
};

export default SoundsImageSection;
