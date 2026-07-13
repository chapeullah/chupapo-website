import GitHubLogo from "@logos/github/github-logo.jsx";
import { gitHubLink } from "@widgets/header/links.js";
import { site } from "@config/site.js";

export default function GitHubButton() {
  return (
    <a
      href={gitHubLink.href}
      className="action-button"
      aria-label={site.contacts.github.label}
      target="_blank"
      rel="noreferrer noopener"
    >
      <GitHubLogo className="action-button__icon" />
    </a>
  );
}
