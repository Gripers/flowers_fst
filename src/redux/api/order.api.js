import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiBaseUrl } from '../../config';

export const orderApi = createApi({
  reducerPath: 'global/orderApi',
  baseQuery: fetchBaseQuery({
    baseUrl: apiBaseUrl,
  }),
  endpoints: (build) => ({
    createOrder: build.mutation({
      query: (data) => ({
        url: '/order/v1/order/create',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useCreateOrderMutation } = orderApi;
