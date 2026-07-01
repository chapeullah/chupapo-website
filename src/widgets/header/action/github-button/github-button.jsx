import GitHubLogo from '@logos/github/github-logo.jsx';

export default function ContactButton() {
  return (
    <a
      href="https://github.com/chapeullah"
      className="action-button"
      target="_blank"
      rel="noreferrer noopener"
    >
      <GitHubLogo className="action-button__icon" />
    </a>
  );
}