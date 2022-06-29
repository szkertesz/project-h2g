import GenreFilter from "./GenreFilter";
import GenreSorter from "./GenreSorter";
import classes from './Genres.module.scss'

function Genres() {
    return (
        <section className={classes.genres}>
            <GenreFilter />
            <GenreSorter />
        </section>
    );
}

export default Genres