import React from "react";
import { Container } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import {
  FiPhone,
  FiAtSign,
  FiGithub,
  FiLinkedin,
  FiCopy,
} from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";

export default function Contactus() {
  const contacts = [
    {
      icon: <FiAtSign />,
      text: "vinayreddy0056@gmail.com",
      link: "mailto:vinayreddy0056@gmail.com",
      copy: "vinayreddy0056@gmail.com",
    },
    {
      icon: <FiPhone />,
      text: "+91 8309169076",
      link: "tel:+918309169076",
      copy: "+918309169076",
    },
    {
      icon: <FiLinkedin />,
      text: "LinkedIn Profile",
      link: "https://www.linkedin.com/in/vinay-reddy-vargam-reddy",
    },
    {
      icon: <FiGithub />,
      text: "GitHub Profile",
      link: "https://github.com/Vinayreddy811892081",
    },
    {
      icon: <HiOutlineLocationMarker />,
      text: "Tadipatri, Andhra Pradesh, India",
      link: "https://maps.app.goo.gl/BECYrMSYktKNADGN9",
    },
  ];

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  return (
    <Container fluid style={styles.section} id="contact">
      <Container>
        <Zoom left cascade>
          <h1 style={styles.heading}>Contact Me</h1>
        </Zoom>

        <p style={styles.subtitle}>
          Have an idea, project, or opportunity? Let’s talk 🚀
        </p>

        <div style={styles.card}>
          {contacts.map((item, index) => (
            <div key={index} style={styles.wrapper}>
              <a
                href={item.link}
                target={item.link.startsWith("http") ? "_blank" : "_self"}
                rel="noreferrer"
                style={styles.contactItem}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-6px) scale(1.02)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 25px rgba(183,124,255,0.25)";
                  e.currentTarget.style.background = "rgba(251,217,173,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                <span style={styles.icon}>{item.icon}</span>
                <span style={styles.text}>{item.text}</span>
              </a>

              {/* Copy Button */}
              {item.copy && (
                <button
                  onClick={() => handleCopy(item.copy)}
                  style={styles.copyBtn}
                >
                  <FiCopy />
                </button>
              )}
            </div>
          ))}
        </div>
      </Container>
    </Container>
  );
}

const styles = {
  section: {
    minHeight: "85vh",
    padding: "70px 0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  heading: {
    textAlign: "center",
    fontSize: "clamp(45px, 7vw, 90px)",
    color: "#fbd9ad",
    fontWeight: 900,
    marginBottom: "10px",
  },

  subtitle: {
    textAlign: "center",
    color: "#d8c8e8",
    fontSize: "18px",
    marginBottom: "35px",
  },

  card: {
    width: "100%",
    maxWidth: "820px",
    margin: "0 auto",
    padding: "30px",
    borderRadius: "26px",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(251,217,173,0.25)",
    backdropFilter: "blur(14px)",
  },

  wrapper: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },

  contactItem: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    gap: "20px",
    padding: "16px",
    borderRadius: "16px",
    textDecoration: "none",
    transition: "all 0.3s ease",
  },

  icon: {
    width: "54px",
    height: "54px",
    minWidth: "54px",
    borderRadius: "50%",
    background: "#fbd9ad",
    color: "rgb(78 22 112)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "24px",
    boxShadow: "0 0 18px rgba(251,217,173,0.4)",
  },

  text: {
    color: "#fbd9ad",
    fontSize: "clamp(15px, 3vw, 20px)",
    fontWeight: 700,
  },

  copyBtn: {
    background: "transparent",
    border: "1px solid rgba(251,217,173,0.3)",
    color: "#fbd9ad",
    borderRadius: "10px",
    padding: "8px 10px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
};
