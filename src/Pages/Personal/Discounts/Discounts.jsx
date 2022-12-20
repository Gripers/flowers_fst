import React from 'react';
import styles from './Discounts.module.scss';

import DataTable from 'react-data-table-component';

import Sidebar from '../../../Components/PersonalSidebar/Sidebar';

const Discounts = () => {
  const columns = [
    {
      name: 'Общая сумма заказов от',
      selector: (row) => row.total,
    },
    {
      name: (
        <div className='sc-eDWCr hbotQl' style={{ color: '#E2195B' }}>
          Скидка
        </div>
      ),
      selector: (row) => row.discount,
    },
  ];

  const data = [
    {
      id: 1,
      total: '$200',
      discount: '2%',
    },
    {
      id: 2,
      total: '$300',
      discount: '3%',
    },
    {
      id: 3,
      total: '$500',
      discount: '4%',
    },
    {
      id: 4,
      total: '$700',
      discount: '5%',
    },
    {
      id: 5,
      total: '$1000',
      discount: '6%',
    },
    {
      id: 6,
      total: '$1000',
      discount: '7%',
    },
  ];

  return (
    <div className={`${styles.discounts_container} container`}>
      <div className={styles.left}>
        <Sidebar />
      </div>
      <div className={styles.right}>
        <h1>О скидках</h1>
        <h3>
          1. Накопительная система скидок для зарегистрированных пользователей
        </h3>
        <p>
          Наша шкала скидок основывается на общей сумме, потраченной вами на
          заказ цветов, и не распространяется на другие группы товаров. Ваша
          скидка высчитывается автоматически, и вы всегда можете посмотреть её в
          Личном Кабинете (в правом верхнем углу сайта). Пожалуйста, помните:
          чтобы ваши заказы учитывались системой и влияли на скидку, вы должны
          размещать их как зарегистрированный пользователь, предварительно введя
          свои логин и пароль. Скидка не действует на букеты с маркой «Акция».
        </p>
        <DataTable columns={columns} data={data} />
        <h3>2. Партнерские дисконтные программы</h3>
        <p>
          Мы предоставляем скидки владельцам некоторых дисконтных, клубных и
          пластиковых карт. Скидка не действует на букеты с маркой «Акция».
          Подробнее
        </p>
        <h3>3. Купоны на скидку</h3>
        <p>
          Мы проводим различные акции, в ходе которых разыгрываются призы и
          купоны на скидку (от 3 до 25%). Информацию о проводимых акциях и
          конкурсах можно найти на наших страницах ВКонтакте и Facebook (признан
          властями РФ экстремистской организацией). Скидки по нескольким купонам
          не суммируются. Скидка не действует на букеты с маркой «Акция».{' '}
        </p>
      </div>
    </div>
  );
};

export default Discounts;
