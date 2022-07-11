import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import Container from '../../ui/Container';
import classes from './MovieDetailsPageContent.module.scss';
import { Movie } from '../../interfaces/Movie';

type Props = {
    // movieData: Movie[];
};

const MovieDetailsPageContent: React.FC<Props> = (movieData: Props) => {
    const params = useParams();
    const singleMovieData = useSelector((state: RootState) =>
        state.movies.movies.find((movie) => movie.id === params.movieId)
    );
    const {
        title,
        release_date,
        genre,
        thumbnail,
        description,
        rating,
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
                            src={thumbnail}
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
                                        {rating}
                                    </span>
                                </div>
                                <ul className={classes['article__genres']}>
                                    {genre
                                        .split(',')
                                        .map((genreItem, i, genres) => {
                                            return (
                                                <li key={i}>{`${genreItem} ${
                                                    i < genres.length - 1
                                                        ? `,`
                                                        : ``
                                                }`}</li>
                                            );
                                        })}
                                </ul>
                                <div className={classes['article__info']}>
                                    <time dateTime={String(release_date)}>
                                        {release_date}
                                    </time>
                                    <span>{runtime}</span>
                                </div>
                            </header>
                            <section
                                className={classes['article__description']}
                            >
                                <p>{description}</p>
                            </section>
                        </div>
                    </div>
                </Container>
            </article>
        </>
    );
};

export default MovieDetailsPageContent;
