import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, Outlet, useLocation } from "react-router-dom";
import Zoom from "react-reveal/Zoom";

export default function AboutmeContainer() {
  const location = useLocation();

  const tabs = [
    { name: "About", path: "/" },
    { name: "Skills", path: "/technicalskill" },
    { name: "Journey", path: "/educationjourney" },
    { name: "Social Media", path: "/socialmedia" },
  ];

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col
            md={12}
            className="home-about-description d-flex justify-content-center"
          >
            <Zoom left cascade>
              <h1 className="aboutme-heading">About Me</h1>
            </Zoom>
          </Col>

          <Col md={12} className="mt-3">
            <div style={styles.navWrapper}>
              {tabs.map((tab, index) => {
                const isActive = location.pathname === tab.path;

                return (
                  <Link
                    key={index}
                    to={tab.path}
                    style={{
                      ...styles.navItem,
                      ...(isActive ? styles.activeNavItem : {}),
                    }}
                  >
                    {tab.name}
                  </Link>
                );
              })}
            </div>

            <div style={styles.content}>
              <Outlet />
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

const styles = {
  navWrapper: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "12px",
    padding: "10px",
    borderRadius: "18px",
    background: "rgba(255, 255, 255, 0.06)",
    border: "1px solid rgba(251, 217, 173, 0.18)",
    backdropFilter: "blur(10px)",
  },
  navItem: {
    padding: "12px 28px",
    borderRadius: "14px",
    color: "#fbd9ad",
    fontSize: "17px",
    fontWeight: 700,
    textDecoration: "none",
    transition: "all 0.35s ease",
  },
  activeNavItem: {
    background: "#fbd9ad",
    color: "rgb(78 22 112)",
    boxShadow: "0 0 18px rgba(251, 217, 173, 0.45)",
    transform: "translateY(-2px)",
  },
  content: {
    marginTop: "30px",
    animation: "fadeSlide 0.4s ease",
  },
};
