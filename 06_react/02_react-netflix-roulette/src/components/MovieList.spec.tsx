import React from 'react';
import { Provider } from 'react-redux';
import renderer, {
    ReactTestInstance,
    ReactTestRenderer,
} from 'react-test-renderer';
import { screen, waitFor } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import type { RootState } from '../app/store';

import MovieList from './MovieList';
import { Store, AnyAction } from '@reduxjs/toolkit';
import { testData } from '../testing/test-data-movies';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import thunk from 'redux-thunk';

const mockStore = configureStore<RootState>([thunk]);

describe('MovieList', () => {
    let store: any;
    let testRendererComponent: ReactTestRenderer;
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

        testRendererComponent = renderer.create(
            <Provider store={store}>
                <MemoryRouter>
                    <MovieList />
                </MemoryRouter>
            </Provider>
        );

    });
    // the test suite
    it('should render component with given movies data', () => {
        expect(testRendererComponent.toJSON()).toMatchSnapshot(); // the assertion
    });
    it('should render 3 movie item articles since testData has 3 entries', () => {
        const articles = testRendererComponent.root.findAllByType('article')
        expect(articles.length).toBe(3); // the assertion
    });
    it('should display loading... message if moviesStatus is \'loading\'', () => {
        store = mockStore({
            movies: {
                data: [],
                status: 'loading',
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
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <MovieList />
                </MemoryRouter>
            </Provider>
        );
        expect(screen.getByText(/Loading.../)).toBeInTheDocument(); // the assertion
    });
    it('should dispatch fetchMovies action', async () => {
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
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <MovieList />
                </MemoryRouter>
            </Provider>
        );
        await waitFor(() => {
            const actions = store.getActions();
            // console.log(actions);
            expect(actions).toHaveLength(1);
            expect(actions[0].type).toEqual('movies/fetchMovies/pending');
        });
    });
});
