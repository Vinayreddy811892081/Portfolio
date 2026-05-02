import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

import python from "../../images/python.png";
import Database_Design from "../../images/Database_Design.png";
import Database_Foundations from "../../images/Database_Foundations.png";
import salesforce from "../../images/salesforce.png";
import reactjs from "../../images/react.js.png";
import mysql from "../../images/mysql.png";

export default function Certificate() {
  const [selected, setSelected] = useState(null);

  const certificates = [
    { img: python, title: "Python" },
    { img: Database_Design, title: "Database Design" },
    { img: Database_Foundations, title: "Database Foundations" },
    { img: salesforce, title: "Salesforce" },
    { img: reactjs, title: "React.js" },
    { img: mysql, title: "MySQL" },
  ];

  return (
    <Container fluid className="certificate-section" id="certifications">
      <Container>
        {/* 🔥 CENTERED HEADING (LIKE PROJECTS) */}
        <div style={styles.header}>
          <Zoom left cascade>
            <h1 style={styles.heading}>Certificates</h1>
          </Zoom>

          <p style={styles.subtitle}>
            My certifications that showcase skills in development, databases,
            and modern technologies.
          </p>
        </div>

        {/* 🔥 CARDS */}
        <Row className="g-4 justify-content-center">
          {certificates.map((cert, index) => (
            <Col lg={4} md={6} sm={12} key={index}>
              <Fade bottom duration={1200}>
                <div
                  style={styles.card}
                  onClick={() => setSelected(cert)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform =
                      "translateY(-10px) scale(1.02)";
                    e.currentTarget.style.boxShadow =
                      "0 18px 45px rgba(183,124,255,0.35)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <img src={cert.img} alt={cert.title} style={styles.image} />
                  <p style={styles.title}>{cert.title}</p>
                </div>
              </Fade>
            </Col>
          ))}
        </Row>

        {/* 🔥 MODAL */}
        {selected && (
          <div style={styles.modal} onClick={() => setSelected(null)}>
            <img
              src={selected.img}
              alt={selected.title}
              style={styles.modalImage}
            />
          </div>
        )}
      </Container>
    </Container>
  );
}

const styles = {
  header: {
    textAlign: "center",
    marginBottom: "50px",
  },

  heading: {
    textAlign: "center",
    color: "#fbd9ad",
    fontSize: "clamp(45px, 7vw, 90px)",
    fontWeight: 900,
    paddingTop: "45px", // 🔥 THIS IS THE KEY
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
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(251,217,173,0.22)",
    borderRadius: "22px",
    padding: "14px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    textAlign: "center",
    height: "100%",
  },

  image: {
    width: "100%",
    height: "220px",
    objectFit: "cover",
    borderRadius: "14px",
  },

  title: {
    marginTop: "14px",
    color: "#fbd9ad",
    fontWeight: 800,
    fontSize: "18px",
  },

  modal: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.9)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },

  modalImage: {
    maxWidth: "90%",
    maxHeight: "85%",
    borderRadius: "12px",
  },
};
