import React from "react";
import "./Slogan.css";
import drums from "../../images/drums.jpg";

const Slogan = () => {
  return (
    <>
      <div className="slogan">
        <img src={drums} alt="" />
        <h1>
          "Every time we open upp company name, we find the sounds we need. We
          can't live without."
        </h1>
      </div>
    </>
  );
};

export default Slogan;
