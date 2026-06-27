import './sidebar-nav.css';

import { sidebarItems } from "./sidebar-items.js";
import { NavLink } from "react-router-dom";
import ArrowLeftIcon from '@icons/arrow-left/arrow-left-icon.jsx';

export default function SidebarNav() {
  return (
    <aside className="sidebar-nav">
      <div className='sidebar-nav__header'>
        <a className="sidebar-nav__link" href="/">
          <ArrowLeftIcon className="sidebar-nav__link-icon" />
          <span className="sidebar-nav__link-text">Home</span>
        </a>
        <h1 className='sidebar-nav__title'>Workspace</h1>
      </div>
      <ul className="sidebar-nav__list">
        {sidebarItems.map((item) => (
          <li className='sidebar-nav__item' key={item.id}>
            <NavLink to={item.link} className="sidebar-nav__link">
              <span className="sidebar-nav__item-title">{item.title}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}