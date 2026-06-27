import './sidebar-nav.css';

import { sidebarItems } from "./sidebar-items.js";
import { NavLink } from "react-router-dom";

export default function SidebarNav() {
  return (
    <aside className="sidebar-nav">
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