import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const initialState = {
  userInfo: localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null
};

const baseQuery = fetchBaseQuery({ baseUrl: '' });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['User'],
  endpoints: (builder) => ({})
});
