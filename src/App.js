import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-vertical-timeline-component/style.min.css";
import "./App.css";
import "./style.css";

import Preloader from "./Preloader";
import MyNav from "./components/navbar/MyNav";
import Footer from "./components/footer/Footer";

import Home from "./pages/home_page/HomePage";
import Resume from "./pages/resume_page/ResumePage";
import ProjectPage from "./pages/project_page/ProjectPage";
import CertificatePage from "./pages/certificate_page/CertificatePage";
import ComingSoon from "./pages/comingsoon_page/comingsoon";
import Notfound from "./pages/blogs_page/notfound";

import About from "./components/aboutme/about/About";
import Ranking from "./components/aboutme/ranking/Ranking";
import SocialMedia from "./components/aboutme/social_media/SocialMedia";

import PersonalSkill from "./components/aboutme/skills/PersonalSkill";
import TechnicalSkill from "./components/aboutme/skills/TechnicalSkill";
import Toolkit from "./components/aboutme/skills/Toolkit";

import EducationJourney from "./components/aboutme/journey/EducationJourney";
import ExperienceJourney from "./components/aboutme/journey/ExperienceJourney";
import TechnicalJourney from "./components/aboutme/journey/TechnicalJourney";
import ProjectJourney from "./components/aboutme/journey/ProjectJourney";

function App() {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />

      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <MyNav />

        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<About />} />
            <Route path="personalskill" element={<PersonalSkill />} />
            <Route path="technicalskill" element={<TechnicalSkill />} />
            <Route path="toolkit" element={<Toolkit />} />

            <Route path="educationjourney" element={<EducationJourney />} />
            <Route path="experiencejourney" element={<ExperienceJourney />} />
            <Route path="technicaljourney" element={<TechnicalJourney />} />
            <Route path="projectjourney" element={<ProjectJourney />} />

            <Route path="ranking" element={<Ranking />} />
            <Route path="socialmedia" element={<SocialMedia />} />
          </Route>

          <Route path="/projectspage" element={<ProjectPage />} />
          <Route path="/certificatepage" element={<CertificatePage />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/blogs" element={<ComingSoon />} />

          <Route path="*" element={<Notfound />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
