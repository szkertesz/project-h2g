import MovieDetailsPageHeader from './MovieDetailsPageHeader';
import MovieDetailsPageContent from './MovieDetailsPageContent';
import { Routes, Route, Outlet } from 'react-router-dom';

type Props = {};

const MovieDetailsPageTop: React.FC<Props> = (Props) => {

    return (
        <>
            <MovieDetailsPageHeader />
            <Routes>
                <Route
                    path=':movieId'
                    element={<MovieDetailsPageContent />}
                ></Route>
            </Routes>
            <Outlet />
        </>
    );
};

export default MovieDetailsPageTop;
