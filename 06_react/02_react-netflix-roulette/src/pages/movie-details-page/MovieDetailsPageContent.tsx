import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import Container from '../../ui/Container';
import GenreList from '../../components/GenreList';
import classes from './MovieDetailsPageContent.module.scss';
import { Movie } from '../../interfaces/Movie';

const MovieDetailsPageContent: React.FC = () => {
    const params = useParams();
    const singleMovieData = useSelector((state: RootState) =>
        state.movies.data.find((movie) => movie.id === Number(params.movieId))
    );
    const transformReleaseDate = (date: string) => {
        return new Date(date).getFullYear();
    };
    const {
        title,
        release_date,
        genres,
        poster_path,
        overview,
        vote_average,
        runtime,
    } = singleMovieData as Movie;

    if (!singleMovieData) {
        return (
            <section>
                <h2>Movie not found!</h2>
            </section>
        );
    }

    return (
        <>
            <article className={classes.article}>
                <Container>
                    <div className={classes['article__inner']}>
                        <img
                            src={poster_path}
                            alt='Movie poster'
                            className={classes['article__poster']}
                        />
                        <div>
                            <header className={classes['article__header']}>
                                <div className={classes['article__title-bar']}>
                                    <h1 className={classes['article__title']}>
                                        {title}
                                    </h1>
                                    <span
                                        className={classes['article__rating']}
                                    >
                                        {vote_average}
                                    </span>
                                </div>
                                <GenreList genres={genres} />
                                <div className={classes['article__info']}>
                                    <time dateTime={String(transformReleaseDate(release_date))}>
                                        {transformReleaseDate(release_date)}
                                    </time>
                                    <span>{runtime} min</span>
                                </div>
                            </header>
                            <section
                                className={classes['article__description']}
                            >
                                <p>{overview}</p>
                            </section>
                        </div>
                    </div>
                </Container>
            </article>
        </>
    );
};

export default MovieDetailsPageContent;
