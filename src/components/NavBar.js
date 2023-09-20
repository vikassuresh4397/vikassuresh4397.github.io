import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Navbar.css";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

import Resume from "../assets/ResumeLast/Vikas-Suresh-Resume.pdf";

import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // const downloadResume = () => {
  //   const link = document.createElement("a");
  //   link.href =
  //     "https://drive.google.com/file/d/1xkavAWpW3DfPGbizyG24akdZjLor_2o0/view?usp=sharing";
  //   link.target = "_blank";
  //   link.download = "Vikas-Suresh-Resume.pdf";
  //   link.click();

  //   // Redirect to the downloaded resume after a delay
  //   setTimeout(() => {
  //     window.open(
  //       "https://drive.google.com/file/d/1xkavAWpW3DfPGbizyG24akdZjLor_2o0/view?usp=sharing",
  //       "_blank"
  //     );
  //   }, 1000);
  // };

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
            {/* <img
              src="https://vikassuresh4397.github.io/static/media/vikaslogo-removebg-preview.d5979ac20955b1f9f054.png"
              alt="Logo"
              style={{
                borderRadius: "50%",
                width: "50px",
                height: "50px",
              }}
            /> */}
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
                className={`nav-link home ${
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }`}
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              {/* <Nav.Link
                href="#skills"
                // className={
                //   activeLink === "skills" ? "active navbar-link" : "navbar-link"
                // }

                className={`nav-link skills ${activeLink === "skills" ? "active navbar-link" : "navbar-link"}`}

                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link> */}
              <Nav.Link
                href="#skills"
                className={`nav-link skills ${
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }`}
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

                className={`nav-link projects ${
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }`}
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                href="#about"
                // className={
                //   activeLink === "skills" ? "active navbar-link" : "navbar-link"
                // }
                className={`nav-link about ${
                  activeLink === "about" ? "active navbar-link" : "navbar-link"
                }`}
                onClick={() => onUpdateActiveLink("about")}
              >
                About
              </Nav.Link>
              <Nav.Link
                href="#contact"
                // className={
                //   activeLink === "skills" ? "active navbar-link" : "navbar-link"
                // }

                className={`nav-link contact ${
                  activeLink === "contact"
                    ? "active navbar-link"
                    : "navbar-link"
                }`}
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
                  <button
                    onClick={() =>
                      window.open(
                        "https://drive.google.com/file/d/1xkavAWpW3DfPGbizyG24akdZjLor_2o0/view?usp=sharing"
                      )
                    }
                    id="resume-button-1"
                  >
                    <span>Resume</span>
                  </button>
                </a>
              </span>

              {/* <a id="resume-link-1"  href="https://drive.google.com/file/d/1gJxMtXoXMHPVZu-qpdl-f050UuZY-_KP/view" target="_blank" rel="noreferrer" download><a href={Resume} download="Vikas-Suresh-Resume.pdf"></a><button id="resume-button-1">Resume</button></a> */}

              {/* <a id="resume-link-1"  href="https://drive.google.com/file/d/1gJxMtXoXMHPVZu-qpdl-f050UuZY-_KP/view" target="_blank" rel="noreferrer" download><a href={Resume} download="Vikas-Suresh-Resume.pdf"></a><button id="resume-button-1">Resume</button></a> */}
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};

// import {
//   Box,
//   Flex,
//   HStack,
//   Link,
//   IconButton,
//   Button,
//   useDisclosure,
//   Stack,
// } from "@chakra-ui/react";
// import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
// import Resume from "../assets/ResumeLast/Vikas-Suresh-Resume.pdf";

// const Links = [
//   { title: "Home", href: "#home", class: "nav-link home" },
//   { title: "About", href: "#about", class: "nav-link about" },
//   { title: "Skills", href: "#skills", class: "nav-link skills" },
//   { title: "Project", href: "#projects", class: "nav-link projects" },
//   { title: "Contact", href: "#contact", class: "nav-link contact" },
// ];
// const handleDownload = () => {
//   const link = document.createElement("a");
//   link.href = Resume;
//   link.download = "Shiva-Singh-Resume(3).pdf";
//   link.click();
//   window.open(
//     "https://drive.google.com/file/d/1-bhndjKZyvpuQs6T9AICGmyZ801jiiXM/view?usp=drive_link",
//     "_blank"
//   );
// };

// export const NavBar=()=> {
//   const { isOpen, onOpen, onClose } = useDisclosure();

//   return (
//     <Box id="nav-menu">
//       <Box
//         bg={"#111111"}
//         px={4}
//         position={"fixed"}
//         w={"100%"}
//         zIndex={1}
//         h={isOpen ? "auto" : "75px"}
//         top={0}
//         borderBottom={"1px solid yellow"}
//       >
//         <Flex
//           h={16}
//           alignItems={"right"}
//           justifyContent={["right", "right", "right"]}
//         >
//           <IconButton
//             size={"md"}
//             icon={isOpen ? <CloseIcon /> : <HamburgerIcon bg="white" />}
//             aria-label={"Open Menu"}
//             display={{ md: "none" }}
//             onClick={isOpen ? onClose : onOpen}
//           />
//           <HStack spacing={8} alignItems={"center"}>
//             <HStack
//               as={"nav"}
//               spacing={4}
//               display={{ base: "none", md: "flex" }}
//             >
//               {Links.map((ele) => (
//                 <Link
//                   px={2}
//                   fontSize={"20px"}
//                   color={"#dedcdc"}
//                   py={1}
//                   rounded={"md"}
//                   _hover={{
//                     textDecoration: "none",
//                     color: "#4299E1",
//                   }}
//                   href={ele.href}
//                   className={ele.class}
//                 >
//                   {ele.title}
//                 </Link>
//               ))}
//               <Box className="nav-link resume">
//                 <Button
//                   fontSize={"20px"}
//                   variant="ghost"
//                   arial-label="RESUME"
//                   _hover={{
//                     color: "white",
//                     bg: "#e4002b",
//                   }}
//                   colorScheme="blue"
//                   id="resume-button-1"
//                   onClick={handleDownload}
//                 >
//                   Resume
//                 </Button>
//               </Box>
//             </HStack>
//           </HStack>
//         </Flex>

//         {isOpen ? (
//           <Box pb={4} bg="black" display={{ md: "none" }}>
//             <Stack as={"nav"} spacing={4}>
//               {Links.map(({ title, href }) => (
//                 <Link
//                   px={2}
//                   color={"white"}
//                   py={1}
//                   rounded={"md"}
//                   _hover={{
//                     textDecoration: "none",
//                     color: "#4299E1",
//                   }}
//                   href={href}
//                 >
//                   {title}
//                 </Link>
//               ))}
//             </Stack>
//           </Box>
//         ) : null}
//       </Box>

//       <Box p={isOpen ? "75px" : "0"}>content</Box>
//     </Box>
//   );
// }
