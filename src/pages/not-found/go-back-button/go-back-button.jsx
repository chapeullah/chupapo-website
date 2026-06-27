import './go-back-button.css';

import HomeIcon from "@icons/go-home/home-icon.jsx";

import Button from "@ui/button";

export default function GoBackButton() {
  function handleClick() {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = '/';
    }
  }
  return (
    <Button className='go-back-button' onClick={handleClick}>
      <HomeIcon className="button__icon" />
      <div className="button__wrapper">
        <h5 className={'button__label'}>Go back</h5>
      </div>
    </Button>
  );
}