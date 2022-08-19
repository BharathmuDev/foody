import React from "react";
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <TiSocialInstagram />
        <TiSocialLinkedin />
        <TiSocialFacebook />
        <TiSocialTwitter />
      </div>
      <p> &copy; 2022 foody.com</p>
    </div>
  );
}

export default Footer;
