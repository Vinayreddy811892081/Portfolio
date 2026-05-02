import React, { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import Zoom from "react-reveal/Zoom";
import Particle from "../../Particle";
import pdf from "../../assets/Vinay_Reddy_Resume.pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const resumeScale = width > 992 ? 1.35 : width > 768 ? 1.05 : 0.55;

  return (
    <section className="home-section">
      <Container fluid className="resume-section">
        <Particle />

        <Container className="home-content">
          <div style={styles.header}>
            <Zoom left cascade>
              <h1 style={styles.heading}>Resume</h1>
            </Zoom>

            <p style={styles.subtitle}>
              Download my latest resume to explore my skills, projects,
              education, and experience.
            </p>
          </div>

          <div style={styles.buttonWrap}>
            <Button variant="primary" href={pdf} target="_blank">
              <AiOutlineDownload />
              &nbsp; Download Resume
            </Button>
          </div>

          <div style={styles.resumeCard}>
            <Document file={pdf}>
              <Page
                pageNumber={1}
                scale={resumeScale}
                renderTextLayer={false}
              />
            </Document>
          </div>

          <div style={styles.buttonWrap}>
            <Button variant="primary" href={pdf} target="_blank">
              <AiOutlineDownload />
              &nbsp; Download Resume
            </Button>
          </div>
        </Container>
      </Container>
    </section>
  );
}

export default Resume;

const styles = {
  header: {
    textAlign: "center",
    marginBottom: "20px",
  },
  heading: {
    color: "#fbd9ad",
    fontSize: "clamp(45px, 7vw, 90px)",
    fontWeight: 900,
    paddingTop: "45px",
  },
  subtitle: {
    color: "#d8c8e8",
    fontSize: "18px",
    maxWidth: "720px",
    margin: "15px auto 25px",
    lineHeight: 1.7,
  },
  buttonWrap: {
    display: "flex",
    justifyContent: "center",
    margin: "25px 0",
  },
  resumeCard: {
    display: "flex",
    justifyContent: "center",
    padding: "25px",
    borderRadius: "24px",
    background: "rgba(255, 255, 255, 0.06)",
    border: "1px solid rgba(251, 217, 173, 0.22)",
    backdropFilter: "blur(12px)",
    overflowX: "auto",
  },
};
