import React from "react";
import Typewriter from "typewriter-effect";

export default function Typing() {
  return (
    <div style={styles.wrapper}>
      <Typewriter
        options={{
          strings: [
            "Full Stack Developer",
            "React.js Developer",
            "Node.js Backend Developer",
            "Software Engineer",
          ],
          autoStart: true,
          loop: true,
          delay: 60,
          deleteSpeed: 35,
          pauseFor: 1800,
        }}
      />
    </div>
  );
}

const styles = {
  wrapper: {
    fontWeight: 800,
    letterSpacing: "1px",
  },
};
