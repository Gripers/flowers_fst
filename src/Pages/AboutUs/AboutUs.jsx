import React from 'react';
import styles from './AboutUs.module.scss';

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getEmployeesRequest } from './employeesSlice';
import Sidebar from '../../Components/Sidebar/Sidebar';

const AboutUs = () => {
  const dispatch = useDispatch();
  const employeesArr = useSelector((state) => state.employees.employees);

  React.useEffect(() => {
    dispatch(getEmployeesRequest());
  }, []);

  return (
    <div className={`${styles.about_us} container`}>
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
            <h1>О нас</h1>
            <p>
              На ваш выбор представлены как классические, так и необычные
              экзотические букеты, которых Вам не предложат другие магазины
              цветов. Мы предлагаем своим клиентам букеты из самых разных
              цветов: лилий, роз, ирисов, тюльпанов, герберов, а для любителей
              экзотики подойдут букеты из орхидей, фаленопсисов, ванды,
              цимбидиума, геликонии брунии, стрелиции.
            </p>
            <p>
              Можете быть уверены, что в нашем интернет магазине осуществляется
              продажа только свежесрезанных цветов, поражающих своей красотой и
              благоуханием. Мы не используем химические вещества для
              искусственного сохранения свежести, потому что ценим доверие,
              оказанное нам нашими клиентами.
            </p>
            <h3>Основные причины сделать заказ в нашем цветочном салоне</h3>
            <ul>
              <li>Невероятное разнообразие цветов к любому событию</li>
              <li>Быстрая доставка цветов по Воронежу</li>
              <li>Разработка эксклюзивных букетов из роз</li>
            </ul>
            <h3>Как сделать заказ в нашем интернет магазине?</h3>
            <p>
              Вы делаете заказ, мы подготавливаем букет к назначеному времени ,
              или можете оформить доставку, и наши курьеры доставят вам букет.
            </p>
          </div>
          <div className={styles.employees}>
            <h1>Наши сотрудники:</h1>
            <div className={styles.employees_wrapper}>
              {employeesArr.map((obj) => (
                <div key={obj.id} className={styles.employee}>
                  <img src={obj.image} alt='' />
                  <h3>
                    {obj.title}, {obj.description}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
