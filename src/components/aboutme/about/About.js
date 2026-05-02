import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

const highlights = [
  "Full Stack Developer skilled in React.js, Node.js, JavaScript, SQL, and MySQL.",
  "Built real-world projects including Foodies App, Portfolio, Automation, and AI-based detection system.",
  "Strong foundation in Python, Java, problem-solving, and database concepts.",
  "Fast learner with interest in scalable web apps, SaaS products, and AI-powered solutions.",
];

const About = () => {
  return (
    <Container>
      <Row className="mt-5 align-items-center">
        <Col md={5}>
          <Slide left>
            <lottie-player
              src="https://assets5.lottiefiles.com/packages/lf20_iv4dsx3q.json"
              background="transparent"
              speed="1"
              style={{ width: "100%", height: "360px" }}
              loop
              autoplay
            ></lottie-player>
          </Slide>
        </Col>

        <Col md={7}>
          <Fade duration={1800}>
            <div style={styles.card}>
              <span style={styles.badge}>Why Hire Me?</span>

              <h2 style={styles.title}>
                I build clean, responsive, and practical web applications.
              </h2>

              <p style={styles.text}>
                Hi, I’m <b className="purple">Vinay Reddy</b>, a{" "}
                <b className="purple">Full Stack Developer</b> and{" "}
                <b className="purple">
                  Information Science and Engineering graduate
                </b>{" "}
                from East Point College of Engineering and Technology,
                Bengaluru.
              </p>

              <div style={styles.list}>
                {highlights.map((item, index) => (
                  <div key={index} style={styles.listItem}>
                    <span style={styles.check}>✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Fade>
        </Col>
      </Row>
    </Container>
  );
};

export default About;

const styles = {
  card: {
    padding: "32px",
    borderRadius: "24px",
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(251,217,173,0.2)",
    backdropFilter: "blur(12px)",
  },
  badge: {
    display: "inline-block",
    padding: "8px 14px",
    borderRadius: "999px",
    background: "rgba(251,217,173,0.12)",
    color: "#fbd9ad",
    fontWeight: 800,
    marginBottom: "16px",
  },
  title: {
    color: "#fbd9ad",
    fontSize: "clamp(24px, 4vw, 36px)",
    fontWeight: 900,
    lineHeight: 1.25,
    marginBottom: "18px",
  },
  text: {
    fontSize: "17px",
    lineHeight: "1.8",
    color: "#e8dff5",
  },
  list: {
    marginTop: "20px",
    display: "grid",
    gap: "14px",
  },
  listItem: {
    display: "flex",
    gap: "12px",
    color: "#d8c8e8",
    fontSize: "16px",
    lineHeight: 1.6,
  },
  check: {
    minWidth: "26px",
    height: "26px",
    borderRadius: "50%",
    background: "#fbd9ad",
    color: "rgb(78 22 112)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 900,
  },
};
