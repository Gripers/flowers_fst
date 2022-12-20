import React from 'react';
import styles from './LoginModal.module.scss';

import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'universal-cookie';
import Modal from 'react-responsive-modal';

import { openLoginModal } from '../../../redux/reducers/globalSlice';
import { useLoginMutation } from '../../../redux/api/auth.api';
import { loginSubmit } from '../auth/auth';
import AuthModalsSelector from '../Selector/AuthModalsSelector';

const LoginModal = () => {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.global.isLoginModalOpen);
  const [login, { isLoading }] = useLoginMutation();
  const cookies = new Cookies();

  return (
    <Modal
      open={open}
      onClose={() => dispatch(openLoginModal(false))}
      center={true}
      showCloseIcon={false}
      classNames={{
        modal: styles.login_modal,
      }}
    >
      <h3>Войти</h3>
      <AuthModalsSelector />
      <form onSubmit={(event) => loginSubmit(event, login, cookies)}>
        <label htmlFor='email'>Почта:</label>
        <input type='email' id='email' />
        <label htmlFor='password'>Пароль:</label>
        <input type='password' id='password' />
        <button>{isLoading ? '...' : 'Войти'}</button>
      </form>
    </Modal>
  );
};

export default LoginModal;
