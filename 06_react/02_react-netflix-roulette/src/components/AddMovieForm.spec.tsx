import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

import AddMovieForm from './AddMovieForm';
import { addMovie } from '../features/movies/moviesSlice';

const mockStore = configureStore([]);

describe('AddMovieForm', () => {
    let store;
    let component: { toJSON: () => any };

    beforeEach(() => {
        store = mockStore({
            initialState: {
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

        component = renderer.create(
            <Provider store={store}>
                <AddMovieForm />
            </Provider>
        );
    });
    // the test suite
    it('should render AddMovieForm component', () => {
        expect(component.toJSON()).toMatchSnapshot(); // the assertion
    });
});
