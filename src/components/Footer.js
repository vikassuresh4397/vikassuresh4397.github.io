import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { FiGithub, FiMail, FiPhone } from "react-icons/fi";
import "./Contact.css";
import { Col, Row, Container } from "react-bootstrap";
import { useState } from "react";

export const Footer = () => {

  const [showPhonePopup, setShowPhonePopup] = useState(false);



  const showPhoneNumber = () => {
    const phoneNumber = "+91-9372702927";
    
    // Create a string with the phone number and icon
    const alertMessage = `📞 Phone Number: ${phoneNumber}`;
    
    // Show the alert
    alert(alertMessage);
  };
  

  

  return (
    <footer className="footer">
      <br />
      <br />
      <br />
      <br />

<div id="lastfooter">
<h1>Contact Me</h1>

<Container>
  <Row className="align-items-center">
    <Col size={12} sm={6}>
      <div id="imggg">
        <img
          src="https://user-images.githubusercontent.com/112813417/269988004-1f81ece0-4a47-4ba4-98fd-14adde48430c.jpg"
          alt="Logo"
          className="center-image"
        />
      </div>
    </Col>

    <Col
      size={12}
      sm={6}
      className="text-center text-sm-end"
      id="wowfooter"
    >
     
      <div className="social-icon">
      <h2>Follow me on👇🏻👇🏻👇🏻</h2>
      <br />
        <a id="contact-linkedin" href="https://www.linkedin.com/in/vikas-suresh-05a60b23b/">
          <img src={navIcon1} alt="Icon" />
        </a>
        <a href="https://www.facebook.com/vikas.suresh.3597">
          <img src={navIcon2} alt="Icon" />
        </a>
        <a href="https://www.instagram.com/mephisto7991/">
          <img src={navIcon3} alt="Icon" />
        </a>
        <a
          href="https://github.com/vikassuresh4397"
          className="funnyicon"
          id="contact-github"
        >
          <FiGithub />
        </a>
        <a
        id="contact-email"
          href="https://mail.google.com/mail/?view=cm&fs=1&to=vikassuresh4397@gmail.com&su=I%20would%20like%20to%20connect%20with%20you&body=Your%20resume%20matches%20my%20company%20needs.%20Would%20you%20be%20interested%20in%20working%20with%20us?"
          target="_blank"
          className="funnyicon"
          
        >
          <FiMail id="contact-email" />
        </a>
        <a id="contact-phone" href="#phone" className="funnyicon" onClick={showPhoneNumber} >
  <FiPhone />
</a>
      </div>
      <p></p>
    </Col>
  </Row>
</Container>

</div>

      
    
    </footer>
  );
};
