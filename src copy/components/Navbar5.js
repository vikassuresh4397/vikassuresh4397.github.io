import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import Resume from "../assets/ResumeLast/Vikas-Suresh-Resume.pdf";
import "./Navbar.css";
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar id="nav-menu" expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img
              src="https://vikassuresh4397.github.io/static/media/vikasprofpic-removebg-preview_clipdrop-relight.073dc15301cb88082d48.jpg"
              alt="Logo"
              style={{
                borderRadius: "50%",
                width: "50px",
                height: "50px",
              }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                // className={
                //   activeLink === "home" ? "active navbar-link" : "navbar-link"
                // }
                className={`nav-link home ${activeLink === "home" ? "active navbar-link" : "navbar-link"}`}
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                // className={
                //   activeLink === "skills" ? "active navbar-link" : "navbar-link"
                // }

                className={`nav-link home ${activeLink === "skills" ? "active navbar-link" : "navbar-link"}`}

                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                // className={
                //   activeLink === "projects"
                //     ? "active navbar-link"
                //     : "navbar-link"
                // }

                className={`nav-link projects ${activeLink === "projects" ? "active navbar-link" : "navbar-link"}`}

                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                href="#about"
                // className={
                //   activeLink === "skills" ? "active navbar-link" : "navbar-link"
                // }
                className={`nav-link about ${activeLink === "about" ? "active navbar-link" : "navbar-link"}`}
                onClick={() => onUpdateActiveLink("about")}
              >
                About
              </Nav.Link>
              <Nav.Link
                href="#contact"
                // className={
                //   activeLink === "skills" ? "active navbar-link" : "navbar-link"
                // }

                className={`nav-link contact ${activeLink === "contact" ? "active navbar-link" : "navbar-link"}`}

                onClick={() => onUpdateActiveLink("contact")}
              >
                Contact
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/vikas-suresh-05a60b23b/">
                  <img src={navIcon1} alt="" />
                </a>
                <a href="https://www.facebook.com/vikas.suresh.3597/">
                  <img src={navIcon2} alt="" />
                </a>
                <a href="https://www.instagram.com/mephisto7991/">
                  <img src={navIcon3} alt="" />
                </a>
              </div>
              <span
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1xkavAWpW3DfPGbizyG24akdZjLor_2o0/view?usp=sharing"
                  )
                }
                id="resume-button-1"
              >
                <a
                  rel="noreferrer"
                  className="nav-link resume"
                  id="resume-link-1"
                  href={Resume}
                  target="_blank"
                  download="Vikas-Suresh-Resume.pdf"
                >
                  <button>
                    <span>Resume</span>
                  </button>
                </a>
              </span>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
