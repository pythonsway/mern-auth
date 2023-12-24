import { apiSlice } from './apiSlice';

const UESR_URL = '/api/users';

const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: UESR_URL,
        method: 'POST',
        body: data,
      })
    }),
    login: builder.mutation({
      query: (data) => ({
        url: `${UESR_URL}/auth`,
        method: 'POST',
        body: data,
      })
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${UESR_URL}/logout`,
        method: 'POST',
      })
    }),
    update: builder.mutation({
      query: (data) => ({
        url: `${UESR_URL}/profile`,
        method: 'PUT',
        body: data,
      })
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation, useLogoutMutation, useUpdateMutation } = usersApiSlice;