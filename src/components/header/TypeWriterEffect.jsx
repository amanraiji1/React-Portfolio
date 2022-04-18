import React from "react";
import { Typewriter } from "react-simple-typewriter";

const TypeWriterEffect = () => {
  return (
    <div>
      <h5 style={{ fontSize: "1.5rem" }}>
        <span style={{ color: "var(--color-primary)", fontWeight: "bold" }}>
          <Typewriter
            words={["Fullstack Developer", "Programmer", "Student", "Learner!"]}
            loop="true"
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h5>
    </div>
  );
};

export default TypeWriterEffect;
