import { useAppSelector } from '../../app/hooks';
import { Movie } from '../../interfaces/Movie';

export const moviesSelector = (state: any) => {
    console.log(state)
    return state.movies.data
        .filter((movie: Movie) =>
            movie.title
                .toLowerCase()
                .includes(state.movies.searchedMovie.toLowerCase())
        )
        .filter(
            (movie: Movie) =>
                state.movies.filterOptions.genre === '' ||
                movie.genres
                    .map((genre) => genre.toLowerCase())
                    .includes(state.movies.filterOptions.genre)
        )
        .sort((a: any, b: any) => {
            if (state.movies.sortOptions.sortOrder === 'ascending') {
                switch (state.movies.sortOptions.sortCriterion) {
                    case 'releaseDate':
                        return (
                            new Date(a.release_date).getTime() -
                            new Date(b.release_date).getTime()
                        );
                    case 'runtime':
                        return (
                            a.runtime - b.runtime
                        );
                    case 'rating':
                        return a.vote_average - b.vote_average;
                }
            } else {
                switch (state.movies.sortOptions.sortCriterion) {
                    case 'releaseDate':
                        return (
                            new Date(b.release_date).getTime() -
                            new Date(a.release_date).getTime()
                        );
                    case 'length':
                        return (
                            b.runtime - a.runtime
                        );
                    case 'rating':
                        return b.vote_average - a.vote_average;
                }
            }
            return a.release_date - b.release_date;
        });
};

export const useMovies = () => useAppSelector(moviesSelector);
