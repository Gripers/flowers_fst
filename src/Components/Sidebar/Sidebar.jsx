import React from 'react';
import styles from './Sidebar.module.scss';

import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <NavLink
        to='/about-us'
        className={({ isActive }) => (isActive ? styles.active : null)}
      >
        О нас
      </NavLink>
      <NavLink
        to='/payment'
        className={({ isActive }) => (isActive ? styles.active : null)}
      >
        Оплата
      </NavLink>
      <NavLink
        to='/order'
        className={({ isActive }) => (isActive ? styles.active : null)}
      >
        Доставка
      </NavLink>
    </div>
  );
};

export default Sidebar;
