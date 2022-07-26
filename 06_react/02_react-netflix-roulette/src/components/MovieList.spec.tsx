import React from 'react';
import { Provider } from 'react-redux';
import renderer, {
    ReactTestInstance,
    ReactTestRenderer,
} from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import type { RootState } from '../app/store';

import MovieList from './MovieList';
import { Store, AnyAction } from '@reduxjs/toolkit';
import { testData } from '../testing/test-data-movies';
import { MemoryRouter } from 'react-router-dom';

const mockStore = configureStore<RootState>([]);

describe('MovieList', () => {
    let store: Store<any, AnyAction>;
    let component: ReactTestRenderer;
    let root: ReactTestInstance;

    beforeEach(() => {
        store = mockStore({
            movies: {
                data: testData.movies.data,
                status: 'succeeded',
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
                <MemoryRouter>
                    <MovieList />
                </MemoryRouter>
            </Provider>
        );
    });
    // the test suite
    it('should render component with given movies data', () => {
        expect(component.toJSON()).toMatchSnapshot(); // the assertion
    });
});
