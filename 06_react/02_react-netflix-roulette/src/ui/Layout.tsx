import Footer from '../components/Footer';
import Container from '../ui/Container';
import Genres from '../components/Genres';
import MovieList from '../components/MovieList';
import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <>
            <Outlet />
            <main>
                <Container>
                    <Genres />
                    <MovieList />
                </Container>
            </main>
            <Footer />
        </>
    );
}

export default Layout;
