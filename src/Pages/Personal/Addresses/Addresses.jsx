import React from 'react';
import styles from './Addresses.module.scss';

import DataTable from 'react-data-table-component';

import Sidebar from '../../../Components/PersonalSidebar/Sidebar';

const Addresses = () => {
  const columns = [
    {
      name: 'Адрес',
      selector: (row) => row.address,
    },
    {
      name: 'ФИО Получателя',
      selector: (row) => row.fio,
    },
    {
      name: 'Телефон',
      selector: (row) => row.phone,
    },
  ];

  const data = [
    {
      id: 1,
      address: 'г Санкт-Петербург, г Колпино 45890',
      fio: 'Зиновьев Сергей',
      phone: '+7 (987) 490-90-89',
    },
    {
      id: 2,
      address: 'г Санкт-Петербург, ул. Ленинградская, 189',
      fio: 'Зиновьев Сергей',
      phone: '+7 (987) 490-90-89',
    },
  ];

  return (
    <div className={`${styles.addresses_container} container`}>
      <div className={styles.left}>
        <Sidebar />
      </div>
      <div className={styles.right}>
        <h1>Адресы</h1>
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default Addresses;
