import React from "react";
import Particle from "../../Particle";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Notfound() {
  return (
    <section className="home-section">
      <Container fluid className="notfound-section">
        <Particle />

        <Container className="home-content text-center">
          <div style={styles.card}>
            <lottie-player
              src="https://assets6.lottiefiles.com/packages/lf20_zkzzfkke.json"
              background="transparent"
              speed="1"
              style={{ width: "250px", margin: "0 auto" }}
              loop
              autoplay
            ></lottie-player>

            <h1 style={styles.title}>Page Not Found</h1>

            <p style={styles.subtitle}>
              The page you're looking for doesn't exist or is under development.
            </p>

            <Link to="/">
              <Button className="btn btn-primary mt-3">Go Back Home</Button>
            </Link>
          </div>
        </Container>
      </Container>
    </section>
  );
}

const styles = {
  card: {
    marginTop: "120px",
    padding: "40px",
    borderRadius: "22px",
    background: "rgba(255, 255, 255, 0.06)",
    border: "1px solid rgba(251, 217, 173, 0.22)",
    backdropFilter: "blur(12px)",
  },
  title: {
    color: "#fbd9ad",
    fontSize: "40px",
    fontWeight: 800,
    marginTop: "10px",
  },
  subtitle: {
    color: "#d8c8e8",
    fontSize: "16px",
    marginTop: "10px",
  },
};
