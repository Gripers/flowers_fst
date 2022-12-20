import React from 'react';
import styles from './A.module.scss';

import { useDispatch, useSelector } from 'react-redux';

import {
  openLoginModal,
  openRegisterModal,
} from '../../../redux/reducers/globalSlice';

const AuthModalsSelector = () => {
  const dispatch = useDispatch();
  const { isLoginModalOpen, isRegisterModalOpen } = useSelector(
    (state) => state.global
  );

  const activeStyles = {
    color: '#0093A2',
    backgroundColor: 'white',
    borderRadius: '10px',
  };

  const switchToLogin = () => {
    dispatch(openLoginModal(true));
    dispatch(openRegisterModal(false));
  };

  const switchToRegister = () => {
    dispatch(openRegisterModal(true));
    dispatch(openLoginModal(false));
  };

  return (
    <div className={styles.selector_container}>
      <button
        style={isLoginModalOpen ? null : activeStyles}
        onClick={switchToRegister}
      >
        Регистрация
      </button>
      <button
        style={isRegisterModalOpen ? null : activeStyles}
        onClick={switchToLogin}
      >
        Вход
      </button>
    </div>
  );
};

export default AuthModalsSelector;
