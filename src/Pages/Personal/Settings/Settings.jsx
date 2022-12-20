import React from 'react';
import styles from './Settings.module.scss';

import { useSelector } from 'react-redux';

import Sidebar from '../../../Components/PersonalSidebar/Sidebar';
import { updateProfile } from './r';
import { useUpdateUserProfileMutation } from '../../../redux/api/user.api';

const Settings = () => {
  const [updateUserProfile, { isLoading }] = useUpdateUserProfileMutation();
  const user = useSelector((state) => state.user.userProfile.data);

  const [vals, setVals] = React.useState({
    fio: user?.full_name,
    phone: user?.phone,
    email: user?.email,
  });

  const changeValue = (event, a) =>
    setVals((prevState) => a === event.target.value);

  return (
    <div className={`${styles.settings_container} container`}>
      <div className={styles.left}>
        <Sidebar />
      </div>
      <div className={styles.right}>
        <h1>Настройки</h1>
        <form
          onSubmit={(event) =>
            updateProfile(event, user?.id, updateUserProfile)
          }
        >
          <h3>Ваши данные</h3>
          <p>
            Ваши контактные данные будут использованы только для обработки
            заказов и не будут передаваться третьим лицам
          </p>
          <label htmlFor='fio'>ФИО</label>
          <input
            type='text'
            id='fio'
            value={vals.fio}
            onChange={(event) => changeValue(event, 'prevState.fio')}
            placeholder='Введите ФИО'
          />
          <label htmlFor='phone'>Телефон</label>
          <input
            type='text'
            id='phone'
            value={vals.phone}
            onChange={(event) => changeValue(event, 'prevState.phone')}
            placeholder='Введите номер телефона'
          />
          <label htmlFor='email'>E-mail</label>
          <input
            type='email'
            id='email'
            value={vals.email}
            onChange={(event) => changeValue(event, 'prevState.email')}
            placeholder='Введите почту'
          />
          <button type='submit'>
            {isLoading ? '...' : 'Сохранить данные'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
