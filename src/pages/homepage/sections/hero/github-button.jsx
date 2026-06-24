import './github-button.css';

import './hero.css';

import GitHubLogo from "@logos/github/github-logo.jsx";

export default function GitHubButton() {
  return (
    <a
      href="https://github.com/chapeullah"
      className="button github-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      <GitHubLogo className="button__icon" />
      <div className="button__wrapper">
        <h5 className={'button__label'}>GitHub</h5>
        <p className={'button__title'}>View profile</p>
      </div>
    </a>
  );
}