import React from 'react';
import styles from './Orders.module.scss';

import DataTable from 'react-data-table-component';

import Sidebar from '../../../Components/PersonalSidebar/Sidebar';

const Orders = () => {
  const columns = [
    {
      name: 'Номер заказа',
      selector: (row) => row.order_num,
    },
    {
      name: 'Название',
      selector: (row) => row.order_name,
    },
    {
      name: 'Дата доставки',
      selector: (row) => row.order_date,
    },
    {
      name: 'Получатель',
      selector: (row) => row.order_recipient,
    },
    {
      name: 'Сумма',
      selector: (row) => `${row.order_total} ₽`,
    },
  ];

  const data = [
    {
      id: 1,
      order_num: 64587930,
      order_name: 'Букет малиновых роз',
      order_date: '23.05.2021',
      order_recipient: 'Зивоньев Сергей',
      order_total: 5739,
    },
    {
      id: 2,
      order_num: 34934923,
      order_name: 'Букет малиновых роз',
      order_date: '23.05.2021',
      order_recipient: 'Зивоньев Сергей',
      order_total: 5739,
    },
  ];

  return (
    <div className={`${styles.orders_container} container`}>
      <div className={styles.left}>
        <Sidebar />
      </div>
      <div className={styles.right}>
        <h1>Заказы</h1>
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default Orders;
