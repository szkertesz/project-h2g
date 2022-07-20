import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Movie } from '../../interfaces/Movie';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3004',
    }),
    tagTypes: ['Movies'],
    endpoints(builder) {
        return {
            getData: builder.query<Movie[], number | void>({
                query() {
                    return '/movies';
                },
                providesTags: ['Movies'],
            }),
            getSingleData: builder.query<Movie, number | void>({
                query: movieId => `/movies/${movieId}`
            }),
            addNewData: builder.mutation({
                query: initialData => ({
                    url: '/movies',
                    method: 'POST',
                    body: initialData
                }),
                invalidatesTags: ['Movies']
            }),
            editData: builder.mutation({
                query: movie => ({
                    url: `/movies/${movie.id}`,
                    method: 'PATCH',
                    body: movie,
                })
            })
        };
    },
});

export const { useGetDataQuery, useGetSingleDataQuery, useAddNewDataMutation, useEditDataMutation } = apiSlice