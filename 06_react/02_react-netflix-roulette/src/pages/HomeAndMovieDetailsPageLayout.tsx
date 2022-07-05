import Container from '../ui/Container';
import Genres from '../components/Genres';
import MovieList from '../components/MovieList';
import { Outlet, Route, Routes } from 'react-router-dom';
import HomeAndMovieDetailsPageFooter from './HomeAndMovieDetailsPageFooter';

function Layout() {
    return (
        <>
            <Outlet />
            <main>
                <Container>
                    <Routes>
                        <Route path=':movieId'></Route>
                    </Routes>
                    <Genres />
                    <MovieList />
                </Container>
            </main>
            <HomeAndMovieDetailsPageFooter />
        </>
    );
}

export default Layout;
