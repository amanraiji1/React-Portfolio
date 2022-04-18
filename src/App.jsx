import React, { useState, useEffect } from "react";

import { css } from "@emotion/react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonial/Testimonial";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  const override = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
  `;

  return (
    <div>
      {loading ? (
        <ClimbingBoxLoader
          color={"var(--color-primary)"}
          loading={loading}
          size={30}
          css={override}
        />
      ) : (
        <div>
          <Header />
          <Nav />
          <About />
          <Experience />
          <Services />
          <Portfolio />
          <Testimonials />
          <Contact />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default App;
