import React from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser, AiOutlineBook } from "react-icons/ai";
import { GoProject } from "react-icons/go";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState } from "react"; //for changing active in nav

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experiences"
        onClick={() => setActiveNav("#experiences")}
        className={activeNav === "#experiences" ? "active" : ""}
      >
        <AiOutlineBook />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <GoProject />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
