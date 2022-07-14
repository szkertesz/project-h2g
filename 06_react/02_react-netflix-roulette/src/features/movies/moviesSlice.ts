import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { client } from '../../services/client'
import { Movie } from '../../interfaces/Movie';
import type { RootState } from '../../app/store';

const initialState = {
    data: [] as Movie[],
    status: 'idle' as 'idle' | 'loading' | 'succeeded' | 'failed',
    error: null as string | null | undefined,
};

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
    const response = await client.get('http://localhost:4000/movies?limit=30');
    return response.data.data;
});
export const addMovie = createAsyncThunk(
    'movies/addMovie',
    async (newMovieData: object, thunkAPI) => {
        const response = await client.post(
            'http://localhost:4000/movies',
            newMovieData
        );
        return response.data;
    }
);
export const filterMoviesByGenre = createAsyncThunk(
    'movies/filterMoviesByGenre',
    async (genres: string, thunkAPI) => {
        const response = await client.get(
            `http://localhost:4000/movies?filter=${genres}`
        );
        return response.data.data;
    }
);

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        editMovie(state, action) {
            const {
                id,
                title,
                genres,
                vote_average,
                release_date,
                runtime,
                poster_path,
                overview,
            } = action.payload;
            const movieToEdit = state.data.find((movie) => movie.id === id);

            if (movieToEdit) {
                movieToEdit.id = id;
                movieToEdit.title = title;
                movieToEdit.genres = genres;
                movieToEdit.vote_average = vote_average;
                movieToEdit.release_date = release_date;
                movieToEdit.runtime = runtime;
                movieToEdit.poster_path = poster_path;
                movieToEdit.overview = overview;
            }
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchMovies.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(fetchMovies.fulfilled, (state, action) => {
                state.status = 'succeeded';
                // Add any fetched movies to the array
                state.data = state.data.concat(action.payload);
            })
            .addCase(fetchMovies.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(addMovie.fulfilled, (state, action) => {
                state.data.push(action.payload)
            })
            .addCase(filterMoviesByGenre.fulfilled, (state, action) => {
                state.data = action.payload
            })
    },
});

export const { editMovie } = moviesSlice.actions

export default moviesSlice.reducer

// Selectors
export const selectAllMovies = (state: RootState) => state.movies.data;

export const selectMovieById = (state: RootState, movieId: number) =>
    state.movies.data.find((movie) => movie.id === movieId);