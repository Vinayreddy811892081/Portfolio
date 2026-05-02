import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import SchoolIcon from "@mui/icons-material/School";
import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";
import Flip from "react-reveal/Flip";

const education = [
  {
    title: "Bachelor of Engineering",
    subtitle: "Information Science and Engineering",
    institute: "East Point College of Engineering and Technology, Bengaluru",
    date: "2020 - 2024",
    score: "CGPA: 7.5 / 10",
    desc: "Completed engineering with a strong foundation in software development, programming, databases, and web technologies.",
  },
  {
    title: "Intermediate",
    subtitle: "MPC",
    institute: "J.C.N.R.M Junior College, Ananthapur",
    date: "2018 - 2020",
    score: "CGPA: 8.33",
    desc: "Studied Mathematics, Physics, and Chemistry, building strong analytical and problem-solving skills.",
  },
  {
    title: "Secondary School Certificate",
    subtitle: "SSC",
    institute: "Target English Medium School, Ananthapur",
    date: "2008 - 2018",
    score: "GPA: 9.5",
    desc: "Completed secondary education with strong academic performance and discipline.",
  },
];

function EducationJourney() {
  return (
    <div className="mt-5">
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

      <div className="mt-5">
        <Flip top cascade>
          <h1>Education Journey</h1>
        </Flip>
      </div>

      <VerticalTimeline>
        {education.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgb(78 22 112)",
              color: "#fbd9ad",
            }}
            contentArrowStyle={{
              borderRight: "7px solid rgb(78 22 112)",
            }}
            date={item.date}
            iconStyle={{
              background: "rgb(78 22 112)",
              color: "#fbd9ad",
            }}
            icon={<SchoolIcon />}
          >
            <h4 className="vertical-timeline-element-title">{item.title}</h4>

            <h5 className="vertical-timeline-element-subtitle mt-2">
              {item.subtitle}
            </h5>

            <h6 className="mt-2">{item.institute}</h6>

            <p>
              <b>{item.score}</b>
            </p>

            <p>{item.desc}</p>
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

export default EducationJourney;
