import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import { FaCode } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";

import hd from "../../images/hd.png";
import ci from "../../images/onboarding.png";
import pp from "../../images/portfolio.png";
import nyc from "../../images/nyc.png";

export default function Projects() {
  const projects = [
    {
      title: "The Foodies App",
      image: ci,
      desc: "Full-stack recipe platform with meal browsing, recipe creation, database storage, and responsive UI.",
      tech: "React.js • Node.js • SQLite3",
      type: "Full Stack",
    },
    {
      title: "AI Anomaly Detection",
      image: hd,
      desc: "Deep learning system for detecting suspicious activity in fog-assisted Internet of Vehicles networks.",
      tech: "Python • Pandas • CNN • LR",
      type: "AI / ML",
    },
    {
      title: "Instagram Automation",
      image: nyc,
      desc: "Automation tool for search, like, follow, and unfollow workflows using browser automation.",
      tech: "Python • Selenium",
      type: "Automation",
    },
    {
      title: "Personal Portfolio",
      image: pp,
      desc: "Modern responsive portfolio to showcase skills, projects, resume, certifications, and contact details.",
      tech: "React.js • Bootstrap • CSS",
      type: "Frontend",
    },
  ];

  return (
    <Container fluid className="certificate-section" id="projects">
      <Container>
        <div style={styles.header}>
          <Zoom left cascade>
            <h1 className="aboutme-heading">Featured Projects</h1>
          </Zoom>

          <p style={styles.subtitle}>
            Real-world projects that demonstrate my skills in full-stack
            development, automation, and AI-based problem solving.
          </p>
        </div>

        <Row className="g-4">
          {projects.map((project, index) => (
            <Col lg={3} md={6} sm={12} key={index}>
              <Fade bottom>
                <div
                  style={styles.card}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-10px)";
                    e.currentTarget.style.boxShadow =
                      "0 18px 45px rgba(183,124,255,0.35)";
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

                    <span style={styles.typeBadge}>{project.type}</span>

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
                    <h5 style={styles.title}>{project.title}</h5>
                    <p style={styles.desc}>{project.desc}</p>
                    <div style={styles.tech}>{project.tech}</div>
                  </div>
                </div>
              </Fade>
            </Col>
          ))}
        </Row>

        <div style={styles.viewAllWrap}>
          <Link to="/projectspage" style={{ textDecoration: "none" }}>
            <button className="btn btn-primary">
              View All Projects <HiArrowRight className="viewArr" />
            </button>
          </Link>
        </div>
      </Container>
    </Container>
  );
}

const styles = {
  header: {
    marginBottom: "40px",
    textAlign: "center",
  },
  subtitle: {
    maxWidth: "760px",
    color: "#d8c8e8",
    fontSize: "17px",
    lineHeight: 1.7,
    margin: "10px auto 0",
  },
  card: {
    height: "100%",
    minHeight: "455px",
    borderRadius: "24px",
    overflow: "hidden",
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(251,217,173,0.22)",
    backdropFilter: "blur(12px)",
    transition: "all 0.3s ease",
  },
  imageBox: {
    position: "relative",
    height: "175px",
    overflow: "hidden",
    background: "rgba(0,0,0,0.25)",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  typeBadge: {
    position: "absolute",
    left: "14px",
    top: "14px",
    padding: "6px 10px",
    borderRadius: "999px",
    background: "rgba(18,11,36,0.78)",
    color: "#fbd9ad",
    fontSize: "12px",
    fontWeight: 900,
    border: "1px solid rgba(251,217,173,0.25)",
  },
  codeBtn: {
    position: "absolute",
    right: "14px",
    bottom: "14px",
    width: "42px",
    height: "42px",
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
    fontSize: "20px",
    fontWeight: 900,
    minHeight: "50px",
  },
  desc: {
    color: "#ddd",
    fontSize: "14px",
    lineHeight: 1.7,
    minHeight: "125px",
  },
  tech: {
    marginTop: "18px",
    padding: "10px 12px",
    borderRadius: "12px",
    background: "#fbd9ad",
    color: "rgb(78 22 112)",
    fontSize: "13px",
    fontWeight: 900,
  },
  viewAllWrap: {
    textAlign: "center",
    marginTop: "32px",
  },
};
