import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Zoom from "react-reveal/Zoom";

import vs from "../../../images/Vs.png";
import git from "../../../images/git.png";
import github from "../../../images/github.png";
import pg from "../../../images/pg.png";
import chrome from "../../../images/chorme.svg";
import pm from "../../../images/pm.png";

const tools = [
  { img: vs, name: "VS Code" },
  { img: git, name: "Git" },
  { img: github, name: "GitHub", style: { filter: "grayscale(1) invert(1)" } },
  { img: pg, name: "Postman" },
  { img: chrome, name: "Chrome DevTools" },
  { img: pm, name: "Package Manager" },
];

export default function Toolkit() {
  return (
    <div>
      <div className="mt-5 d-flex justify-content-center flex-wrap gap-3">
        <Link className="btn btn-primary" to="/technicalSkill">
          Technical Skill
        </Link>
        <Link className="btn btn-primary" to="/personalskill">
          Personal Skill
        </Link>
        <Link className="btn btn-primary" to="/toolkit">
          Toolkit
        </Link>
      </div>

      <Zoom>
        <h1 className="mt-5 text-center aboutme-heading">Developer Toolkit</h1>
      </Zoom>

      <Container className="mt-5">
        <Row className="justify-content-center g-4">
          {tools.map((tool, index) => (
            <Col lg={2} md={3} sm={4} xs={6} key={index}>
              <div
                style={styles.card}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow =
                    "0 18px 35px rgba(183,124,255,0.35)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <img
                  src={tool.img}
                  alt={tool.name}
                  style={{
                    width: "70px",
                    height: "70px",
                    objectFit: "contain",
                    ...tool.style,
                  }}
                />

                <p style={styles.name}>{tool.name}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

const styles = {
  card: {
    minHeight: "150px",
    padding: "22px 12px",
    borderRadius: "20px",
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(251,217,173,0.18)",
    backdropFilter: "blur(12px)",
    transition: "all 0.3s ease",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    marginTop: "16px",
    marginBottom: 0,
    fontSize: "14px",
    color: "#fbd9ad",
    fontWeight: 700,
    textAlign: "center",
  },
};
