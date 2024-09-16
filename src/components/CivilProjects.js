import { Container, Row, Col, Tab, Nav, Button } from "react-bootstrap";



import "../components/CivilProjects.css";
// import "./Projects.css"

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

// Patent File
import bro301 from "../assets/PatentImg/C++.png";
import bro302 from "../assets/PatentImg/C.png";
import bro303 from "../assets/PatentImg/Excel.jpeg";
import bro304 from "../assets/PatentImg/IOT.jpeg";
import bro305 from "../assets/PatentImg/PPT.png";
import bro306 from "../assets/PatentImg/Word.png";
import bro307 from "../assets/PatentImg/fritzing.jpg";
import bro308 from "../assets/PatentImg/Arduino.JPG";
import bro309 from "../assets/PatentImg/Fig. 1. Smart construction safety helmet.png";


export const CivilProjects = () => {

 const ProjectInfo =[
  {
  "Project_No":1,
  "Name":"Smart Construction Safety Helmet",
  "ImageUrl":bro309,
  "Description":"Smart Construction Safety Helmet proposes the integration of smart technology into standard safety helmets to enhance construction site safety. Equipped with various sensors including infrared, temperature, sound, gas, and smoke sensors, these helmets monitor parameters such as drowsiness, body temperature, sound levels, gas leaks, and smoke concentration. Data collected by these sensors are transmitted wirelessly to managers' or supervisors' mobile screens via Bluetooth, enabling real-time monitoring and immediate response to potential hazards. Additionally, the helmets automate pay record maintenance, streamlining administrative tasks. The results indicate the effectiveness of these smart helmets in safeguarding workers from diverse on-site risks, suggesting their potential to significantly improve construction site safety.",
  "TypeOfProject": "Individual",
  "Duration":"1 Year",
  "totalTechStackImages":[  
   bro301,
   bro302,
   bro303,
   bro304,
   bro305,
   bro306,
   bro307,
   bro308,
  ],
  "GithubUrl":"https://drive.google.com/file/d/1rbcdAcaEQx6dD-xSgpZxNStGni0O-Zho/view?usp=sharing",
  "NetlifyUrl":"https://www.youtube.com/watch?v=Qs0QmTbNueQ",
  "patentStatus":"https://drive.google.com/file/d/1BWQKvzM6gSGz-xpEvE3ItWWOWUcW2nbF/view?usp=sharing",
 },

   
];


return (
  <section className="civilproject" id="projects" style={{ backgroundColor: 'black' }}>
    <button id="frontendbutton"><h1 id="wow">Achievements</h1></button>
  {ProjectInfo.map((project) => (
    <div key={project.Project_No} className="project-card">
      <Container>
      <button id="frontendbutton"><h1 id="wow" className="projectkaname">📑🌟Patent🌟📑 - {project.Name}</h1></button>
        <img id="projectImg" src={project.ImageUrl} alt={project.Name} />
        <h2 className="project-title">{project.Name}</h2>
        <p className="project-description">{project.Description}</p>
       

        <div>
  <button className="projectType small-button" id="frontendbutton">
    <h1 className="small-text">Project Type</h1>
  </button>{" "}

  <button id="frontendbutton" className="small-button">
    <h1 className="small-text">{project.TypeOfProject}</h1>
  </button>

  <br />

  <button className="projectType small-button" id="frontendbutton">
    <h1 className="small-text">Project Duration</h1>
  </button>{" "}

  <button id="frontendbutton" className="small-button">
    <h1 className="small-text">{project.Duration}</h1>
  </button>
</div>



{/* project-github-link */}

        <div className="project-buttons">
          <a className="project-github-link" href={project.GithubUrl}>
            Patent Filed Certificate
          </a>
          

          {/* project-deployed-link */}
          <a  href={project.NetlifyUrl}>
          {/* <div className="project-tech-stack">
            
         
            <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/YouTube_social_red_circle_%282017%29.svg/300px-YouTube_social_red_circle_%282017%29.svg.png?20220808215554" alt="" />

         
        </div>  */}
        {/* Youtube video */}

        <div className="project-tech-stack">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/YouTube_social_red_circle_%282017%29.svg/300px-YouTube_social_red_circle_%282017%29.svg.png?20220808215554" alt="" width="100" />
        <button id="youtubeButton" className="custom-button">Click here</button>

        </div>
       


          </a>

          <a className="project-deployed-link" href={project.patentStatus}>
            Patent Status
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