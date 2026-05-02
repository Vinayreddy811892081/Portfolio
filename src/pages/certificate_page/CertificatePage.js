import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../../Particle";
import Certificate from "../../components/certificate/Certificate";

export default function CertificatePage() {
  return (
    <section className="home-section">
      <Particle />

      {/* ✅ Add container + spacing wrapper */}
      <Container className="page-wrapper">
        <Certificate />
      </Container>
    </section>
  );
}
