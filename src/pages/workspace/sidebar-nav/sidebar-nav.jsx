import './sidebar-nav.css';

import { sidebarItems } from "./sidebar-items.js";
import { NavLink } from "react-router-dom";
import ArrowLeftIcon from '@icons/arrow-left/arrow-left-icon.jsx';
import Button from '@ui/button';

export default function SidebarNav() {
  return (
    <aside className="sidebar-nav">
      <div className='sidebar-nav__header'>
        <Button to="/" variant="ghost" className="sidebar-nav__link">
          <ArrowLeftIcon className="sidebar-nav__link-icon" />
          <span className="sidebar-nav__link-text">Home</span>
        </Button>
        <h1 className='sidebar-nav__title'>Tech stack</h1>
      </div>
      <ul className="sidebar-nav__list">
        {sidebarItems.map((item) => (
          <li className='sidebar-nav__item' key={item.id}>
            <Button
              as={NavLink}
              to={item.link}
              variant="ghost"
              className="sidebar-nav__link"
            >
              <span className="sidebar-nav__item-title">{item.title}</span>
            </Button>
          </li>
        ))}
      </ul>
    </aside>
  );
}