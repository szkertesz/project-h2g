import MovieDetailsPageHeader from './MovieDetailsPageHeader';
import MovieDetailsPageContent from './MovieDetailsPageContent';
import { Routes, Route, Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Movie } from '../../interfaces/Movie';
import { useGetDataQuery } from '../../features/api/apiSlice';
type Props = {};

const MovieDetailsPageTop: React.FC<Props> = (Props) => {
    const { data } = useGetDataQuery();
    const movieData = data?.movies as Movie[];

    return (
        <>
            <MovieDetailsPageHeader />
            <Routes>
                <Route
                    path=':movieId'
                    element={<MovieDetailsPageContent movieData={movieData} />}
                ></Route>
            </Routes>
            <Outlet />
        </>
    );
};

export default MovieDetailsPageTop;
