import React from "react";
import Particle from "../../Particle";
import { Container } from "react-bootstrap";

export default function ComingSoon() {
  return (
    <section className="home-section">
      <Container
        fluid
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <Particle />

        <Container
          className="text-center d-flex flex-column align-items-center justify-content-center"
          style={{
            zIndex: 2,
          }}
        >
          {/* Animation */}
          <lottie-player
            src="https://assets7.lottiefiles.com/packages/lf20_10jxod3a.json"
            background="transparent"
            speed="1"
            style={{ width: "350px", maxWidth: "90%" }}
            loop
            autoplay
          ></lottie-player>

          {/* Title */}
          <h1
            style={{
              color: "#fbd9ad",
              fontSize: "48px",
              fontWeight: "900",
              marginTop: "20px",
            }}
          >
            Coming Soon 🚀
          </h1>

          {/* Subtitle */}
          <p
            style={{
              color: "#ccc",
              maxWidth: "500px",
              marginTop: "10px",
              fontSize: "16px",
            }}
          >
            I’m currently working on something exciting. This section will be
            available soon with amazing content!
          </p>

          {/* Glow line */}
          <div
            style={{
              marginTop: "20px",
              width: "120px",
              height: "4px",
              borderRadius: "10px",
              background: "#fbd9ad",
              boxShadow: "0 0 15px rgba(251,217,173,0.7)",
            }}
          />
        </Container>
      </Container>
    </section>
  );
}
