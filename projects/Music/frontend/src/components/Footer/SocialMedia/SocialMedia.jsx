import React from "react";
import "./SocialMedia.css";
import { BiCopyright } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <>
      <div className="socials">
        <div className="socials-left">
          <div>
            <BiCopyright />
            <span> 2023 company.com All Rights reserved</span>
          </div>
          <div>
            <span>Terms of use</span>
          </div>
          <div>
            <span>Privacy Policy</span>
          </div>
          <div>
            <span>Contact</span>
          </div>
          <div>
            <span>Help</span>
          </div>
        </div>
        <div className="socials-right">
          <FaFacebookF />
          <FaTwitter />
          <FaLinkedinIn />
          <FaInstagram />
        </div>
      </div>
    </>
  );
};

export default SocialMedia;
