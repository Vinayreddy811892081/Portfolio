import React from "react";
import {
  AiOutlineInstagram,
  AiFillFacebook,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";

const socials = [
  {
    icon: <AiFillGithub />,
    name: "GitHub",
    link: "https://github.com/Vinayreddy811892081",
  },
  {
    icon: <AiFillLinkedin />,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/vinay-reddy-vargam-reddy",
  },
  {
    icon: <AiOutlineInstagram />,
    name: "Instagram",
    link: "https://www.instagram.com/vinay_reddy_mr_cool/",
  },
  {
    icon: <AiFillFacebook />,
    name: "Facebook",
    link: "https://www.facebook.com/share/18orTXNBUr/",
  },
];

export default function SocialMedia() {
  return (
    <div className="mt-5">
      <Zoom>
        <h1 className="text-center aboutme-heading">Connect With Me 🌐</h1>
      </Zoom>

      <Container className="mt-5">
        <Row className="justify-content-center g-4">
          {socials.map((item, index) => (
            <Col lg={3} md={4} sm={6} xs={12} key={index}>
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none" }}
              >
                <div
                  style={styles.card}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-10px)";
                    e.currentTarget.style.boxShadow =
                      "0 20px 40px rgba(183,124,255,0.35)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div style={styles.icon}>{item.icon}</div>
                  <h5 style={styles.name}>{item.name}</h5>
                </div>
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

const styles = {
  card: {
    height: "160px",
    borderRadius: "22px",
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(251,217,173,0.2)",
    backdropFilter: "blur(12px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s ease",
    cursor: "pointer",
  },
  icon: {
    fontSize: "40px",
    color: "#fbd9ad",
    marginBottom: "10px",
  },
  name: {
    color: "#fbd9ad",
    fontWeight: 700,
  },
};
