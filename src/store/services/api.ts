import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }), // базовый запрос
  endpoints: (builder) => ({
    getPosts: builder.query<any[], void>({
      query: () => 'posts'
    })
  })
})

export const { useGetPostsQuery } = api
