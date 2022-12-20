import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { apiBaseUrl } from '../../config';

export const getEmployeesRequest = createAsyncThunk(
  'employees/getEmployeesRequest',
  async () => {
    return await fetch(`${apiBaseUrl}/blog/v1/employee`).then((res) =>
      res.json()
    );
  }
);

const employeesSlice = createSlice({
  name: 'employees',
  initialState: {
    employees: [],
  },
  extraReducers: (builder) => {
    builder.addCase(getEmployeesRequest.fulfilled, (state, action) => {
      state.employees = action.payload;
    });
    builder.addCase(getEmployeesRequest.rejected, () =>
      console.log('employees get error')
    );
  },
});

export default employeesSlice.reducer;
