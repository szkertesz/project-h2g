import { createSlice } from '@reduxjs/toolkit';
import { Movie } from '../../interfaces/Movie';

// const initialState: {

// };
const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        movies: [] as Movie[],
        filteredMovies: [] as Movie[]
    },
    reducers: {
        setMovies(state, action) {
            state.movies = action.payload
        },
        addMovie(state, action) { // the action creator
            state.movies.push(action.payload)
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
            const movieToEdit = state.movies.find(movie => movie.id === id)
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
        },
        filterMovies(state, action) {
            const filteredMovies = state.movies.filter((movie) => {
                const genres = movie.genre
                    .split(',')
                    .map((genre) => genre.trim().toLowerCase());
                console.log(genres)
                const selectedGenre = action.payload;
                return genres.includes(selectedGenre)
            })
            return {
                ...state,
                filteredMovies: filteredMovies
            }
        }
    }
})

export const { setMovies, addMovie, editMovie, filterMovies } = moviesSlice.actions

export default moviesSlice.reducer