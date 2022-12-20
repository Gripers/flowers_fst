import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { apiBaseUrl } from '../../config';

export const getUserProfile = createAsyncThunk(
  'user/getUserProfile',
  async ({ id, token }) => {
    const r = await axios.get(`${apiBaseUrl}/account/v1/profile/${id}/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return r.data;
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userProfile: {},
  },
  extraReducers: (builder) => {
    builder.addCase(getUserProfile.fulfilled, (state, action) => {
      state.userProfile = action.payload;
    });
  },
});

export default userSlice.reducer;
