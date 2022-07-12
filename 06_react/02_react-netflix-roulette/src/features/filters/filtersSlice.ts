import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    genre: 'All',
};

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
       changeFilter(state, action) {
            state.genre = action.payload;
        },
    }
});

export const { changeFilter } = filtersSlice.actions;

export default filtersSlice.reducer;