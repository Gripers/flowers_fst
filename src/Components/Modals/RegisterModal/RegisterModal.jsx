import React from 'react';
import styles from './RegisterModal.module.scss';

import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-responsive-modal';

import { openRegisterModal } from '../../../redux/reducers/globalSlice';
import { useRegisterMutation } from '../../../redux/api/auth.api';
import { registerSubmit } from '../auth/auth';
import AuthModalsSelector from '../Selector/AuthModalsSelector';

const RegisterModal = () => {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.global.isRegisterModalOpen);
  const [register, { isLoading }] = useRegisterMutation();

  return (
    <Modal
      open={open}
      onClose={() => dispatch(openRegisterModal(false))}
      center={true}
      showCloseIcon={false}
      classNames={{
        modal: styles.register_modal,
      }}
    >
      <h3>Регистрация</h3>
      <AuthModalsSelector />
      <form onSubmit={(event) => registerSubmit(event, register)}>
        <label htmlFor='fio'>ФИО</label>
        <input type='text' id='fio' />
        <label htmlFor='email'>Почта:</label>
        <input type='email' id='email' />
        <label htmlFor='password'>Пароль:</label>
        <input type='password' id='password' />
        <label htmlFor='confirm_password'>Подтвердите пароль:</label>
        <input type='password' id='confirm_password' />
        <button>{isLoading ? '...' : 'Получить ссылку подтверждения'}</button>
      </form>
    </Modal>
  );
};

export default RegisterModal;
