import { useAppDispatch, useAppSelector } from '../app/hooks';
import { fetchMovies, selectAllMovies } from '../features/movies/moviesSlice';
import { useEffect } from 'react';
import MovieItem from './MovieItem';
import { Movie } from '../interfaces/Movie';
import classes from './MovieList.module.scss';


// import { useAppDispatch, useAppSelector } from '../app/hooks';
// RTKQ
// import { useGetDataQuery } from '../features/api/apiSlice';

function MovieList() {
    // bare react code
    // const [isLoading, setIsLoading] = useState(false);
    // const [movieData, setMovieData] = useState<Movie[]>([]);

    // const getData = async () => {
    //     try {
    //         const response = await fetch('movies.json', {
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 Accept: 'application/json',
    //             },
    //         });
    //         if (!response.ok) {
    //             throw new Error(response.statusText);
    //         }
    //         const data = await response.json();
    //         const moviesData = data.movies;
    //         setMovieData(moviesData);
    //         setIsLoading(false);
    //     } catch (error) {
    //         if (error instanceof Error) {
    //             console.warn(String(error.message));
    //         }
    //     }
    // };

    // useEffect(() => {
    //     getData();
    // }, []);

    // if(isLoading) {
    //     return(
    //         <section>
    //             <h2 className='visually-hidden'>Loading State</h2>
    //             <p>Loading...</p>
    //         </section>
    //     )
    // }

    // RTKQ code
    // const { data, isFetching } = useGetDataQuery();
    // const movieData = data;

    // if (isFetching) return <section>Loading...</section>;
    // if (!data) return <section><p>Can't get any data :-/</p></section>;
    const dispatch = useAppDispatch();
    const movies = useAppSelector(selectAllMovies);
    const moviesStatus = useAppSelector(state => state.movies.status);
    const moviesError = useAppSelector(state => state.movies.error);

    useEffect(() => {
        if (moviesStatus === 'idle') {
            dispatch(fetchMovies())
        }
    }, [moviesStatus, dispatch]);

    if (moviesStatus === 'loading') {
        return (
            <section>
                <p>Loading...</p>
        </section>
            )
    } else if (moviesStatus === 'succeeded') {
        return (
            <section>
                <h2 className='visually-hidden'>Results</h2>
                <p className={classes.info}>
                    <span>{movies.length}</span> movies found
                </p>
                <ul className={classes.results}>
                    {movies.map((movie: Movie) => {
                        return (
                            <li key={movie.id}>
                                <MovieItem movieInfo={movie} />
                            </li>
                        );
                    })}
                </ul>
            </section>
        );
    } else {
        return (
            <section>
                <p>{ moviesError }</p>
            </section>
        )
    }
}

export default MovieList;
