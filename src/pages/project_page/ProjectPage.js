import React from "react";
import Particle from "../../Particle";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import { FaCode } from "react-icons/fa";

import hd from "../../images/hd.png";
import ci from "../../images/onboarding.png";
import pp from "../../images/portfolio.png";
import nyc from "../../images/nyc.png";
import meal from "../../images/meal.png";

export default function ProjectPage() {
  const projects = [
    {
      title: "The Foodies App",
      image: ci,
      desc: "Full-stack recipe application where users can explore meals, add recipes, and view detailed meal information.",
      tech: "React.js • Node.js • SQLite3",
    },
    {
      title: "Deep Learning Anomaly Detection",
      image: hd,
      desc: "Deep learning project for detecting unusual activity in fog-assisted Internet of Vehicles networks.",
      tech: "Python • Pandas • CNN • LR",
    },
    {
      title: "Instagram Automation",
      image: nyc,
      desc: "Automation tool built with Selenium to search users, like posts, and manage follow/unfollow actions.",
      tech: "Python • Selenium",
    },
    {
      title: "Personal Portfolio",
      image: pp,
      desc: "Responsive portfolio website to showcase skills, projects, certifications, resume, and journey.",
      tech: "React.js • Bootstrap • CSS",
    },
    {
      title: "AI-Powered Job Portal | Resume Parsing & GitHub Scoring",
      image: meal,
      desc: "Built a full-stack Job Portal that automates candidate screening using resume parsing and GitHub analysis.",
      tech: "HTML • CSS • JavaScript • PHP",
    },
  ];

  return (
    <section className="home-section">
      <Container fluid className="project-page-section">
        <Particle />

        <Container className="home-content">
          <Zoom left cascade>
            <h1 style={styles.heading}>Projects</h1>
          </Zoom>

          <p style={styles.subtitle}>
            A selection of projects built using web development, automation, and
            machine learning technologies.
          </p>

          <Row className="g-4 mt-4">
            {projects.map((project, index) => (
              <Col lg={4} md={6} sm={12} key={index}>
                <Fade bottom>
                  <div
                    style={styles.card}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-10px)";
                      e.currentTarget.style.boxShadow =
                        "0 18px 40px rgba(183, 124, 255, 0.35)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <div style={styles.imageBox}>
                      <img
                        src={project.image}
                        alt={project.title}
                        style={styles.image}
                      />

                      <a
                        href="https://github.com/Vinayreddy811892081"
                        target="_blank"
                        rel="noreferrer"
                        style={styles.codeBtn}
                      >
                        <FaCode />
                      </a>
                    </div>

                    <div style={styles.content}>
                      <h3 style={styles.title}>{project.title}</h3>
                      <p style={styles.desc}>{project.desc}</p>
                      <div style={styles.tech}>{project.tech}</div>
                    </div>
                  </div>
                </Fade>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </section>
  );
}

const styles = {
  heading: {
    textAlign: "center",
    color: "#fbd9ad",
    fontSize: "clamp(45px, 7vw, 90px)",
    fontWeight: 900,
    paddingTop: "110px", // 🔥 THIS IS THE KEY
  },

  subtitle: {
    textAlign: "center",
    color: "#d8c8e8",
    fontSize: "18px",
    maxWidth: "720px",
    margin: "15px auto 0",
    lineHeight: 1.7,
  },
  card: {
    height: "100%",
    minHeight: "420px",
    borderRadius: "22px",
    overflow: "hidden",
    background: "rgba(255, 255, 255, 0.06)",
    border: "1px solid rgba(251, 217, 173, 0.22)",
    backdropFilter: "blur(12px)",
    transition: "all 0.3s ease",
  },
  imageBox: {
    position: "relative",
    height: "190px",
    overflow: "hidden",
    background: "rgba(0,0,0,0.25)",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  codeBtn: {
    position: "absolute",
    right: "16px",
    bottom: "16px",
    width: "44px",
    height: "44px",
    borderRadius: "50%",
    background: "#fbd9ad",
    color: "rgb(78 22 112)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "18px",
    textDecoration: "none",
  },
  content: {
    padding: "22px",
  },
  title: {
    color: "#fbd9ad",
    fontSize: "22px",
    fontWeight: 800,
    minHeight: "55px",
  },
  desc: {
    color: "#ddd",
    fontSize: "15px",
    lineHeight: 1.7,
    minHeight: "105px",
  },
  tech: {
    marginTop: "18px",
    padding: "10px 12px",
    borderRadius: "12px",
    background: "#fbd9ad",
    color: "rgb(78 22 112)",
    fontSize: "13px",
    fontWeight: 800,
  },
};
