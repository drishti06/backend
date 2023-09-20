import React from "react";
import "./Subscribe.css";

const Subscribe = () => {
  return (
    <div className="subscribe">
      <div className="sub-content">
        <div className="subscribe-top">
          <h1>Subscribe</h1>
          <span>After Subscription you will get latest updates.</span>
        </div>
        <hr />
        <div className="subscribe-bottom">
          <span>Enter Email address</span>
          <input type="text" placeholder="mail@abc.com" />
          <button>
            <a href="$">Subscribe</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
