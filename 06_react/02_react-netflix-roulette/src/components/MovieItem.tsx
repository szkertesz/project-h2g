import { useAppDispatch } from '../app/hooks';
import { useRef, useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Movie } from '../interfaces/Movie';
import Button from '../ui/Button';
import Modal from './Modal';
import EditMovieForm from './EditMovieForm';
import { deleteMovie } from '../features/movies/moviesSlice';
import classes from './MovieItem.module.scss';
import posterPlaceholder from '../assets/images/poster_original.png';

type Props = {
    movieInfo: Movie;
};

const MovieItem: React.FC<Props> = ({ movieInfo }) => {
    const dispatch = useAppDispatch();
    const { id, genres, release_date, poster_path, title } = movieInfo;
    const [isOpen, setIsOpen] = useState(false);
    const imgEl = useRef<HTMLImageElement>(null);
    const [posterUrl, setPosterUrl] = useState(poster_path);
    const [addRequestStatus, setAddRequestStatus] = useState('idle');

    const transformReleaseDate = (date: string) => {
        return new Date(date).getFullYear();
    };

    const onPosterError = () => {
        setPosterUrl(posterPlaceholder)
    };

    useEffect(() => {
        const imgElCurrent = imgEl.current;

        if (imgElCurrent) {
            imgElCurrent.addEventListener('error', onPosterError);
            return () =>
                imgElCurrent.removeEventListener('error', onPosterError);
        }
    }, [imgEl]);

    const onDelete = async () => {
        if (addRequestStatus === 'idle') {
            try {
                setAddRequestStatus('pending');
                await dispatch(deleteMovie(id));
                //TODO: implement modal response
                alert(
                    `Movie (id: ${id}) has been deleted from database successfully!`
                );
            } catch (error) {
                console.error(error);
            } finally {
                setAddRequestStatus('idle');
            }
        }
    };
    return (
        <article className={classes['movie-item']}>
            <div className={classes['movie-item__text']}>
                <div>
                    <h3 className={classes['movie-item__title']}>{title}</h3>
                    <ul className={classes['movie-item__genres']}>
                        {genres.map((genreItem, i, genres) => {
                            return (
                                <li key={i}>{`${genreItem}${
                                    i < genres.length - 1 ? `, ` : ``
                                }`}</li>
                            );
                        })}
                    </ul>
                </div>
                <time
                    dateTime={transformReleaseDate(release_date).toString()}
                    className={classes['movie-item__release']}
                >
                    {transformReleaseDate(release_date)}
                </time>
            </div>
            <Link to={`movie/${id}`} className={classes['movie-item__poster']}>
                <img
                    ref={imgEl}
                    src={posterUrl}
                    alt='poster'
                />
            </Link>
            <div className={classes['movie-item__actions']}>
                <Button onClick={onDelete}>Delete</Button>
                <Button onClick={() => setIsOpen(true)}>Edit</Button>
            </div>
            <Modal
                handleClose={() => setIsOpen(false)}
                isOpen={isOpen}
                size={'large'}
            >
                <EditMovieForm movieId={id} />
            </Modal>
        </article>
    );
};

export default MovieItem;
