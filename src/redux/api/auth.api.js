import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { apiBaseUrl } from '../../config';

export const authApi = createApi({
  reducerPath: 'global/authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: apiBaseUrl,
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: '/account/v1/login/',
        method: 'POST',
        body: data,
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: '/account/v1/register/',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
