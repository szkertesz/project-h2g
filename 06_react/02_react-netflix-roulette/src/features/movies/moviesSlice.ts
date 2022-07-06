import { createSlice } from '@reduxjs/toolkit';
const initialState = [
    { id: '1', title: 'First Post!', content: 'Hello!' },
    { id: '2', title: 'Second Post', content: 'More text' },
];
const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        movieAdded(state, action) {
            state.push(action.payload)
        }
    }
})

export const { movieAdded } = moviesSlice.actions

export default moviesSlice.reducer