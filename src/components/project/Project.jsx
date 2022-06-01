import React from "react";
import "./project.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG6 from "../../assets/portfolio6.png";

const data = [
  {
    id: 1,
    image: IMG6,
    title: "Portfolio",
    github: "https://github.com/amanraiji1/Weather-App",
    demo: "https://weather-app-ejs-node.herokuapp.com/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Queen Visualizer",
    github: "https://github.com/amanraiji1/Queen-Visualizer",
    demo: "https://amanraiji1.github.io/Queen-Visualizer/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Simon Game",
    github: "https://github.com/amanraiji1/Simon-Game",
    demo: "https://amanraiji1.github.io/Simon-Game/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Typing Game",
    github: "https://github.com/amanraiji1/Typing-Game",
    demo: "https://amanraiji1.github.io/Typing-Game/",
  },
  {
    id: 5,
    image: IMG1,
    title: "Music Player",
    github: "https://github.com/amanraiji1/Music-player",
    demo: "https://amanraiji1.github.io/Typing-Game/",
  },
  {
    id: 6,
    image: IMG1,
    title: "Weather App",
    github: "https://github.com/amanraiji1/Weather-App",
    demo: "https://weather-app-ejs-node.herokuapp.com/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent</h5>
      <h2>Projects</h2>
      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
