import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const skills = [
  { name: "C", level: 75 },
  { name: "Java", level: 75 },
  { name: "Python", level: 80 },
  { name: "JavaScript", level: 78 },
  { name: "SQL / MySQL", level: 70 },
  { name: "HTML & CSS", level: 85 },
  { name: "React.js", level: 78 },
  { name: "Node.js", level: 72 },
  { name: "Pandas & NumPy", level: 65 },
];

export default function TechnicalSkill() {
  return (
    <div>
      {/* Tabs */}
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

      {/* Heading */}
      <h1 className="text-center mt-5 aboutme-heading">Technical Skills</h1>

      {/* Skills */}
      <Container className="mt-5">
        <Row className="g-4">
          {skills.map((skill, index) => (
            <Col md={4} sm={6} xs={12} key={index}>
              <div style={styles.card}>
                {/* Skill Name */}
                <div style={styles.header}>
                  <h5 style={styles.title}>{skill.name}</h5>
                  <span style={styles.percent}>{skill.level}%</span>
                </div>

                {/* Progress Bar */}
                <div style={styles.progressBg}>
                  <div
                    style={{
                      ...styles.progressFill,
                      width: `${skill.level}%`,
                    }}
                  />
                </div>
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
    padding: "20px",
    borderRadius: "18px",
    background: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(12px)",
    border: "1px solid rgba(251,217,173,0.15)",
    transition: "all 0.3s ease",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "12px",
  },

  title: {
    color: "#fbd9ad",
    fontWeight: 700,
    margin: 0,
  },

  percent: {
    color: "#b77cff",
    fontWeight: 700,
  },

  progressBg: {
    height: "8px",
    width: "100%",
    borderRadius: "10px",
    background: "rgba(255,255,255,0.1)",
    overflow: "hidden",
  },

  progressFill: {
    height: "100%",
    borderRadius: "10px",
    background: "linear-gradient(90deg, #b77cff, #fbd9ad)",
    boxShadow: "0 0 10px rgba(183,124,255,0.6)",
    transition: "width 1s ease",
  },
};
