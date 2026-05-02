import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import ComputerIcon from "@mui/icons-material/Computer";
import StorageIcon from "@mui/icons-material/Storage";
import CodeIcon from "@mui/icons-material/Code";
import {
  DiHtml5,
  DiPython,
  DiReact,
  DiJava,
  DiCss3,
  DiJavascript1,
  DiMysql,
  DiNodejs,
} from "react-icons/di";
import { SiPandas, SiNumpy } from "react-icons/si";
import Flip from "react-reveal/Flip";

const skills = [
  {
    title: "Programming Fundamentals",
    subtitle: "C, Java, Python",
    description:
      "Strong foundation in problem-solving, logic building, object-oriented programming, and core programming concepts.",
    icon: <ComputerIcon />,
  },
  {
    title: "Frontend Development",
    subtitle: "HTML, CSS, JavaScript, React.js",
    description:
      "Experience in building responsive, user-friendly interfaces and dynamic web applications using modern frontend technologies.",
    icon: <DiReact />,
  },
  {
    title: "Backend Development",
    subtitle: "Node.js",
    description:
      "Hands-on experience with backend development concepts, server-side logic, APIs, and integrating frontend applications with backend services.",
    icon: <DiNodejs />,
  },
  {
    title: "Database Management",
    subtitle: "SQL, MySQL",
    description:
      "Knowledge of database design, queries, data storage, and retrieving information efficiently using SQL-based databases.",
    icon: <DiMysql />,
  },
  {
    title: "Python Libraries",
    subtitle: "Pandas, NumPy",
    description:
      "Experience using Python libraries for data handling, analysis, and working with structured datasets.",
    icon: <SiPandas />,
  },
  {
    title: "Web Development Tools",
    subtitle: "Git, GitHub, VS Code, Chrome DevTools",
    description:
      "Comfortable using developer tools for coding, debugging, version control, and managing project workflows.",
    icon: <CodeIcon />,
  },
];

function TechnicalJourney() {
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
          <h1>Technical Journey</h1>
        </Flip>
      </div>

      <VerticalTimeline>
        {skills.map((skill, index) => (
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
            iconStyle={{
              background: "rgb(78 22 112)",
              color: "#fbd9ad",
            }}
            icon={skill.icon}
          >
            <h3 className="vertical-timeline-element-title">{skill.title}</h3>
            <h5 className="vertical-timeline-element-subtitle mt-2">
              {skill.subtitle}
            </h5>
            <p>{skill.description}</p>
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

export default TechnicalJourney;
