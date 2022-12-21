import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { apiBaseUrl } from '../../config';

export const getOrdersList = createAsyncThunk(
  'order/getOrdersList',
  async () =>
    await axios.get(`${apiBaseUrl}/order/v1/order`).then((res) => res.data)
);

const orderSlice = createSlice({
  name: 'order',
  initialState: {
    orders: [],
  },
  extraReducers: (builder) => {
    builder.addCase(getOrdersList.fulfilled, (state, action) => {
      state.orders = action.payload;
    });
  },
});

export default orderSlice.reducer;
