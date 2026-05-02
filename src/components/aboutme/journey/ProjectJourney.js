import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import CodeIcon from "@mui/icons-material/Code";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import SecurityIcon from "@mui/icons-material/Security";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import PersonIcon from "@mui/icons-material/Person";
import Flip from "react-reveal/Flip";

const projects = [
  {
    title: "The Foodies App",
    date: "Aug 2024 - Nov 2024",
    subtitle: "React.js, Node.js, SQLite3",
    desc: "Developed a full-stack web application where users can explore meals, add new recipes, and view detailed recipe information.",
    icon: <RestaurantIcon />,
  },
  {
    title: "Deep Learning Based Anomaly Detection",
    date: "Dec 2023 - Apr 2024",
    subtitle: "Python, Pandas, CNN, Logistic Regression",
    desc: "Built a deep learning-based system to detect unusual or suspicious activity in fog-assisted Internet of Vehicles networks.",
    icon: <SecurityIcon />,
  },
  {
    title: "Instagram Automation",
    date: "Feb 2022 - Apr 2022",
    subtitle: "Python, Selenium",
    desc: "Created an automation project for Instagram tasks such as searching users, liking posts, and following or unfollowing users.",
    icon: <CameraAltIcon />,
  },
  {
    title: "Personal Portfolio",
    date: "Portfolio Project",
    subtitle: "React.js, Bootstrap, JavaScript, CSS",
    desc: "Designed and developed a responsive portfolio website to showcase my skills, resume, projects, certifications, and journey.",
    icon: <PersonIcon />,
  },
];

function ProjectJourney() {
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
          <h1>Project Journey</h1>
        </Flip>
      </div>

      <VerticalTimeline>
        {projects.map((project, index) => (
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
            date={project.date}
            iconStyle={{
              background: "rgb(78 22 112)",
              color: "#fbd9ad",
            }}
            icon={project.icon || <CodeIcon />}
          >
            <h3 className="vertical-timeline-element-title">{project.title}</h3>
            <h5 className="vertical-timeline-element-subtitle mt-2">
              {project.subtitle}
            </h5>
            <p>{project.desc}</p>
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

export default ProjectJourney;
