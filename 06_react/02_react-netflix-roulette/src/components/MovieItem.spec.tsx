import React from 'react';
import { Provider } from 'react-redux';
import renderer, {
    ReactTestInstance,
    ReactTestRenderer,
} from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import type { RootState } from '../app/store';

import MovieItem from './MovieItem';
import { deleteMovie } from '../features/movies/moviesSlice';
import { Store, AnyAction } from '@reduxjs/toolkit';
import EditMovieForm from './EditMovieForm';
import { MemoryRouter } from 'react-router-dom';
import { testData } from '../testing/test-data-movies';

const mockStore = configureStore<RootState>([]);

describe('MovieItem', () => {
    let store: Store<any, AnyAction>;
    let component: ReactTestRenderer;
    let root: ReactTestInstance;

    beforeEach(() => {
        store = mockStore({
            movies: {
                data: [
                ],
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

        component = renderer.create(
            <Provider store={store}>
                {/* https://v5.reactrouter.com/web/guides/testing */}
                <MemoryRouter>
                    <MovieItem
                        movieInfo={testData.movies.data[0]}
                    />
                </MemoryRouter>
            </Provider>
        );
    });
    // the test suite
    it("should render MovieItem component with given movie info", () => {
        expect(component.toJSON()).toMatchSnapshot(); // the assertion
    });
});
