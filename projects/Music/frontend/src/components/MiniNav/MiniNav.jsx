import React from "react";
import "./MiniNav.css";

const MiniNav = ({ isRedVersion }) => {
  return (
    <>
      {isRedVersion ? (
        <div className="mininav mininav-red">
          <span>
            For a limited time, subscribe to here and get Live music lite for
            free. Get started
          </span>
        </div>
      ) : (
        <div className="mininav mininav-white">
          <span>You are currently viewing company sounds</span>
        </div>
      )}
    </>
  );
};

export default MiniNav;
