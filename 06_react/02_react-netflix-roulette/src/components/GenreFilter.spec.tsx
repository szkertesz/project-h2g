import React from 'react';
import { Provider } from 'react-redux';
import renderer, {ReactTestRenderer, ReactTestInstance} from 'react-test-renderer';
import configureStore from 'redux-mock-store';

import GenreFilter from './GenreFilter';
import { setGenreFilter } from '../features/movies/moviesSlice';
import { RootState } from '../app/store';
import { Store, AnyAction } from '@reduxjs/toolkit';

const mockStore = configureStore<RootState>([]);

describe('EditMovieForm', () => {
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
        component = renderer.create(
            <Provider store={store}>
                <GenreFilter />
            </Provider>
        );
        root = component.root
    });
    // the test suite
    it("should render GenreFilter component", () => {
        expect(component.toJSON()).toMatchSnapshot(); // the assertion
    });
    it("should count GenreFilter components radio inputs (6)", () => {
        const allRadios = root.findAllByType('input');
        expect(allRadios.length).toEqual(6); // the assertion
    });
    it('should dispatch an action with value=\"horror\"', () => {
        renderer.act(() => {root.findByProps({ id: 'action' }).props.onChange({target: {value: 'Action'}});});
        expect(store.dispatch).toHaveBeenCalledWith(
            setGenreFilter('action')
        );
    });
});
