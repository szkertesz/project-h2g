import { useSelector } from 'react-redux';
import MovieItem from './MovieItem';
import { Movie } from '../interfaces/Movie';
import classes from './MovieList.module.scss';
import { RootState } from '../app/store';

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

    const filterByGenre = useSelector((state: RootState) => state.filters);
    const movieData = useSelector(
        (state: RootState) =>
            state.movies.filter(movie => {
                console.log(movie.genres);
                return movie.genres.includes(filterByGenre.genre);
            })
    );
    return (
        <section>
            <h2 className='visually-hidden'>Results</h2>
            {/* <p className={classes.info}>
                <span>{movieData.length}</span> movies found
            </p> */}
            <p className={classes.info}>
                <span>{movieData?.length}</span> movies found
            </p>
            {/* <ul className={`${classes.results} ${isFetching ? classes['results--disabled'] : ''}`}> */}
            <ul className={classes.results}>
                {movieData?.map((movie: Movie) => {
                    return (
                        <li key={movie.id}>
                            <MovieItem movieInfo={movie} />
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}

export default MovieList;
