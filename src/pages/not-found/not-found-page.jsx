import './not-found-page.css';

import GoBackButton from './go-back-button';

export default function NotFoundPage() {
  return (
    <div className='not-found-page'>
      <div className='not-found-page__container'>
        <span className='not-found-page__label'>404</span>
        <span className='not-found-page__title'>NOT FOUND</span>
        <GoBackButton />
      </div>
    </div>
  );
}
