import { createSlice } from '@reduxjs/toolkit';

const globalSlice = createSlice({
  name: 'global',
  initialState: {
    isLoginModalOpen: false,
    isRegisterModalOpen: false,
  },
  reducers: {
    openLoginModal: (state, action) => {
      state.isLoginModalOpen = action.payload;
    },
    openRegisterModal: (state, action) => {
      state.isRegisterModalOpen = action.payload;
    },
  },
});

export const { openLoginModal, openRegisterModal } = globalSlice.actions;

export default globalSlice.reducer;
