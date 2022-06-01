import React from "react";
import "./footer.css";
import { BsFacebook, BsLinkedin, BsInstagram, BsTwitter } from "react-icons/bs";
const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        AR
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experiences">Skills</a>
        </li>
        <li>
          <a href="#portfolio">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/aman-rai-ji/" target="_blank">
          <BsLinkedin />
        </a>
        <a href="https://www.facebook.com/the007amanrai" target="_blank">
          <BsFacebook />
        </a>
        <a href="https://www.instagram.com/amanraiji18/" target="_blank">
          <BsInstagram />
        </a>
        <a href="https://twitter.com/AmanRai09792754" target="_blank">
          <BsTwitter />
        </a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Aman Rai. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
