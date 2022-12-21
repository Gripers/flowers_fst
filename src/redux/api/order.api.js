import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiBaseUrl } from '../../config';

export const orderApi = createApi({
  reducerPath: 'global/orderApi',
  baseQuery: fetchBaseQuery({
    baseUrl: apiBaseUrl,
  }),
  endpoints: (build) => ({
    createOrder: build.mutation({
      query: ({ data, token }) => ({
        url: '/order/v1/order/create',
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: data,
      }),
    }),
  }),
});

export const { useCreateOrderMutation } = orderApi;
