import reducer, {setSearchedMovie, setGenreFilter, initialState, setSortParams, moviesState, selectAllMovies, selectMovieById } from './moviesSlice'
import { testData } from '../../testing/test-data-movies'

it('should return the initial state', () => {
    expect(reducer(undefined, {type: undefined})).toEqual({
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
    })
});

it('should set the searched movies title in state', () => {
    const previousState = initialState;
    expect(reducer(previousState, setSearchedMovie('Tenet'))).toEqual({
        data: [],
        status: 'idle',
        error: null,
        searchedMovie: 'Tenet',
        sortOptions: {
            sortCriterion: '',
            sortOrder: '',
        },
        filterOptions: {
            genre: '',
        },
    })
});

it('should set the filtered genre in state', () => {
    const previousState = initialState;
    expect(reducer(previousState, setGenreFilter('horror'))).toEqual({
        data: [],
        status: 'idle',
        error: null,
        searchedMovie: '',
        sortOptions: {
            sortCriterion: '',
            sortOrder: '',
        },
        filterOptions: {
            genre: 'horror',
        },
    })
});

it('should set the sorting criterion and order in state', () => {
    const previousState = initialState;
    expect(reducer(previousState, setSortParams({criterion: 'rating', order: 'descending'}))).toEqual({
        data: [],
        status: 'idle',
        error: null,
        searchedMovie: '',
        sortOptions: {
            sortCriterion: 'rating',
            sortOrder: 'descending',
        },
        filterOptions: {
            genre: '',
        },
    })
});

it('should set the sorting criterion and order in state while the genre filter option is set too', () => {
    const previousState = {
        data: [],
        status: 'idle',
        error: null,
        searchedMovie: '',
        sortOptions: {
            sortCriterion: '',
            sortOrder: '',
        },
        filterOptions: {
            genre: 'horror',
        },
    } as moviesState;
    expect(reducer(previousState, setSortParams({criterion: 'rating', order: 'descending'}))).toEqual({
        data: [],
        status: 'idle',
        error: null,
        searchedMovie: '',
        sortOptions: {
            sortCriterion: 'rating',
            sortOrder: 'descending',
        },
        filterOptions: {
            genre: 'horror',
        },
    })
});

it('should select all movies in the test dataset', () => {
    const currentState = testData
    expect(selectAllMovies(currentState)).toEqual(
        testData.movies.data
    );
});

it('should select movie Fifty Shades Freed from the test dataset which has the id 337167 ', () => {
    const currentState = testData;
    expect(selectMovieById(currentState, 337167)).toEqual(
        testData.movies.data.find(
            (movie) => movie.title === 'Fifty Shades Freed'
        )
    );
});

