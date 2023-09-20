import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { FiGithub, FiMail, FiPhone } from "react-icons/fi";
import "./Contact.css";

export const Footer = () => {
  const navigateToLinkedIn = () => {
    window.location.href =
      "https://www.linkedin.com/in/vikas-suresh-05a60b23b/";
  };

  const navigateToFacebook = () => {
    window.location.href =
      "https://www.facebook.com/vikas.suresh.3597";
  };

  const navigateToGithub = () => {
    window.location.href =
      "https://github.com/vikassuresh4397";
  };

  const navigateToInstagram = () => {
    window.location.href =
      "https://www.instagram.com/mephisto7991/";
  };

  return (
    <footer className="footer">
     
     <h1>Contact Me</h1>
      <div className="social-icon">
        <div id="harry">
        <a href="https://www.linkedin.com/in/vikas-suresh-05a60b23b/">
          <img src={navIcon1} alt="Icon" />
        </a>
        <br />
        <button id="contact-linkedin" onClick={navigateToLinkedIn} style={{ color: "white"}}>linkedin</button>

        <br />
        <a href="https://www.facebook.com/vikas.suresh.3597">
          <img src={navIcon2} alt="Icon" />
        </a>
        <br />
        <button onClick={navigateToFacebook} style={{ color: "white"}}>Facebook</button>
        <br />
        <a href="https://www.instagram.com/mephisto7991/">
          <img src={navIcon3} alt="Icon" />
        </a>
        <br />
        <button onClick={navigateToInstagram} style={{ color: "white"}}>Instagram</button>
        <br />
        <a href="https://github.com/vikassuresh4397">
          <FiGithub />
        </a>
        <br />
        <button id="contact-github" onClick={navigateToGithub} style={{ color: "white"}}>GitHub</button>
        <br />
        <a href="#mail">
          <FiMail />
        </a>
        <br />
        <button id="contact-email" style={{ color: "white"}}>Mail - vikassuresh4397@gmail.com</button>
        <br />
        <a href="#phone">
          <FiPhone />
        </a>
        <br />
        <button id="contact-phone" style={{ color: "white"}}>Phone Number - +91-9372702927</button>
        </div>
             </div>
    </footer>
  );
};
