import React from 'react';
import { Provider } from 'react-redux';
import renderer, {
    ReactTestInstance,
    ReactTestRenderer,
} from 'react-test-renderer';
import { fireEvent, render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';

import AddMovieForm from './AddMovieForm';
import { addMovie } from '../features/movies/moviesSlice';
import { AnyAction, Store } from '@reduxjs/toolkit';

const mockStore = configureStore([]);

describe('AddMovieForm', () => {
    let store: Store<any, AnyAction>;
    let component: ReactTestRenderer;
    let root: ReactTestInstance;

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

        store.dispatch = jest.fn().mockName('addMovie');;

        component = renderer.create(
            <Provider store={store}>
                <AddMovieForm hasModalFeedback={false}/>
            </Provider>
        );
        root = component.root;
    });
    // the test suite
    it('should render AddMovieForm component', () => {
        expect(component.toJSON()).toMatchSnapshot(); // the assertion
    });
    it('should dispatch any actions if it\'s inputs aren\'t filled', () => {
        render(
            <Provider store={store}>
                <AddMovieForm hasModalFeedback={false}/>
            </Provider>
        );
        fireEvent.click(screen.getByTestId('add-movie-submit'));
        expect(store.dispatch).toHaveBeenCalledTimes(0); // the assertion
    });
    it('should dispatch an addMovie action if it\'s inputs are filled correctly', () => {
        renderer.act(() => {
            root.findByProps({ id: 'movieTitle' }).props.onChange({
                target: { value: 'test title'}
            });
        });
        renderer.act(() => {
            root.findByProps({ id: 'movieRelease' }).props.onChange({
                target: { value: '2022-01-01' },
            });
        });
        renderer.act(() => {
            root.findByProps({ id: 'movieRating' }).props.onChange({
                target: { value: '10' },
            });
        });
        renderer.act(() => {
            root.findByProps({ id: 'movieRuntime' }).props.onChange({
                target: { value: '120' },
            });
        });
        renderer.act(() => {
            root.findByProps({ id: 'movieThumbnail' }).props.onChange({
                target: {
                    value: 'https://m.media-amazon.com/images/M/MV5BNTAyOTkxNTQ3NV5BMl5BanBnXkFtZTgwMjQ1NzQxOTE@._V1_.jpg',
                },
            });
        });
        renderer.act(() => {
            root.findByProps({ id: 'movieOverview' }).props.onChange({
                target: { value: 'test overview' },
            });
        });

        renderer.act(() => {
            root.findByProps({ id: 'add-movie-submit' }).props.onClick();
        });
        expect(store.dispatch).toHaveBeenCalledTimes(1); // the assertion
        expect(store.dispatch).toHaveReturned(); // the assertion
        expect(store.dispatch).toHaveBeenCalledWith(addMovie({
                title: 'test title',
                tagline: 'tagline',
                vote_average: 10,
                vote_count: 0,
                release_date: '2022',
                poster_path:
                    'https://m.media-amazon.com/images/M/MV5BNTAyOTkxNTQ3NV5BMl5BanBnXkFtZTgwMjQ1NzQxOTE@._V1_.jpg',
                overview: 'test overview',
                budget: 0,
                genres: [],
                runtime: 120,
            })
        );
    });
});
