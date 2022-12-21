import React from 'react';
import styles from './Orders.module.scss';

import { useDispatch, useSelector } from 'react-redux';

import { getOrdersList } from '../../../redux/reducers/orderSlice';
import Sidebar from '../../../Components/PersonalSidebar/Sidebar';

const Orders = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.order.orders);
  const user = useSelector((state) => state.user.userProfile.data);

  React.useEffect(() => {
    dispatch(getOrdersList());
  }, []);

  return (
    <div className={`${styles.orders_container} container`}>
      <div className={styles.left}>
        <Sidebar />
      </div>
      <div className={styles.right}>
        <h1>Заказы</h1>
        <table style={{ width: '100%' }}>
          <thead style={{ backgroundColor: '#f4f5f7' }}>
            <tr>
              {['Номер заказа', 'Название', 'Получатель', 'Сумма'].map(
                (title, index) => (
                  <td key={index} style={{ padding: '2vh' }}>
                    {title}
                  </td>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) =>
              order.orderitem.map((item) => (
                <tr key={index}>
                  <td style={{ padding: '2vh' }}>{order.code}</td>
                  <td style={{ padding: '2vh' }}>{item.product.title}</td>
                  <td style={{ padding: '2vh' }}>{order.user.full_name}</td>
                  <td style={{ padding: '2vh' }}>
                    {item.product.price * item.count} ₽
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
