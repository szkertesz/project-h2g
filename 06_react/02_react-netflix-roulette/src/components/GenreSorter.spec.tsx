import { render, screen, fireEvent, getByTestId, getByLabelText } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import configureStore from 'redux-mock-store';

import { Provider } from 'react-redux';
import GenreSorter from './GenreSorter';
import { RootState } from '../app/store';
import { AnyAction, Store } from '@reduxjs/toolkit';
import { ReactTestInstance, ReactTestRenderer } from 'react-test-renderer';
import { setSortParams } from '../features/movies/moviesSlice';

const mockStore = configureStore<RootState>([]);
let store: Store<any, AnyAction>;
let component: ReactTestRenderer;
let root: ReactTestInstance;

beforeEach(() => {
    store = mockStore({
        movies: {
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
        },
    });

    store.dispatch = jest.fn();
});

it('Should render GenreSorter component', () => {
    render(
        <Provider store={store}>
            <GenreSorter />
        </Provider>)
    expect(screen.getByLabelText(/sort by/)).toBeInTheDocument();
})
it('GenreSorter should dispatch', () => {
    render(
        <Provider store={store}>
            <GenreSorter />
        </Provider>)
    fireEvent.change(screen.getByRole('combobox'), {
        target: { value: 'rating'}
    })
    expect(store.dispatch).toHaveBeenCalledWith(
        setSortParams({ criterion: 'rating', order: 'ascending' })
    );
})