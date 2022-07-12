import { createSlice } from '@reduxjs/toolkit';
import { Movie } from '../../interfaces/Movie';

const initialState = [] as Movie[];
const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        setMovies(state, action) {
            return action.payload
        },
        addMovie(state, action) { // the action creator
            state.push(action.payload)
        },
        editMovie(state, action) {
            const {
                id,
                title,
                genres,
                vote_average,
                release_date,
                runtime,
                poster_path,
                overview
            } = action.payload

            const movieToEdit = state.find(movie => movie.id === id)
            if (movieToEdit) {
                movieToEdit.id = id
                movieToEdit.title = title
                movieToEdit.genres = genres
                movieToEdit.vote_average = vote_average;
                movieToEdit.release_date = release_date
                movieToEdit.runtime = runtime
                movieToEdit.poster_path = poster_path
                movieToEdit.overview = overview
            }
        },
        // filterMovies(state, action) {
        //     const filteredMovies = state.filter((movie) => {
        //         movie.genres.includes(action.payload);
        //     })
        //     return {
        //         ...state,
        //         filtered: filteredMovies
        //     }
        // }
    }
})

export const { setMovies, addMovie, editMovie } = moviesSlice.actions

export default moviesSlice.reducer