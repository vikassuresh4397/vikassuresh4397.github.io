import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import Resume from '../assets/Resume/Vikas-Suresh-Resume.pdf';

import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  // Function to handle updating the active link
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    // Check the current pathname when the component mounts
    const currentPathname = window.location.pathname;

    // Set the active link based on the pathname
    if (currentPathname === "/") {
      onUpdateActiveLink('home');
    } else if (currentPathname === "/skills") {
      onUpdateActiveLink('skills');
    } else if (currentPathname === "/projects") {
      onUpdateActiveLink('projects');
    } else if (currentPathname === "/about") {
      onUpdateActiveLink('about');
    } else if (currentPathname === "/contact") {
      onUpdateActiveLink('contact');
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href =
    "https://drive.google.com/file/d/1gJxMtXoXMHPVZu-qpdl-f050UuZY-_KP/view?usp=sharing";
    link.target = "_blank";
    link.download = "Vikas-Suresh-Resume.pdf";
    link.click();

    // Redirect to the downloaded resume after a delay
    setTimeout(() => {
      window.open( "https://drive.google.com/file/d/1gJxMtXoXMHPVZu-qpdl-f050UuZY-_KP/view?usp=sharing"
      , "_blank");
    }, 1000);
  };

  return (
    <Router>
      <Navbar id="nav-menu" expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
        <Navbar.Brand href="/">
            <img
              src="https://vikassuresh4397.github.io/static/media/vikaslogo-removebg-preview.d5979ac20955b1f9f054.png"
              alt="Logo"
              style={{
                borderRadius: "50%",
                width: "50px",
                height: "50px",
              }}
            />
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
                className={`nav-link home ${activeLink === "home" ? "active" : ""}`}
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              {/* ... other Nav.Link components ... */}
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                {/* ... Your social icons code ... */}
              </div>
              <a target="_blank" rel="noreferrer" id="resume-link-1" className="nav-link resume"  href={Resume} download="Vikas-Suresh-Resume.pdf">
                <button id="resume-button-1" onClick={downloadResume} ><span>Resume</span></button>
              </a>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
