import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaFacebookF, FaGoogle } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  const socials = [
    { icon: <AiFillGithub />, link: "https://github.com/Vinayreddy811892081" },
    {
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/in/vinay-reddy-vargam-reddy",
    },
    {
      icon: <AiFillInstagram />,
      link: "https://www.instagram.com/vinay_reddy_mr_cool/",
    },
    {
      icon: <FaFacebookF />,
      link: "https://www.facebook.com/share/18orTXNBUr/",
    },
    { icon: <FaGoogle />, link: "mailto:vinayreddy0056@gmail.com" },
  ];

  return (
    <Container fluid style={styles.footer}>
      <Row className="align-items-center text-center gy-3">
        {/* Left */}
        <Col md={4}>
          <p style={styles.smallText}>Designed & Developed by</p>
          <h5 style={styles.name}>Vinay Reddy</h5>
        </Col>

        {/* Center */}
        <Col md={4}>
          <p style={styles.smallText}>© {year} All Rights Reserved</p>
        </Col>

        {/* Right */}
        <Col md={4}>
          <div style={styles.iconWrapper}>
            {socials.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.icon}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-6px) scale(1.1)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 25px rgba(251,217,173,0.6)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

const styles = {
  footer: {
    padding: "30px 0",
    background: "rgba(255,255,255,0.04)",
    backdropFilter: "blur(12px)",
    borderTop: "1px solid rgba(251,217,173,0.12)",
    marginTop: "50px",
  },
  smallText: {
    color: "#aaa",
    fontSize: "13px",
    marginBottom: "5px",
  },
  name: {
    color: "#fbd9ad",
    fontWeight: 800,
    letterSpacing: "0.5px",
  },
  iconWrapper: {
    display: "flex",
    justifyContent: "center",
    gap: "14px",
  },
  icon: {
    width: "44px",
    height: "44px",
    borderRadius: "50%",
    background: "#fbd9ad",
    color: "#2b0c3f",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "18px",
    transition: "all 0.3s ease",
    textDecoration: "none",
  },
};
