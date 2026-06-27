import './github-button.css';

import './hero.css';

import Button from "@ui/button";

import GitHubLogo from "@logos/github/github-logo.jsx";

export default function GitHubButton() {
  return (
    <Button
      href="https://github.com/chapeullah"
      className="github-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      <GitHubLogo className="button__icon" />
      <div className="button__wrapper">
        <h5 className={'button__label'}>GitHub</h5>
        <p className={'button__title'}>View profile</p>
      </div>
    </Button>
  );
}