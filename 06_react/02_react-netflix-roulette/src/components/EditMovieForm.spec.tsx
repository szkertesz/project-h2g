import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import type { RootState } from '../app/store';

import EditMovieForm from './EditMovieForm';
import { editMovie } from '../features/movies/moviesSlice';

const mockStore = configureStore<RootState>([]);

describe('EditMovieForm', () => {
    let store;
    let component: { toJSON: () => any };
    const movieId = 210577;

    beforeEach(() => {
        store = mockStore({
                movies: {
                    data: [
                        {
                            id: 210577,
                            title: 'Gone Girl',
                            vote_average: 7.9,
                            release_date: '2014-10-01',
                            poster_path:
                                'https://image.tmdb.org/t/p/w500/gdiLTof3rbPDAmPaCf4g6op46bj.jpg',
                            overview:
                                "With his wife's disappearance having become the focus of an intense media circus, a man sees the spotlight turned on him when it's suspected that he may not be innocent.",
                            genres: ['Mystery', 'Thriller', 'Drama'],
                            runtime: 145,
                        },
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
                <EditMovieForm movieId={movieId}/>
            </Provider>
        );
    });
    // the test suite
    it('should render EditMovieForm component with mocked store\'s state', () => {
        expect(component.toJSON()).toMatchSnapshot(); // the assertion
    });
});
