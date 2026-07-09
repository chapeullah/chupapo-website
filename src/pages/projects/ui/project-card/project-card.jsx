import './project-card.css';

import { useState } from 'react';
import DescriptionIcon from '@icons/description-icon/description-icon.jsx';

export default function ProjectCard({ project }) {
  const [selectedTab, setSelectedTab] = useState("description");

  const tabs = [
    {
      id: "description",
      label: "Description",
      icon: <DescriptionIcon />,
    },
    {
      id: "preview",
      label: "Preview",
      icon: null,
    },
  ];

  return (
    <article className="project-card">
      <p className="project-card__eyebrow">{project.eyebrow}</p>
      <div className="project-card__header">
        <a
          href={project.owner.link}
          className="project-card__link project-card__repo-owner"
          target="_blank"
          rel="noreferrer noopener"
        >
          {project.owner.name}
        </a>
        {" / "}
        <a
          href={project.link}
          className="project-card__link project-card__repo-name"
          target="_blank"
          rel="noreferrer noopener"
        >
          {project.title}
        </a>
      </div>
      <nav className="project-card__menu">
        <ul className="project-card__tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`project-card__tab ${
                selectedTab === tab.id ? "project-card__tab--selected" : ""
              }`}
              onClick={() => setSelectedTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </ul>
      </nav>
      <div className="project-card__body">
        {/* DESCRIPTION */}
        {selectedTab === "description" && (
          <>
            <p className="project-card__description">{project.description}</p>
            <div className="project-card__tags">
              {project.tags.map((tag) => (
                <article className="project-card__tag">{tag}</article>
              ))}
            </div>
          </>
        )}
        {/* PREVIEW */}
        {selectedTab === "preview" && (
          <div className="project-card__preview">
            <img
              className="project-card__preview-image"
              src={project.preview}
              alt={`${project.title} preview`}
            />
          </div>
        )}
        <div className="project-card__meta">
        <span>
          Released on {new Intl.DateTimeFormat('en-US', {
          month: 'long',
          year: 'numeric',
          day: 'numeric',
          timeZone: 'UTC',
        }).format(new Date(project.releaseDate))}
        </span>
        </div>
      </div>
    </article>
  );
}