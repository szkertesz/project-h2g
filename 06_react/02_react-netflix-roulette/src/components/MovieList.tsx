import MovieItem from "./MovieItem";

function MovieList() {
    return (
        <section>
            <h2>results</h2>
            <p>n movies found</p>
            <ul>
                <li>
                    <MovieItem />
                </li>
            </ul>
        </section>
    );
}

export default MovieList