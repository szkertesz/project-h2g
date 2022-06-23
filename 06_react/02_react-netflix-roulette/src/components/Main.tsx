import Container from '../ui/Container';
import Genres from './Genres';
import MovieList from './MovieList';

function Main() {
    return (
        <main>
            <Container>
                <Genres />
                <MovieList />
            </Container>
        </main>
    );
}

export default Main;
