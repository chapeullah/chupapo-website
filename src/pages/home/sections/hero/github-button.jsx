import Button from '@ui/button/index.js';

import GitHubLogo from '@logos/github/github-logo.jsx';
import { useLanguage } from '@i18n/use-language.js';
import { site } from '@i18n/site.js';

export default function GitHubButton() {
  const { t } = useLanguage();
  const i18n = t.hero.buttons;

  return (
    <Button
      href={site.contacts.github.link}
      className="hero__github-button"
      variant="default"
      target="_blank"
      rel="noopener noreferrer"
    >
      <GitHubLogo className="button__icon" />
      <div className="button__wrapper">
        <h5 className={"button__label"}>{site.contacts.github.label}</h5>
        <p className={"button__title"}>{i18n.github.subtitle}</p>
      </div>
    </Button>
  );
}