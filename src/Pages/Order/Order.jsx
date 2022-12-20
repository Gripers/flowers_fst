import React from 'react';
import styles from './Order.module.scss';

import { Link } from 'react-router-dom';

import Sidebar from '../../Components/Sidebar/Sidebar';
import order_icon from '../../assets/Icons/order_icon.svg';
import currency_icon from '../../assets/Icons/currency_icon.svg';
import time_icon from '../../assets/Icons/time_icon.svg';

const Order = () => {
  return (
    <div className={`${styles.order} container`}>
      <p className='section-router'>
        <span>
          <Link to='/'>Главная</Link>
        </span>
        <span></span>
        <span className='active'>
          <Link to={'/about-us'}>О Нас</Link>
        </span>
      </p>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <Sidebar />
        </div>
        <div className={styles.right}>
          <div className={styles.content}>
            <h1>Оплата</h1>
            <div className={styles.order_box}>
              <img src={order_icon} alt='' />
              <p>
                Доставка цветов осуществляется по Воронежу и пригороду Воронежа
                в течении двух часов!
              </p>
            </div>
            <p>Наша служба доставки работает без праздников и выходных.</p>
            <p>Доставка цветов осуществляется в указанное время +- 30 минут.</p>
            <div className={styles.cards}>
              <div className={styles.card}>
                <img src={currency_icon} alt='' />
                <div>
                  <p>Тарифы на доставку:</p>
                  <p>По городу 300 руб.</p>
                  <p>
                    Отдаленые районы - расчет производится автоматически при
                    оформление заказа!
                  </p>
                </div>
              </div>
              <div className={styles.card}>
                <img src={time_icon} alt='' />
                <div>
                  <p>Время работы магазина:</p>
                  <p>Пн-Сб: 8:00-20:00</p>
                  <p>Вс: 9:00-20:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
