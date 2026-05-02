import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import LightSpeed from "react-reveal/LightSpeed";

const skills = [
  { name: "Problem Solving", level: 85, color: "#ff8c2f" },
  { name: "Fast Learner", level: 88, color: "#54faae" },
  { name: "Communication", level: 78, color: "#fe3e57" },
  { name: "Team Collaboration", level: 82, color: "#39c4ff" },
  { name: "Adaptability", level: 86, color: "#f1f965" },
  { name: "Work Under Pressure", level: 80, color: "#ff0173" },
];

export default function PersonalSkill() {
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

      <LightSpeed left cascade>
        <h1 className="mt-4 text-center">Personal Skills</h1>
      </LightSpeed>

      <Container className="mt-5">
        <Row className="g-4">
          {skills.map((skill, index) => (
            <Col lg={4} md={6} sm={12} key={index}>
              <div style={styles.card}>
                <h1 style={{ ...styles.percentage, color: skill.color }}>
                  {skill.level}%
                </h1>

                <div style={styles.progress}>
                  <div
                    role="progressbar"
                    aria-valuenow={skill.level}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{
                      ...styles.progressBar,
                      width: `${skill.level}%`,
                      background: skill.color,
                    }}
                  />
                </div>

                <h2 style={{ ...styles.skillName, color: skill.color }}>
                  {skill.name}
                </h2>
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
    padding: "30px 22px",
    borderRadius: "22px",
    background: "rgba(255, 255, 255, 0.06)",
    border: "1px solid rgba(251, 217, 173, 0.18)",
    backdropFilter: "blur(12px)",
    textAlign: "center",
    height: "100%",
  },
  percentage: {
    fontSize: "clamp(55px, 8vw, 90px)",
    fontWeight: 800,
  },
  progress: {
    width: "100%",
    height: "12px",
    background: "rgba(255,255,255,0.15)",
    borderRadius: "999px",
    overflow: "hidden",
    marginTop: "10px",
  },
  progressBar: {
    height: "100%",
    borderRadius: "999px",
  },
  skillName: {
    fontSize: "23px",
    marginTop: "18px",
    fontWeight: 800,
  },
};
