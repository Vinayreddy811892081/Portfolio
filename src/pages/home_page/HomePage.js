import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Particle from "../../Particle";
import Typing from "./Typing";
import Tilt from "react-parallax-tilt";
import AboutmeContainer from "../../components/aboutme/aboutmeContainer";
import Fade from "react-reveal/Fade";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaFacebookF, FaGoogle } from "react-icons/fa";
import { FiDownload, FiMail } from "react-icons/fi";
import Certification from "../../components/certificate/Certification";
import Projects from "../../components/projects/Projects";
import Contactus from "../../components/contactus/Contactus";
import resume from "../../assets/Vinay_Reddy_Resume.pdf";

export default function Home() {
  const socials = [
    {
      icon: <AiFillGithub />,
      link: "https://github.com/Vinayreddy811892081",
      label: "GitHub",
    },
    {
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/in/vinay-reddy-vargam-reddy",
      label: "LinkedIn",
    },
    {
      icon: <AiFillInstagram />,
      link: "https://www.instagram.com/vinay_reddy_mr_cool/",
      label: "Instagram",
    },
    {
      icon: <FaFacebookF />,
      link: "https://www.facebook.com/share/18orTXNBUr/",
      label: "Facebook",
    },
    {
      icon: <FaGoogle />,
      link: "mailto:vinayreddy0056@gmail.com",
      label: "Email",
    },
  ];

  return (
    <section className="home-section">
      <Container fluid id="home" className="hero-section">
        <Particle />

        <Container className="home-content">
          <Row className="align-items-center">
            <Col lg={7} md={7} className="home-header">
              <Fade bottom cascade>
                <div style={styles.badgeRow}>
                  <span style={styles.openBadge}>🟢 Open to Work</span>
                  <span style={styles.roleBadge}>Full Stack Developer</span>
                </div>

                <h1 style={styles.heading}>
                  Hi, I’m <span style={styles.highlight}>Vinay Reddy</span> 👋
                </h1>

                <div style={styles.typing}>
                  <Typing />
                </div>

                <p style={styles.subtitle}>
                  I build responsive, scalable, and user-friendly web
                  applications using <b>React.js</b>, <b>Node.js</b>,{" "}
                  <b>JavaScript</b>, and modern web technologies.
                </p>

                <p style={styles.recruiterLine}>
                  Actively looking for <b>Frontend Developer</b> and{" "}
                  <b>Full Stack Developer</b> opportunities.
                </p>

                <div style={styles.ctaWrapper}>
                  <a
                    href={resume}
                    target="_blank"
                    rel="noreferrer"
                    style={styles.primaryBtn}
                  >
                    <FiDownload /> Download Resume
                  </a>

                  <a
                    href="mailto:vinayreddy0056@gmail.com"
                    style={styles.secondaryBtn}
                  >
                    <FiMail /> Hire Me
                  </a>

                  <Link to="/projectspage" style={styles.linkBtn}>
                    View Projects
                  </Link>
                </div>

                <div style={styles.socialWrapper}>
                  {socials.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      target={item.link.startsWith("http") ? "_blank" : "_self"}
                      rel="noreferrer"
                      aria-label={item.label}
                      style={styles.socialIcon}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform =
                          "translateY(-6px) scale(1.08)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform =
                          "translateY(0) scale(1)";
                      }}
                    >
                      {item.icon}
                    </a>
                  ))}
                </div>
              </Fade>
            </Col>

            <Col
              lg={5}
              md={5}
              className="d-flex justify-content-center mt-5 mt-md-0"
            >
              <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8}>
                <Fade right>
                  <div style={styles.imageOuter}>
                    <div style={styles.imageCard}>
                      <img
                        src="./profile.png"
                        alt="Vinay Reddy"
                        className="img-fluid"
                        style={styles.profileImage}
                      />
                    </div>

                    <div style={styles.floatingCard}>
                      <strong>2024 Graduate</strong>
                      <span>Information Science Engineering</span>
                    </div>
                  </div>
                </Fade>
              </Tilt>
            </Col>
          </Row>
        </Container>
      </Container>

      <AboutmeContainer />
      <Certification />
      <Projects />
      <Contactus />
    </section>
  );
}

