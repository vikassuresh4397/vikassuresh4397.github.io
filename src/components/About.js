import "../components/About.css";
import React from "react";
import image1 from "../assets/images/1.jpg";
import image2 from "../assets/images/2.jpg";
import image3 from "../assets/images/3.jpg";
import image4 from "../assets/images/4.jpg";
import image5 from "../assets/images/5.jpg";
import {FiMail, FiPhone } from "react-icons/fi";
// import image6 from "../assets/img/vikasprofpic-removebg-preview_clipdrop-relight.jpg";
// import Resume from "../assets/ResumeLast/Vikas-Suresh-Resume.pdf";
import Resume from "../assets/ResumeLatest/Vikas-Suresh-Resume.pdf";
import image6 from "../assets/img/vikas_pic_blackcoat.jpg"



const About = () => {
  // Array of images from the image folder
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    // Add more images as needed
  ];

  // Current index of the displayed image
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  // Function to update the current image index every second
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [images.length]);

  // const downloadResume = () => {
  //   const link = document.createElement("a");
  //   link.href = resumePdf;
  //   link.download = "Vikas-Suresh-Resume.pdf";
  //   link.click();
  // };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href =
    "https://drive.google.com/file/d/1wCB07ly2sLSkm0UhprhqmGrm_reZOw93/view?usp=sharing";
  link.target = "_blank";
  link.download = "Vikas-Suresh-Resume.pdf";
    link.click();

    // Redirect to the downloaded resume after a delay
    setTimeout(() => {
      window.open( "https://drive.google.com/file/d/1wCB07ly2sLSkm0UhprhqmGrm_reZOw93/view?usp=sharing"
      , "_blank");
    }, 1000);
  };
  
  const showPhoneNumber = () => {
    const phoneNumber = "+91-9372702927";
    
    // Create a string with the phone number and icon
    const alertMessage = `📞 Phone Number: ${phoneNumber}`;
    
    // Show the alert
    alert(alertMessage);
  };
  
  

  return (
    <section id="about" className="about section">
      <div className="about-wrapper">
        <div className="top">
          <div className="left-side">
            <br></br>
            <h2>About Me 👨🏼‍💻👷🏻🖥️💻</h2>
            <p id="user-detail-intro">
              I am Vikas Suresh, an aspiring Full-Stack Web Developer with
              excellent skills in administration, communication, and MERN Stack
              development. With 1200+ coding hours, I focus on details and have
              expertise in JavaScript, React, Node.js, Express.js, and MongoDB.
              Passionate and curious, I seek career growth in technology-driven
              companies to showcase my skills and expand my knowledge.
            </p>
            <h3>Education 🎓📚📔📕</h3>
            <p>
              Full Stack Web Development, Masai School 07/2022 – 08/2023 |
              Banglore
            </p>
            <p>
              Masters & Bachelors in Civil Engineering (Construction Engineering
              & Management), Pillai HoC College of Engineering & Technology 2015
              – 2023 | Rasayani | Mumbai Univesity
            </p>

            <h3>Hobbies & Interests🤓🎨🖼️💰</h3>
            <p>Shadow Painting & UI and UX designing</p>
            <h3>Contact ME 👇🏻</h3>
            <button id="contact-email" style={{ color: "white"}}>📧-vikassuresh4397@gmail.com</button>
            <br />
            <button   id="contact-phone">  <a id="contact-phone" href="#phone" className="funnyicon" onClick={showPhoneNumber} >
            📞- (+91-9372702927)
</a></button>

<br />
<br />
<br />
            <div >
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

            




            {/* <div className="resume-section">
              <h3>Resume 📄</h3>
              <button
               id="resume-button-2"
                onClick={downloadResume}
                style={{
                  color: "white",
                  backgroundColor: "red",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
                download="Vikas-Suresh-Resume.pdf"
              >
                Download Resume
              </button>
            </div> */}
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


// https://drive.google.com/file/d/1gJxMtXoXMHPVZu-qpdl-f050UuZY-_KP/view?usp=sharing