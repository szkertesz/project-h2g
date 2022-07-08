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
                release_date,
                movie_url,
                genre,
                thumbnail,
                description,
                rating,
                runtime,
            } = action.payload
            const movieToEdit = state.find(movie => movie.id === id)
            if (movieToEdit) {
                movieToEdit.title = title
                movieToEdit.release_date = release_date
                movieToEdit.genre = genre
                movieToEdit.movie_url = movie_url;
                movieToEdit.thumbnail = thumbnail
                movieToEdit.description = description
                movieToEdit.rating = rating
                movieToEdit.runtime = runtime
            }
        }
    }
})

export const { setMovies, addMovie, editMovie } = moviesSlice.actions

export default moviesSlice.reducer