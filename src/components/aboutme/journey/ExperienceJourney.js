import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import PersonIcon from "@mui/icons-material/Person";
import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";
import Flip from "react-reveal/Flip";

const experience = [
  {
    company: "Varcons Technology",
    role: "Full Stack Web Development Intern",
    date: "Aug 2023 - Sep 2023",
    points: [
      "Developed responsive front-end components using HTML, CSS, and JavaScript.",
      "Worked on improving UI/UX and enhancing user experience.",
      "Debugged and tested applications to ensure performance and reliability.",
      "Learned full-stack workflows including frontend-backend integration.",
      "Gained experience in deploying and maintaining web applications.",
    ],
  },
];

function ExperienceJourney() {
  return (
    <div className="mt-5">
      {/* NAV */}
      <div>
        <Link className="btn btn-primary m-1" to="/educationjourney">
          Educational Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/experiencejourney">
          Experience Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/technicaljourney">
          Technical Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/projectjourney">
          Project Journey
        </Link>
      </div>

      {/* TITLE */}
      <div className="mt-5">
        <Flip top cascade>
          <h1>Experience Journey</h1>
        </Flip>
      </div>

      {/* TIMELINE */}
      <VerticalTimeline>
        {experience.map((exp, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{
              background: "rgb(78 22 112)",
              color: "#fbd9ad",
            }}
            contentArrowStyle={{
              borderLeft: "7px solid rgb(78 22 112)",
            }}
            date={exp.date}
            iconStyle={{
              background: "rgb(78 22 112)",
              color: "#fbd9ad",
            }}
            icon={<PersonIcon />}
          >
            <h4>{exp.company}</h4>
            <h6 className="mt-2">{exp.role}</h6>

            <ul style={styles.list}>
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}

        <VerticalTimelineElement
          iconStyle={{
            background: "#fbd9ad",
            color: "rgb(78 22 112)",
          }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default ExperienceJourney;

const styles = {
  list: {
    marginTop: "10px",
    paddingLeft: "20px",
    lineHeight: "1.8",
  },
};
