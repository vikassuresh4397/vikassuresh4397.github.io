import React from "react";

import "../components/Skills.css";

// FrontEnd image imported
import bro1 from "../assets/FrontEnd/CSS.png";
import bro2 from "../assets/FrontEnd/Dsa.png";
import bro3 from "../assets/FrontEnd/HTML.png";
import bro4 from "../assets/FrontEnd/JS.png";
import bro5 from "../assets/FrontEnd/NEXTJS.png";
import bro6 from "../assets/FrontEnd/REACT.png";
import bro7 from "../assets/FrontEnd/REDUX.png";
import bro8 from "../assets/FrontEnd/Typescript.png";
import bro9 from "../assets/FrontEnd/cypress.jpeg";
import bro10 from "../assets/FrontEnd/npm.png";

// BackEnd image imported
import bro11 from "../assets/BackEnd/Dsa.png";
import bro12 from "../assets/BackEnd/ExpressJS.png";
import bro13 from "../assets/BackEnd/NodeJS.png";
import bro14 from "../assets/BackEnd/mongodb.jpeg";
import bro15 from "../assets/BackEnd/npm.png";
import bro100 from "../assets/BackEnd/mongoose.png";
import bro101 from "../assets/BackEnd/jwt.png";
import bro102 from "../assets/BackEnd/nodemon.png";
import bro103 from "../assets/BackEnd/JSON.png";
import bro104 from "../assets/BackEnd/atlas.png";
import bro105 from "../assets/BackEnd/nosqll.jpeg";


// TOOLs image imported
import bro16 from "../assets/Tools/BOOTSTRAP.png";
import bro17 from "../assets/Tools/CHAKRA UI.png";
import bro18 from "../assets/Tools/GIT.png";
import bro19 from "../assets/Tools/GITHUB.png";
import bro20 from "../assets/Tools/VSCODE.png";
import bro200 from "../assets/Tools/newImages/Postman.png";
import bro201 from "../assets/Tools/newImages/ThunderClient.png";
import bro202 from "../assets/Tools/newImages/codepen.png";
import bro203 from "../assets/Tools/newImages/codesandbox.png";
import bro204 from "../assets/Tools/newImages/replit.png";

//  Deployment Tools
import bro501 from "../assets/Deployment/netlify-logo-png-transparent.png";
import bro502 from "../assets/Deployment/vercelapp.png";
import bro503 from "../assets/Deployment/github_pages.jpg";

const deploymentImages=[bro501,bro502,bro503];

const frontEndImages = [
  bro1,
  bro2,
  bro3,
  bro4,
  bro5,
  bro6,
  bro7,
  bro8,
  bro9,
  bro10,
];

const deploymentNames=["Netlify","Vercel","GitHub Pages"];

const frontEndNames = [
  "CSS",
  "DSA",
  "HTML",
  "JavaScript",
  "Next.js",
  "React",
  "Redux",
  "TypeScript",
  "Cypress",
  "npm",
];

const backEndImages = [bro100, bro12, bro13, bro14, bro15,bro101,bro102,bro103,bro104,bro105];
const backEndNames = ["Mongoose", "Express", "Node.js", "MongoDB", "npm","Jwt","Nodemon","JSON","Atlas","No-SQL"];
// import bro200 from "../assets/Tools/newImages/Postman.png";
// import bro201 from "../assets/Tools/newImages/ThunderClient.png";
// import bro202 from "../assets/Tools/newImages/codepen.png";
// import bro203 from "../assets/Tools/newImages/codesandbox.png";
// import bro204 from "../assets/Tools/newImages/replit.png";
const toolsImages = [bro16, bro17, bro18, bro19, bro20,bro200,bro201,bro202,bro203,bro204];
const toolNames = ["Bootstrap", "Chakra UI", "Git", "GitHub", "VSCode","PostMan","ThunderClient","Codepen","Codesandbox","Replit"];

export const Skills = () => {
  const isSmallScreen = window.innerWidth <= 600;


  // Determine the number of items in each row based on screen size
  const itemsPerRow = isSmallScreen ? 2 : 5;

  return (
    <section id="skills">
      <div id="skillgaint">
        <div className="section-title">
          <h2>SKILLS</h2>
        </div>

        {/* Frontend */}
        <div className="section-title">
          <button id="frontendbutton">
            <h1>FRONTEND</h1>
          </button>
        </div>
        <div className="skills-row">
          {frontEndImages.map((image, index) => (
            <div className="skills-card" key={index}>
              <img
                src={image}
                alt={`Frontend Skill ${index + 1}`}
                className="skills-card-img"
              />
              <p className="skills-card-name frontend-name">
                {frontEndNames[index]}
              </p>
            </div>
          ))}
        </div>

        {/* Backend */}
        <div className="section-title">
        <button id="frontendbutton">
            <h1>BACKEND</h1>
          </button>
        </div>
        <div className="skills-row">
          {backEndImages.map((image, index) => (
            <div className="skills-card" key={index}>
              <img
                src={image}
                alt={`Backend Skill ${index + 1}`}
                className="skills-card-img"
              />
              <p className="skills-card-name backend-name">
                {backEndNames[index]}
              </p>
            </div>
          ))}
        </div>







        <div className="section-title">
        <button id="frontendbutton">
            <h1>DEPLOYMENT TOOLS</h1>
          </button>
        </div>
        <div className="skills-row">
          {deploymentImages.map((image, index) => (
            <div className="skills-card" key={index}>
              <img
                src={image}
                alt={`Backend Skill ${index + 1}`}
                className="skills-card-img"
              />
              <p className="skills-card-name backend-name">
                {deploymentNames[index]}
              </p>
            </div>
          ))}
        </div>





        {/* Tools */}
        <div className="section-title">
        <button id="frontendbutton">
            <h1>TOOLS</h1>
            
          </button>
        </div>
        <div className="skills-row">
          {toolsImages.map((image, index) => (
            <div className="skills-card" key={index}>
              <img
                src={image}
                alt={`Tool ${index + 1}`}
                className="skills-card-img"
              />
              <p className="skills-card-name tool-name">{toolNames[index]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
