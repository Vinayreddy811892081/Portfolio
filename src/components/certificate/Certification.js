import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import { FaReact, FaPython, FaDatabase } from "react-icons/fa";

export default function Certification() {
  const certificates = [
    {
      title: "React - The Complete Guide 2024",
      issuer: "Udemy",
      icon: <FaReact />,
    },
    {
      title: "100 Days of Code: Python Bootcamp",
      issuer: "Udemy",
      icon: <FaPython />,
    },
    {
      title: "The Ultimate MySQL Bootcamp",
      issuer: "Udemy",
      icon: <FaDatabase />,
    },
  ];

  return (
    <Container fluid className="certificate-section" id="certifications">
      <Container>
        <div style={styles.header}>
          <Zoom left cascade>
            <h1 className="aboutme-heading">Certifications</h1>
          </Zoom>

          <p style={styles.subtitle}>
            Courses and certifications that strengthened my foundation in
            frontend development, backend logic, databases, and Python.
          </p>
        </div>

        <Row className="g-4">
          {certificates.map((cert, index) => (
            <Col lg={4} md={6} sm={12} key={index}>
              <Fade bottom duration={1500} distance="20px">
                <div style={styles.card}>
                  <div style={styles.icon}>{cert.icon}</div>
                  <h2 style={styles.title}>{cert.title}</h2>
                  <p style={styles.issuer}>Issued by {cert.issuer}</p>
                </div>
              </Fade>
            </Col>
          ))}
        </Row>

        <div style={styles.viewAll}>
          <Link to="/certificatepage">
            <button className="btn btn-primary">
              View All <HiArrowRight className="viewArr" />
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
    minHeight: "260px",
    padding: "32px",
    borderRadius: "24px",
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(251,217,173,0.22)",
    backdropFilter: "blur(12px)",
    textAlign: "center",
  },
  icon: {
    width: "78px",
    height: "78px",
    margin: "0 auto 22px",
    borderRadius: "50%",
    background: "#fbd9ad",
    color: "rgb(78 22 112)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "36px",
  },
  title: {
    color: "#fbd9ad",
    fontSize: "22px",
    fontWeight: 900,
    lineHeight: 1.4,
  },
  issuer: {
    color: "#d8c8e8",
    fontSize: "15px",
    fontWeight: 600,
    marginTop: "14px",
  },
  viewAll: {
    textAlign: "center",
    marginTop: "32px",
  },
};
