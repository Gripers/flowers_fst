import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'universal-cookie';

import { apiBaseUrl } from '../../config';

const cookies = new Cookies();

export const userApi = createApi({
  reducerPath: 'user/userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: apiBaseUrl,
    prepareHeaders: (headers) => {
      headers.set('Authorization', `Bearer ${cookies.get('access')}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    updateUserProfile: builder.mutation({
      query: ({ id, data }) => ({
        url: `/account/v1/profile/${id}/`,
        method: 'PUT',
        body: data,
      }),
    }),
  }),
});

export const { useUpdateUserProfileMutation } = userApi;
