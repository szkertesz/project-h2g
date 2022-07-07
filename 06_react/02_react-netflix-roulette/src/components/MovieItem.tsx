import { Movie } from '../interfaces/Movie';
import classes from './MovieItem.module.scss';
import { Link } from 'react-router-dom'

type Props = {
    movieInfo: Movie;
};

const MovieItem: React.FC<Props> = ({ movieInfo }) => {
    const { id, genre, release_date, thumbnail, title } = movieInfo;
    console.warn('genre', movieInfo)
    return (
        <article className={classes['movie-item']}>
            <div className={classes['movie-item__text']}>
                <div>
                    <h3 className={classes['movie-item__title']}>{title}</h3>
                    <ul className={classes['movie-item__genres']}>
                        {genre.split(',').map((genreItem, i, genres) => {
                            return (
                                <li key={i}>{`${genreItem} ${
                                    i < genres.length - 1 ? `,` : ``
                                }`}</li>
                            );
                        })}
                    </ul>
                </div>
                <time
                    dateTime={String(release_date)}
                    className={classes['movie-item__release']}
                >
                    {release_date}
                </time>
            </div>
            <Link to={`movie/${id}`} className={classes['movie-item__poster']}>
                <img src={thumbnail} alt='poster' />
            </Link>
        </article>
    );
};

export default MovieItem;
