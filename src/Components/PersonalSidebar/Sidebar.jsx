import React from 'react';
import styles from './Sidebar.module.scss';

import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Cookies from 'universal-cookie';

import { logOut } from './s';

const Sidebar = () => {
  const cookies = new Cookies();
  const user = useSelector((state) => state.user.userProfile);

  return (
    <div className={styles.sidebar_container}>
      <p>Здравствуйте, {user.data?.full_name}!</p>
      <nav>
        <NavLink
          to='/addresses'
          className={({ isActive }) => (isActive ? styles.active : null)}
        >
          Адресы
        </NavLink>
        <NavLink
          to='/orders'
          className={({ isActive }) => (isActive ? styles.active : null)}
        >
          Заказы
        </NavLink>
        <NavLink
          to='/settings'
          className={({ isActive }) => (isActive ? styles.active : null)}
        >
          Настройки
        </NavLink>
        <NavLink
          to='/about-discounts'
          className={({ isActive }) => (isActive ? styles.active : null)}
        >
          О скидках
        </NavLink>
        <a href='' onClick={() => logOut(cookies)}>
          Выйти
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
