import React from 'react';
import styles from './Payment.module.scss';

import { Link } from 'react-router-dom';

import Sidebar from '../../Components/Sidebar/Sidebar';
import payment_icons from '../../assets/Icons/payment_icons.svg';
import payment_icons_sec from '../../assets/Icons/payment_icons_sec.svg';
import pay_icon from '../../assets/Icons/pay_ic.svg';
import card_icon from '../../assets/Icons/card_ic.svg';

const Payment = () => {
  return (
    <div className={`${styles.payment} container`}>
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
            <p>Мы предлагаем вам следующие способы оплаты заказов:</p>
            <div className={styles.payment_methods}>
              <div>
                <img src={pay_icon} alt='' />
                <p>
                  Оплата в цветочном магазине наличными или банковской картой;
                </p>
              </div>
              <div>
                <img src={card_icon} alt='' />
                <p>Банковской картой</p>
              </div>
            </div>
            <p>
              Для выбора оплаты товара с помощью банковской карты на
              соответствующей странице необходимо нажать кнопку «Оплата заказа
              банковской картой».
            </p>
            <p>
              Оплата происходит через ПАО СБЕРБАНК с использованием Банковских
              карт следующих платежных систем:
            </p>
            <div className={styles.payment_cards}>
              <div className={styles.payment_card}>
                <img src={payment_icons} alt='' />
                <h3>Банковские карты</h3>
              </div>
              <div className={styles.payment_card}>
                <img src={payment_icons_sec} alt='' />
                <h3>Виртуальные карты</h3>
              </div>
            </div>
            <p>
              Если заказ сделан в рабочее время (с 8:00 до 20:00 MSK), то в
              течение 20 минут наш менеджер свяжется с Вами по телефону для
              подтверждения заказа и уточнения удобного для Вас времени
              доставки.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
