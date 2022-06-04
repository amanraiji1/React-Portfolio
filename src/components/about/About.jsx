import React from "react";
import "./about.css";
import ME from "../../assets/me-about.png";
import { GoHome } from "react-icons/go";
import { IoMdSchool } from "react-icons/io";
import { MdComputer } from "react-icons/md";

const about = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <GoHome className="about_icon" />
              <h5>Panipat</h5>
              <small>Haryana</small>
            </article>

            <article className="about_card">
              <IoMdSchool className="about_icon" />
              <h5>GJUS&T</h5>
              <small>Hisar</small>
            </article>

            <article className="about_card">
              <MdComputer className="about_icon" />
              <h5>Programmer</h5>
              <small>6★ Coder</small>
            </article>
          </div>

          <p>
            I am an ambitious and hardworking engineering student, currently
            pursuing B.Tech in Information Technology from Guru Jambheshwar
            University of Science and Technology. I have an excellent problem
            solving skills.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;
