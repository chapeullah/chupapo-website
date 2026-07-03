import GitHubLogo from '@logos/github/github-logo.jsx';
import { githubLink } from '@widgets/header/links.js';

export default function ContactButton() {
  return (
    <a
      href={githubLink.href}
      className="action-button"
      target="_blank"
      rel="noreferrer noopener"
    >
      <GitHubLogo className="action-button__icon" />
    </a>
  );
}