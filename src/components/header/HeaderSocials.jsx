import React from "react";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a href="https://www.linkedin.com/in/aman-rai-ji/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/amanraiji1" target="_blank">
        <BsGithub />
      </a>
      <a href="https://www.instagram.com/amanraiji18/" target="_blank">
        <BsInstagram />
      </a>
    </div>
  );
};

export default HeaderSocials;
