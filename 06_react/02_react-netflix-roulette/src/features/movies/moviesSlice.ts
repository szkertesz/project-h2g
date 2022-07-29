import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { client } from '../../services/client'
import { Movie } from '../../interfaces/Movie';
import type { RootState } from '../../app/store';

export interface moviesState {
    data: Movie[],
    status: 'idle' | 'loading' | 'succeeded' | 'failed' | string,
    error: string | null | undefined,
    searchedMovie: string;
    sortOptions: {
        sortCriterion: string;
        sortOrder: string;
    };
    filterOptions: {
        genre: string;
    };
}

interface MovieToAddWithId extends Movie {
    tagline: string,
    vote_count: number,
    budget: number
};

export type MovieToAdd = Omit<MovieToAddWithId, 'id'>

export const initialState: moviesState = {
    data: [],
    status: 'idle',
    error: null,
    searchedMovie: '',
    sortOptions: {
        sortCriterion: '',
        sortOrder: '',
    },
    filterOptions: {
        genre: '',
    },
};

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
    const response = await client.get('http://localhost:4000/movies?limit=30');
    return response.data.data;
});
export const addMovie = createAsyncThunk(
    'movies/addMovie',
    async (newMovieData: MovieToAdd, { rejectWithValue }) => {
        try {
            const response = await client.post(
                'http://localhost:4000/movies',
                newMovieData
                );
                return response.data;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
);
export const deleteMovie = createAsyncThunk(
    'movies/deleteMovie',
    async (movieId: number, { rejectWithValue }) => {
        try {
            const response = await client.delete(`http://localhost:4000/movies/${movieId}`);
                return response.data;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
);
export const editMovie = createAsyncThunk(
    'movies/editMovie',
    async (newMovieData: Movie, { rejectWithValue }) => {
    try {
        const response = await client.put(
            `http://localhost:4000/movies`,
            newMovieData
        );
        return response.data;
    } catch (error) {
        return rejectWithValue(error);
    }
});
// export const filterMoviesByGenre = createAsyncThunk(
//     'movies/filterMoviesByGenre',
//     async (genres: string, thunkAPI) => {
//         const response = await client.get(
//             `http://localhost:4000/movies?filter=${genres}`
//         );
//         return response.data.data;
//     }
// );

// export const sortMoviesByCriterion = createAsyncThunk<Movie[], {selectedCriterion: string, direction: string}>(
//     'movies/sortMoviesByCriterion',
//     async ({selectedCriterion, direction}) => {
//         const response = await client.get(
//             `http://localhost:4000/movies?sortBy=${selectedCriterion}&sortOrder=${direction}`
//         );
//         return response.data.data;
//     }
// );
const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        // editMovie(state, action) {
        //     const {
        //         id,
        //         title,
        //         genres,
        //         vote_average,
        //         release_date,
        //         runtime,
        //         poster_path,
        //         overview,
        //     } = action.payload;
        //     const movieToEdit = state.data.find((movie) => movie.id === id);

        //     if (movieToEdit) {
        //         movieToEdit.id = id;
        //         movieToEdit.title = title;
        //         movieToEdit.genres = genres;
        //         movieToEdit.vote_average = vote_average;
        //         movieToEdit.release_date = release_date;
        //         movieToEdit.runtime = runtime;
        //         movieToEdit.poster_path = poster_path;
        //         movieToEdit.overview = overview;
        //     }
        // },
        setSearchedMovie: (state, action) => {
            state.searchedMovie = action.payload;
        },
        setGenreFilter: (state, action) => {
            state.filterOptions.genre = action.payload;
        },
        setSortParams: (state, action) => {
            state.sortOptions.sortCriterion = action.payload.criterion;
            state.sortOptions.sortOrder = action.payload.order;
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
                state.data.push(action.payload);
            })
            .addCase(deleteMovie.fulfilled, (state, action) => {
                state.data = state.data.filter(
                    movie => movie.id !== action.payload.id
                );
            })
            .addCase(editMovie.fulfilled, (state, action) => {
                const index = state.data.findIndex(
                    (movie) => movie.id === action.payload.id
                );
                state.data[index] = action.payload;
            });
        // .addCase(filterMoviesByGenre.fulfilled, (state, action) => {
        //     state.data = action.payload
        // })
        // .addCase(sortMoviesByCriterion.fulfilled, (state, action) => {
        //     state.data = action.payload
        // })
    },
});

// export const { editMovie } = moviesSlice.actions
export const { setSearchedMovie, setGenreFilter, setSortParams } = moviesSlice.actions;

export default moviesSlice.reducer

// Selectors
export const selectAllMovies = (state: RootState) => state.movies.data;

export const selectMovieById = (state: RootState, movieId: number) =>
    state.movies.data.find((movie) => movie.id === movieId);