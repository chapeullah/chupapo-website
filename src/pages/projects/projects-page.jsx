import './projects-page.css';

const projects = [
  {
    title: "Website",
  },
];

function projectCard(title) {
  return (
    <article className="project-card">
      <div className="project-card__header">{title}</div>
      <nav className="project-card__menu"></nav>
      <div className="project-card__body"></div>
    </article>
  );
}

export default function ProjectsPage() {
  return (
    <main className="projects-page">
      <div className="projects-container">
        {projects.map((project) => (
          projectCard(project.title)
        ))}
      </div>

    </main>
  );
}