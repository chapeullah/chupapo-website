import "./project-card.css";

import { useState } from "react";

import DescriptionIcon from "@icons/description-icon/description-icon.jsx";
import MonitorIcon from "@icons/monitor/monitor-icon.jsx";
import WebsiteIcon from "@icons/website/website-icon.jsx";
import { useLanguage } from "@i18n/use-language.js";
import { useTheme } from "@theme/use-theme.js";

const locales = {
  ru: "ru-RU",
  en: "en-US",
};

export default function ProjectCard({ project }) {
  const { t, language } = useLanguage();
  const { appliedTheme } = useTheme();

  const preview = project.previews[language][appliedTheme];

  const i18n = t.projects;
  const projectI18n = i18n.items[project.id];

  const releaseDate = new Intl.DateTimeFormat(locales[language], {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(project.releaseDate));

  const [selectedTab, setSelectedTab] = useState("description");

  const tabs = [
    {
      id: "description",
      label: i18n.description,
      icon: DescriptionIcon,
    },
    {
      id: "preview",
      label: i18n.preview,
      icon: MonitorIcon,
    },
  ];

  return (
    <article className="project-card">
      <p className="project-card__eyebrow">{projectI18n.eyebrow}</p>
      <div className="project-card__header">
        <WebsiteIcon className="project-card__icon" />
        <div className="project-card__title">
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
            {projectI18n.name}
          </a>
        </div>
      </div>
      <nav className="project-card__menu">
        <div className="project-card__tabs">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            
            return (
              <button
                key={tab.id}
                type="button"
                className={`project-card__tab ${
                  selectedTab === tab.id ? "project-card__tab--selected" : ""
                }`}
                onClick={() => setSelectedTab(tab.id)}
              >
                {Icon && <Icon className="project-card__tab-icon" />}
                <span className="project-card__tab-title">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
      <div className="project-card__body">
        {/* DESCRIPTION */}
        {selectedTab === "description" && (
          <>
            <p className="project-card__description">{projectI18n.description}</p>
            <div className="project-card__tags">
              {project.tags.map((tag) => (
                <article key={tag.id} className="project-card__tag">{tag.name}</article>
              ))}
            </div>
          </>
        )}
        {/* PREVIEW */}
        {selectedTab === "preview" && (
          <div className="project-card__preview">
            <img
              className="project-card__preview-image"
              src={preview}
              alt={`${projectI18n.name} preview`}
            />
          </div>
        )}
        <div className="project-card__meta">
          <span className="project-card__release-date">
            {i18n.released} {releaseDate}
          </span>
        </div>
      </div>
    </article>
  );
}
