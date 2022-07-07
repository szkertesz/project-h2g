import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Movie } from '../../interfaces/Movie';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3004',
    }),
    endpoints(builder) {
        return {
            getData: builder.query<Movie[], number | void>({
                // query: () => {
                //     return {
                //         url: '',
                //         method: 'GET',
                //     }
                // }
                query() {
                    return '/movies';
                },
            }),
            addNewData: builder.mutation({
                query: initialData => ({
                    url: '/movies',
                    method: 'POST',
                    body: initialData
                })
            })
        };
    },
});

export const { useGetDataQuery, useAddNewDataMutation } = apiSlice