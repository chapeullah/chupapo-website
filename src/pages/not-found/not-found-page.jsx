import './not-found-page.css';

import { useLanguage } from '@i18n/use-language.js';
import Button from '@ui/button/index.js';
import HomeIcon from '@icons/home/home-icon.jsx';

export default function NotFoundPage() {
  const { t } = useLanguage();
  const i18n = t.notFound;

  return (
    <div className='not-found-page'>
      <div className='not-found-page__container'>
        <span className='not-found-page__label'>404</span>
        <span className='not-found-page__title'>{i18n.title}</span>
        <Button
          to="/"
          className="go-home-button"
          variant="default"
        >
          <HomeIcon className="go-home-button__icon" />
          <span className="go-home-button__title">{i18n.button}</span>
        </Button>
      </div>
    </div>
  );
}
