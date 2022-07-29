import React from 'react';
import { Provider } from 'react-redux';
import renderer, {
    ReactTestInstance,
    ReactTestRenderer,
} from 'react-test-renderer';
import { findByText, fireEvent, getByText, render, screen, waitFor } from '@testing-library/react';
import configureStore from 'redux-mock-store';

import AddMovieForm from './AddMovieForm';
import { addMovie } from '../features/movies/moviesSlice';
import thunk from 'redux-thunk';

const mockStore = configureStore([thunk]);

const testMovieData = {
    title: 'test title',
    tagline: 'tagline',
    vote_average: 10,
    vote_count: 0,
    release_date: '2022',
    poster_path:
        'https://m.media-amazon.com/images/M/MV5BNTAyOTkxNTQ3NV5BMl5BanBnXkFtZTgwMjQ1NzQxOTE@._V1_.jpg',
    overview: 'test overview',
    budget: 0,
    genres: ['horror'],
    runtime: 120,
};

describe('AddMovieForm', () => {
    let store: any;
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

        // store.dispatch = jest.fn().mockName('addMovie');

        component = renderer.create(
            <Provider store={store}>
                <AddMovieForm hasModalFeedback={false} />
            </Provider>
        );
        root = component.root;
    });
    // the test suite
    it('should render AddMovieForm component', () => {
        expect(component.toJSON()).toMatchSnapshot(); // the assertion
    });
    it("should open modal w/ text containing 'fill all the required fields' message if it's inputs aren't filled", async () => {
        render(
            <Provider store={store}>
                <AddMovieForm hasModalFeedback={true} />
            </Provider>
        );
        fireEvent.click(screen.getByTestId('add-movie-submit'));

        expect(
            await screen.findByText(/fill all the required fields/)
        ).toBeInTheDocument(); // the assertion
    });
    it('should dispatch an addMovie action w/ payload buildt from form data', async () => {
        renderer.act(() => {
            root.findByProps({ id: 'movieTitle' }).props.onChange({
                target: { value: testMovieData.title },
            });
        });
        renderer.act(() => {
            root.findByProps({ id: 'movieRelease' }).props.onChange({
                target: { value: testMovieData.release_date },
            });
        });
        renderer.act(() => {
            root.findByProps({ id: 'movieRating' }).props.onChange({
                target: { value: testMovieData.vote_average },
            });
        });
        renderer.act(() => {
            root.findByProps({ id: 'movieRuntime' }).props.onChange({
                target: { value: testMovieData.runtime },
            });
        });
        renderer.act(() => {
            root.findByProps({ id: 'movieThumbnail' }).props.onChange({
                target: {
                    value: testMovieData.poster_path,
                },
            });
        });
        renderer.act(() => {
            root.findByProps({ id: 'movieOverview' }).props.onChange({
                target: { value: testMovieData.overview },
            });
        });

        // renderer.act(() => {
        //     root.findByType(CustomSelect).props.handleChange([
        //         { value: 'horror', label: 'Horror' },
        //     ]);
        // });

        renderer.act(() => {
            root.findByProps({
                id: 'add-movie-submit',
            }).props.onClick();
        });

        await waitFor(() => {
            const actions = store.getActions();
            console.log(actions)
            expect(actions).toHaveLength(2);
            expect(actions[0].type).toEqual('movies/addMovie/pending');
            expect(actions[1].type).toEqual('movies/addMovie/rejected');
            expect(actions[1].meta.requestStatus).toEqual('rejected');
            // expect(actions[1].payload).toEqual(testMovieData);
            expect(actions[1].payload).toEqual('Bad Request');
        });
    });
    it('should dispatch an action w/ prepared payload data', async () => {
        store.dispatch(addMovie(testMovieData) as any);
        const actions = store.getActions();
        await waitFor(() => {
            expect(actions).toHaveLength(2);
            expect(actions[0].type).toEqual('movies/addMovie/pending');
            expect(actions[1].type).toEqual('movies/addMovie/fulfilled');
            expect(actions[1].meta.requestStatus).toEqual('fulfilled');
        });
    });
});
