import { configureStore } from '@reduxjs/toolkit';
// import { apiSlice } from '../features/api/apiSlice';
import moviesReducer from '../features/movies/moviesSlice';
import filtersReducer from '../features/filters/filtersSlice';

export const store = configureStore({
    reducer: {
        // [apiSlice.reducerPath]: apiSlice.reducer,
        movies: moviesReducer,
        filters: filtersReducer,
    },
    // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware)
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>