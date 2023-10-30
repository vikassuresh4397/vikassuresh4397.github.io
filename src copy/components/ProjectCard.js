import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl,netlify }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="project-card">
        <img  src={imgUrl} />
        <div className="proj-txtx">
          <h4 className="project-title">{title}</h4>
          <a className="project-github-link" href="https://github.com/TruptimayeePanigrahy/cared-lip-7373" color="red">GitHub Repository</a>
          <br />
          <span className="project-description">Description: {description}</span>
          <br />

        
          <a className="project-deployed-link" href={netlify}>Deployed Netlify link</a>
          <br />


          <span className="project-tech-stack">Tech stack used: React | Node | Express </span>
          <br />
          <a href={imgUrl}>Image link</a>
        </div>

   
        
   
         
        
      </div>
    </Col>
  )
}
