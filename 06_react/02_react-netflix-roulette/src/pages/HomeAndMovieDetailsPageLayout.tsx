import Container from '../ui/Container';
import Genres from '../components/Genres';
import MovieList from '../components/MovieList';
import { Outlet, Route, Routes } from 'react-router-dom';
import HomeAndMovieDetailsPageFooter from './HomeAndMovieDetailsPageFooter';
// import MovieDetailsPageContent from './movie-details-page/MovieDetailsPageContent';

function Layout() {
    return (
        <>
            <Outlet />
            <Container>
                <Genres />
                <MovieList />
            </Container>
            <HomeAndMovieDetailsPageFooter />
        </>
    );
}

export default Layout;
