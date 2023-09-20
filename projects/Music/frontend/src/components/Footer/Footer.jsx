import React from "react";
import "./Footer.css";
import SocialMedia from "./SocialMedia/SocialMedia";
// import SocialMedia from "./SocialMedia/SocialMedia";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-top">
          <div className="footer-content">
            <h1>Logo</h1>
            <span>
              Subscribe to our newsletter <br />
              Get product updates, company news,and more.
            </span>
            <div>
              <button>
                <a href="subscribe" className="sub-btn">
                  SUBSCRIBE
                </a>
              </button>
            </div>
          </div>
          <div className="footer-content">
            <h3>Sounds</h3>
            <ul>
              <li>
                <a href="#">Overview</a>
              </li>
              <li>
                <a href="#">Browse the catalog</a>
              </li>
              <li>
                <a href="#">Trending sample packs</a>
              </li>
              <li>
                <a href="#">What's new</a>
              </li>
            </ul>
          </div>
          <div className="footer-content">
            <h3>Pricing</h3>
            <ul>
              <li>
                <a href="#">Sound+</a>
              </li>
              <li>
                <a href="#">Creator</a>
              </li>
              <li>
                <a href="#">Creator+</a>
              </li>
            </ul>
          </div>
          <div className="footer-content">
            <h3>FAQs</h3>
            <ul>
              <li>
                <a href="#">Download</a>
              </li>
              <li>
                <a href="#">Payment</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Register</a>
              </li>
            </ul>
          </div>
          <div className="footer-content">
            <h3>About</h3>
            <ul>
              <li>
                <a href="#">Plans</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-down">
          <SocialMedia />
        </div>
      </div>
    </>
  );
};

export default Footer;
