import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Movie } from '../../interfaces/Movie';
interface Api {
    movies: Movie[]
}
export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'movies.json',
        prepareHeaders(headers) {
            headers.set('Content-Type', 'application/json');
            return headers;
        }
    }),
    endpoints(builder){
        return {
            getData: builder.query<Api, number | void>({
                // query: () => {
                //     return {
                //         url: '',
                //         method: 'GET',
                //     }
                // }
                query() {
                    return ''
                }
            })
        }
    }

})

export const { useGetDataQuery } = apiSlice