const styles = {
  badgeRow: {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
    marginBottom: "18px",
  },
  openBadge: {
    padding: "8px 16px",
    borderRadius: "999px",
    background: "rgba(34, 197, 94, 0.12)",
    color: "#86efac",
    border: "1px solid rgba(34, 197, 94, 0.35)",
    fontWeight: 800,
    fontSize: "14px",
  },
  roleBadge: {
    padding: "8px 16px",
    borderRadius: "999px",
    background: "rgba(251, 217, 173, 0.12)",
    color: "#fbd9ad",
    border: "1px solid rgba(251, 217, 173, 0.25)",
    fontWeight: 800,
    fontSize: "14px",
  },
  heading: {
    fontSize: "clamp(46px, 7vw, 86px)",
    color: "#fbd9ad",
    fontWeight: 900,
    lineHeight: 1.1,
    marginBottom: "12px",
  },
  highlight: {
    color: "#b77cff",
    textShadow: "0 0 20px rgba(183,124,255,0.55)",
  },
  typing: {
    fontSize: "clamp(28px, 5vw, 56px)",
    color: "#b77cff",
    fontWeight: 900,
    minHeight: "70px",
  },
  subtitle: {
    maxWidth: "720px",
    color: "#d8c8e8",
    fontSize: "18px",
    lineHeight: 1.8,
    marginTop: "14px",
  },
  recruiterLine: {
    maxWidth: "720px",
    color: "#fbd9ad",
    fontSize: "17px",
    marginTop: "8px",
  },
  ctaWrapper: {
    display: "flex",
    gap: "14px",
    flexWrap: "wrap",
    marginTop: "26px",
  },
  primaryBtn: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "13px 20px",
    borderRadius: "14px",
    background: "#fbd9ad",
    color: "rgb(78 22 112)",
    fontWeight: 900,
    textDecoration: "none",
    boxShadow: "0 0 20px rgba(251,217,173,0.35)",
  },
  secondaryBtn: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "13px 20px",
    borderRadius: "14px",
    background: "rgba(183,124,255,0.22)",
    color: "#fbd9ad",
    border: "1px solid rgba(251,217,173,0.22)",
    fontWeight: 900,
    textDecoration: "none",
  },
  linkBtn: {
    display: "inline-flex",
    alignItems: "center",
    padding: "13px 20px",
    borderRadius: "14px",
    color: "#d8c8e8",
    fontWeight: 800,
    textDecoration: "none",
  },
  socialWrapper: {
    display: "flex",
    gap: "14px",
    marginTop: "28px",
    flexWrap: "wrap",
  },
  socialIcon: {
    width: "44px",
    height: "44px",
    borderRadius: "50%",
    background: "#fbd9ad",
    color: "rgb(78 22 112)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "20px",
    textDecoration: "none",
    boxShadow: "0 0 18px rgba(251,217,173,0.35)",
    transition: "all 0.3s ease",
  },
  imageOuter: {
    position: "relative",
  },
  imageCard: {
    width: "min(370px, 78vw)",
    height: "min(370px, 78vw)",
    borderRadius: "50%",
    padding: "9px",
    background:
      "linear-gradient(135deg, rgba(251,217,173,0.9), rgba(183,124,255,0.9))",
    boxShadow: "0 0 55px rgba(183,124,255,0.42)",
  },
  profileImage: {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    objectFit: "cover",
    border: "7px solid #120b24",
  },
  floatingCard: {
    position: "absolute",
    right: "-10px",
    bottom: "18px",
    padding: "14px 18px",
    borderRadius: "16px",
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(251,217,173,0.22)",
    backdropFilter: "blur(12px)",
    color: "#fbd9ad",
    display: "flex",
    flexDirection: "column",
    gap: "2px",
    fontSize: "13px",
  },
};
