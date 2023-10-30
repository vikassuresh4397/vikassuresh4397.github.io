import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Navbar.css";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import Resume from "../assets/ResumeLatest/Vikas-Suresh-Resume.pdf";
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const handleNavItemClick = () => {
    // Close the Navbar when a Nav.Link is clicked
    const navbarToggle = document.querySelector(".navbar-toggler");
    if (navbarToggle && window.getComputedStyle(navbarToggle).display !== "none") {
      navbarToggle.click();
    }
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Check the current pathname when the component mounts
    const currentPathname = window.location.pathname;

    // Set the active link based on the pathname
    if (currentPathname === "/") {
      onUpdateActiveLink("home");
    } else if (currentPathname === "/skills") {
      onUpdateActiveLink("skills");
    } else if (currentPathname === "/projects") {
      onUpdateActiveLink("projects");
    } else if (currentPathname === "/about") {
      onUpdateActiveLink("about");
    } else if (currentPathname === "/contact") {
      onUpdateActiveLink("contact");
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar id="nav-menu" expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img
              src="https://user-images.githubusercontent.com/112813417/269988004-1f81ece0-4a47-4ba4-98fd-14adde48430c.jpg"
              alt="Logo"
              style={{
                borderRadius: "50%",
                width: "50px",
                height: "50px",
              }}
              id="nav_pic"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={`nav-link home ${
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }`}
                onClick={() => {
                  onUpdateActiveLink("home");
                  handleNavItemClick(); // Close Navbar
                }}
              >
                Home
              </Nav.Link>

              <Nav.Link
                href="#skills"
                className={`nav-link skills ${
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }`}
                onClick={() => {
                  onUpdateActiveLink("skills");
                  handleNavItemClick(); // Close Navbar
                }}
              >
                Skills
              </Nav.Link>

              <Nav.Link
                href="#projects"
                className={`nav-link projects ${
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }`}
                onClick={() => {
                  onUpdateActiveLink("projects");
                  handleNavItemClick(); // Close Navbar
                }}
              >
                Projects
              </Nav.Link>

              <Nav.Link
                href="#about"
                className={`nav-link about ${
                  activeLink === "about" ? "active navbar-link" : "navbar-link"
                }`}
                onClick={() => {
                  onUpdateActiveLink("about");
                  handleNavItemClick(); // Close Navbar
                }}
              >
                About
              </Nav.Link>

              <Nav.Link
                href="#contact"
                className={`nav-link contact ${
                  activeLink === "contact"
                    ? "active navbar-link"
                    : "navbar-link"
                }`}
                onClick={() => {
                  onUpdateActiveLink("contact");
                  handleNavItemClick(); // Close Navbar
                }}
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
                    "https://drive.google.com/file/d/1wCB07ly2sLSkm0UhprhqmGrm_reZOw93/view?usp=sharing"
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
                  <button
                    onClick={() =>
                      window.open(
                        "https://drive.google.com/file/d/1wCB07ly2sLSkm0UhprhqmGrm_reZOw93/view?usp=sharing"
                      )
                    }
                    id="resume-button-1"
                  >
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
