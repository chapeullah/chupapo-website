import "./projects-page.css";

import { projects } from "./projects.js";
import ProjectCard from "./project-card/project-card.jsx";


const listProjects = projects.map((project) => (
  <ProjectCard key={project.id} project={project} />
));

export default function ProjectsPage() {
  return (
    <div className="projects-page">
      <div className="projects-container">{listProjects}</div>
    </div>
  );
}