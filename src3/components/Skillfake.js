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




export const Skills = () => {
  return (
    <section id="skills">
      <h1>Skills</h1>
      <div className="skill-about-wrapper">
        <div className="skill-top">
          <h1>FrontEnd</h1>
          <div className="skills-card">
            <img src={bro1} alt="CSS" className="skills-card-img" />
            <span className="skills-card-name">CSS</span>
          </div>
          <div className="skills-card">
            <img src={bro2} alt="DSA" className="skills-card-img" />
            <span className="skills-card-name">DSA</span>
          </div>
          {/* Add more FrontEnd skills cards with the same structure */}
        </div>
        <div className="skill-middle">
          <h1>BackEnd</h1>
          <div className="skills-card">
            <img src={bro11} alt="DSA" className="skills-card-img" />
            <span className="skills-card-name">DSA</span>
          </div>
          <div className="skills-card">
            <img src={bro12} alt="ExpressJS" className="skills-card-img" />
            <span className="skills-card-name">ExpressJS</span>
          </div>
          {/* Add more BackEnd skills cards with the same structure */}
        </div>
        <div className="skill-bottom">
          <h1>Tools</h1>
          <div className="skills-card">
            <img src={bro16} alt="BOOTSTRAP" className="skills-card-img" />
            <span className="skills-card-name">BOOTSTRAP</span>
          </div>
          <div className="skills-card">
            <img src={bro17} alt="CHAKRA UI" className="skills-card-img" />
            <span className="skills-card-name">CHAKRA UI</span>
          </div>
          {/* Add more Tools skills cards with the same structure */}
        </div>
      </div>
    </section>
  );
};




 