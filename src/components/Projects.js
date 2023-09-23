import { Container, Row, Col, Tab, Nav, Button } from "react-bootstrap";



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
  "Name":"RealEstateExplore.com",
  "ImageUrl":"https://user-images.githubusercontent.com/118278010/246758460-fcdde12b-b3b4-4b02-b12d-527d38580763.png",
  "Description":"RealEstateExplore.com is an e-commerce platform which acts as a one stop solution to buy, sell or rent properties with ease. Users can browse through various properties, schedule appointments, directly buy the properties and even list their own properties to sell on this platform.",
  "TypeOfProject": "Individual",
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
  "GithubUrl":"https://github.com/vikassuresh4397/COzy-Home-Rentals/blob/main/README.md",
  "NetlifyUrl":"https://homesweeter.netlify.app/"
 },
 {
  "Project_No":2,
  "Name":"InterViewWizard",
  "ImageUrl":"https://camo.githubusercontent.com/6fcfa5d05456d7c4688b8d5fb031d1105efecffe36e8fc6b9bf198fae5fe473a/68747470733a2f2f692e706f7374696d672e63632f6d44524b315639502f53637265656e73686f742d3232312e706e67",
  "Description":"InterViewWizard is a self-interview preparation platform leveraging the power of OpenAI. The platform aims to assist job seekers and interviewees in enhancing their interview skills, boosting their confidence, and improving their chances of success during the interview process.",
  "TypeOfProject": "Group-Project-(Total members - 4)",
  "Duration":"3 Days",
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
  "GithubUrl":"https://github.com/vikassuresh4397/RoboMinds",
  "NetlifyUrl":"https://robominds.netlify.app/"
 },
 {
  "Project_No":3,
  "Name":"CureMeds.com-(Tata-1mg-clone)",
  "ImageUrl":"https://user-images.githubusercontent.com/92313981/229344642-4c85116c-375c-4969-9814-23e0fca3cacd.png",
  "Description":"CureMeds.com is a clone of Tata 1mg is India's leading digital healthcare platform. From doctor consultations on chat to online pharmacy and lab tests at home: we have it all covered for you. Having delivered over 25 million orders in 1000+ cities till date, we are on a mission to bring care to health to give you a flawless healthcare experience. Tata 1mg is India's leading online chemist with over 2 lakh medicines available at the best prices. We are your one-stop destination for other healthcare products as well, such as over the counter pharmaceuticals, healthcare devices and homeopathy and ayurveda medicines.",
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
   bro16, bro17, bro18, bro19, bro20
  ],
  "GithubUrl":"https://github.com/vikassuresh4397/tata-1mg",
  "NetlifyUrl":"https://medzplus.vercel.app/"
 },
 {
  "Project_No":4,
  "Name":"YouTube-Clone",
  "ImageUrl":"https://user-images.githubusercontent.com/112813417/268507894-05f585ce-a423-4dfc-bf2a-75199e98cf2c.JPG",
  "Description":"YouTube is an online video-sharing platform owned by Google, where users can upload, watch, and interact with videos. It features a wide range of content, including entertainment, tutorials, music, and more. Users can subscribe to channels, comment on videos, and creators can monetize their content. With a global reach and personalized recommendations, YouTube has become a significant part of internet culture, connecting creators with diverse audiences worldwide.",
  "TypeOfProject": "Individual-Project",
  "Duration":"1 week",
  "totalTechStackImages":[  
    bro1,
    bro2,
    bro3,
    bro4,  
  
    bro10,
     bro17, bro18, bro19, bro20
  ],
  "GithubUrl":"https://github.com/vikassuresh4397/Youtube-clone",
  "NetlifyUrl":"https://youtubeclone-vikas.netlify.app/"
 }
]

return (
  <section className="project" id="projects" style={{ backgroundColor: 'black' }}>
    <button id="frontendbutton"><h1 id="wow">PROJECTS</h1></button>
  {ProjectInfo.map((project) => (
    <div key={project.Project_No} className="project-card">
      <Container>
      <button id="frontendbutton"><h1 id="wow">Project-{project.Project_No}-{project.Name}</h1></button>
        <img id="projectImg" src={project.ImageUrl} alt={project.Name} />
        <h2 className="project-title">{project.Name}</h2>
        <p className="project-description">{project.Description}</p>
       

        <div>
  <button className="projectType small-button" id="frontendbutton">
    <h1 className="small-text">Project Type</h1>
  </button>

  <button id="frontendbutton" className="small-button">
    <h1 className="small-text">{project.TypeOfProject}</h1>
  </button>

  <br />

  <button className="projectType small-button" id="frontendbutton">
    <h1 className="small-text">Project Duration</h1>
  </button>

  <button id="frontendbutton" className="small-button">
    <h1 className="small-text">{project.Duration}</h1>
  </button>
</div>



{/* project-github-link */}

        <div className="project-buttons">
          <a className="project-github-link" href={project.GithubUrl}>
            GitHub Repository
          </a>

          {/* project-deployed-link */}
          <a className="project-deployed-link" href={project.NetlifyUrl}>
            Netlify Demo
          </a>
        </div>

        {/* project-tech-stack */}
        <div className="project-tech-stack">
          {project.totalTechStackImages.map((tech, index) => (
            <img key={index} src={tech} alt={`Tech ${index + 1}`} />
          ))}
        </div>
      </Container>
    </div>
  ))}
</section>
);
}