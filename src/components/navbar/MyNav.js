import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { ImBlog } from "react-icons/im";
import { AiOutlineHome, AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaBlog } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import "../../style.css";

export default function MyNav() {
  const [expand, setExpand] = useState(false);
  const [navColour, setNavColour] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const scrollHandler = () => {
      setNavColour(window.scrollY >= 20);
    };

    window.addEventListener("scroll", scrollHandler);
    scrollHandler();

    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const navLinks = [
    { name: "Home", path: "/", icon: <AiOutlineHome /> },
    {
      name: "Projects",
      path: "/projectspage",
      icon: <AiOutlineFundProjectionScreen />,
    },
    { name: "Resume", path: "/resume", icon: <CgFileDocument /> },
    { name: "Certifications", path: "/certificatepage", icon: <ImBlog /> },
    { name: "Blogs", path: "/blogs", icon: <FaBlog /> },
  ];

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky navbar-custom" : "navbar navbar-custom"}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={() => setExpand(false)}>
          <div className="nav-brand-wrap">
            <img
              src="./profile.png"
              className="img-fluid logo"
              alt="Vinay Reddy"
            />
            <h5 id="navhead">Vinay Reddy</h5>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="navbar-toggler-custom"
          onClick={() => setExpand(expand ? false : "expanded")}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav" className="navbarmain">
          <Nav className="ms-auto">
            {navLinks.map((link, index) => {
              const isActive = location.pathname === link.path;

              return (
                <Nav.Item key={index}>
                  <Nav.Link
                    as={Link}
                    to={link.path}
                    onClick={() => setExpand(false)}
                    className={`nav-link-custom ${isActive ? "active-nav-link" : ""}`}
                  >
                    <span className="nav-icon">{link.icon}</span>
                    {link.name}
                  </Nav.Link>
                </Nav.Item>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
