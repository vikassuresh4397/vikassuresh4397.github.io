import { Container, Row, Col, Tab, Nav, Button } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

import HS7 from "../assets/img/HS7.png";
import HS1 from "../assets/img/HS1.png";
import HS2 from "../assets/img/HS2.png";
import HS3 from "../assets/img/HS3.png";
import HS4 from "../assets/img/HS4.png";
import HS5 from "../assets/img/HS5.png";
import HS6 from "../assets/img/HS6.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';



import "../components/Projects.css";

// tech stack used
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

// TOOLs image imported
import bro16 from "../assets/Tools/BOOTSTRAP.png";
import bro17 from "../assets/Tools/CHAKRA UI.png";
import bro18 from "../assets/Tools/GIT.png";
import bro19 from "../assets/Tools/GITHUB.png";
import bro20 from "../assets/Tools/VSCODE.png";

let totalTechStackUsed=[bro1, bro2, bro3, bro4, bro5, bro6, bro7, bro8, bro9, bro10, bro11, bro12, bro13, bro14, bro15, bro16, bro17, bro18, bro19, bro20];


export const Projects = () => {

 const ProjectInfo =[
  {
  "Project_No":1,
  "Name":"Home Sweeter",
  "ImageUrl":"https://user-images.githubusercontent.com/118278010/246758460-fcdde12b-b3b4-4b02-b12d-527d38580763.png",
  "Description":"Home Sweeter is an e-commerce platform which acts as a one stop solution to buy, sell or rent properties with ease. Users can browse through various properties, schedule appointments, directly buy the properties and even list their own properties to sell on this platform.",
  "TypeOfProject": "Group-Project-(Total members - 4)",
  "Duration":"1 week",
  "totalTechStackImages":[  
    bro1,
    bro2,
    bro3,
    bro4,  
    bro6,
    bro7,
    bro10,
    bro12, bro13, bro14,bro16, bro17, bro18, bro19, bro20
  ],
  "GithubUrl":"https://github.com/vikassuresh4397/Home-Sweeter-",
  "NetlifyUrl":"https://homesweeter.netlify.app/"
 },
 {
  "Project_No":2,
  "Name":"Home Sweeter",
  "ImageUrl":"https://user-images.githubusercontent.com/118278010/246758460-fcdde12b-b3b4-4b02-b12d-527d38580763.png",
  "Description":"Home Sweeter is an e-commerce platform which acts as a one stop solution to buy, sell or rent properties with ease. Users can browse through various properties, schedule appointments, directly buy the properties and even list their own properties to sell on this platform.",
  "TypeOfProject": "Group-Project-(Total members - 4)",
  "Duration":"1 week",
  "totalTechStackImages":[  
    bro1,
    bro2,
    bro3,
    bro4,  
    bro6,
    bro7,
    bro10,
    bro12, bro13, bro14,bro16, bro17, bro18, bro19, bro20
  ],
  "GithubUrl":"https://github.com/vikassuresh4397/Home-Sweeter-",
  "NetlifyUrl":"https://homesweeter.netlify.app/"
 },
 {
  "Project_No":3,
  "Name":"Home Sweeter",
  "ImageUrl":"https://user-images.githubusercontent.com/118278010/246758460-fcdde12b-b3b4-4b02-b12d-527d38580763.png",
  "Description":"Home Sweeter is an e-commerce platform which acts as a one stop solution to buy, sell or rent properties with ease. Users can browse through various properties, schedule appointments, directly buy the properties and even list their own properties to sell on this platform.",
  "TypeOfProject": "Group-Project-(Total members - 4)",
  "Duration":"1 week",
  "totalTechStackImages":[  
    bro1,
    bro2,
    bro3,
    bro4,  
    bro6,
    bro7,
    bro10,
    bro12, bro13, bro14,bro16, bro17, bro18, bro19, bro20
  ],
  "GithubUrl":"https://github.com/vikassuresh4397/Home-Sweeter-",
  "NetlifyUrl":"https://homesweeter.netlify.app/"
 }
]

return (
  <section className="project" id="projects" >
  {ProjectInfo.map((project) => (
    <div key={project.Project_No} className="project-card">
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <img src={project.ImageUrl} alt={project.Name} />
          </Col>
          <Col xs={12} md={6}>
            <h2>{project.Name}</h2>
            <p>{project.Description}</p>
            <p className="details">{project.TypeOfProject}</p>
            <p className="details">{project.Duration}</p>
            <div className="project-buttons">
              <a className="github-button" href={project.GithubUrl}>
                GitHub Repository
              </a>
              <a className="netlify-button" href={project.NetlifyUrl}>
                Netlify Demo
              </a>
            </div>
            <div className="tech-stack">
              {project.totalTechStackImages.map((tech, index) => (
                <img key={index} src={tech} alt={`Tech ${index + 1}`} />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  ))}
</section>
);
}




/* Updated CSS in Projects.css */

.project {
    background-color: black;
    padding: 40px 0;
    margin:auto;
    justify-content: center;
    align-items: center;
  }
  
  .project-card {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin-bottom: 20px;
    border:5px solid rgb(164, 14, 164);
    width:80%;
   
  }
  
  .project-card img {
    max-width: 100%;
    height: auto;
    border-radius: 4px;
    margin-bottom: 20px;
  }
  
  .project-card h2 {
    font-size: 24px;
    margin-bottom: 10px;
    color: #333;
  }
  
  .project-card p {
    font-size: 16px;
    margin-bottom: 20px;
    color: #666;
  }
  
  .project-card .details {
    font-size: 14px;
    margin-bottom: 10px;
    color: #888;
  }
  
  .project-card .project-buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .project-card .project-buttons .github-button {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    text-decoration: none;
    transition: background-color 0.2s;
  }
  
  .project-card .project-buttons .github-button:hover {
    background-color: #0056b3;
  }
  
  .project-card .project-buttons .netlify-button {
    background-color: #28a745;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    text-decoration: none;
    transition: background-color 0.2s;
  }
  
  .project-card .project-buttons .netlify-button:hover {
    background-color: #1e7e34;
  }
  
  .project-card .tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 10px;
  }
  
  .project-card .tech-stack img {
    max-width: 50px;
    height: auto;
    border-radius: 4px;
  }
  
  @media (max-width: 768px) {
    .project-card {
      text-align: center;
    }
    .project-card img {
      margin: 0 auto 20px;
    }
  }
  
  .project {
    background-color: transparent; /* Set to transparent */
    padding: 40px 0;
    display: flex; /* Use flexbox to center the .project-card elements */
    flex-direction: column;
    justify-content: center; /* Horizontally center the .project-card elements */
    align-items: center; /* Vertically center the .project-card elements */
  }
 