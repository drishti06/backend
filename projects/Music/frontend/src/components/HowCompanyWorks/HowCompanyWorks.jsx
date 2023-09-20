import React from "react";
import "./HowCompanyWorks.css";
import girlSinger from "../../images/girl-singing.jpg";
import taylorSwift from "../../images/taylor-swift.jpg";

const HowCompanyWorks = () => {
  return (
    <>
      <div className="company-works">
        <div className="company-works-left">
          <h1>how company works?</h1>
          <div className="taylor-swift">
            <img src={taylorSwift} alt="" />
          </div>
        </div>
        <div className="company-works-right">
          <img src={girlSinger} alt="" />
        </div>
      </div>
    </>
  );
};

export default HowCompanyWorks;
