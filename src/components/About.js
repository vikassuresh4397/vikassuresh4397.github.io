import "../components/About.css";
import React from "react";
import image1 from "../assets/images/1.jpg";
import image2 from "../assets/images/2.jpg";
import image3 from "../assets/images/3.jpg";
import image4 from "../assets/images/4.jpg";
import image5 from "../assets/images/5.jpg";
import { FiMail, FiPhone } from "react-icons/fi";

import Resume from "../assets/ResumeLatest/Vikas-Suresh-Resume.pdf";
import image6 from "../assets/img/vikas_pic_blackcoat.jpg";

const About = () => {

  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
   
  ];


  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);


  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [images.length]);



  const downloadResume = () => {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/file/d/1wCB07ly2sLSkm0UhprhqmGrm_reZOw93/view?usp=sharing";
    link.target = "_blank";
    link.download = "Vikas-Suresh-Resume.pdf";
    link.click();

 
    setTimeout(() => {
      window.open(
        "https://drive.google.com/file/d/1wCB07ly2sLSkm0UhprhqmGrm_reZOw93/view?usp=sharing",
        "_blank"
      );
    }, 1000);
  };

  const showPhoneNumber = () => {
    const phoneNumber = "+91-9372702927";


    const alertMessage = `📞 Phone Number: ${phoneNumber}`;


    alert(alertMessage);
  };

  return (
    <section id="about" className="about section">
      <div className="about-wrapper">
        <div className="top">
          <div className="left-side">
            <br></br>
            <div className="box">
              <h2>
                <button>About Me 👨🏼‍💻👷🏻🖥️💻</button>
              </h2>
              <p id="user-detail-intro" style={{
                      color: "white"}}>
                I am Vikas Suresh, an aspiring Full-Stack Web Developer with
                excellent skills in administration, communication, and MERN
                Stack development. With 1200+ coding hours, I focus on details
                and have expertise in JavaScript, React, Node.js, Express.js,
                and MongoDB. Passionate and curious, I seek career growth in
                technology-driven companies to showcase my skills and expand my
                knowledge.
              </p>
            </div>

            <div className="box">
  <h2 style={{
                      color: "black"}}>Education 🎓📚📔📕</h2>
  <div className="education-item">
    <div className="education-title">Full Stack Web Development:</div>
    <div className="education-details">Masai School | 07/2022 – 08/2023 | Bangalore</div>
  </div>
  <div className="education-item">
    <div className="education-title">Masters & Bachelors in Civil Engineering:</div>
    <div className="education-details">Pillai HoC College of Engineering & Technology | 2015 – 2023 | Rasayani | Mumbai University</div>
  </div>
</div>


            <div className="box">
              <h2>
                <button>Hobbies & Interests🤓🎨🖼️💰</button>
              </h2>

              <p>Shadow Painting & UI and UX designing</p>
            </div>

            <div className="box">
              <h2>
                <button>Contact ME 👇🏻</button>
              </h2>

              <button id="contact-email" style={{ color: "black" }}>
                📧-vikassuresh4397@gmail.com
              </button>
              <br />
              <button id="contact-phone">
                {" "}
                <a
                  id="contact-phone"
                  href="#phone"
                  className="funnyicon"
                  onClick={showPhoneNumber}
                >
                  📞- (+91-9372702927)
                </a>
              </button>
            </div>

         
              <div>
                <h3>Resume 📄</h3>
                <a
                  id="resume-link-2"
                  className="nav-link resume"
                  href={Resume}
                  target="_blank"
                  download="Vikas-Suresh-Resume.pdf"
                >
                  <button
                    id="resume-button-2"
                    style={{
                      color: "white",
                      backgroundColor: "red",
                      border: "none",
                      padding: "10px 20px",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                    onClick={downloadResume}
                  >
                    <span>Resume</span>
                  </button>
                </a>
              </div>
        

        
          </div>
          <div className="right-side">
            <img className="home-img" src={image6} alt="" />
          </div>
        </div>
        <br />
        <div className="bottom">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index}`}
              style={{
                display: index === currentImageIndex ? "block" : "none",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
