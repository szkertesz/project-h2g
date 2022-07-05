import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Container from '../../ui/Container';
import classes from './MovieDetailsPageContent.module.scss';
import {Movie} from '../../interfaces/Movie'
import { useGetDataQuery } from '../../features/api/apiSlice';


type Props = {
    movieData: Movie[]
}
const MovieDetailsPageTop: React.FC<Props> = (movieData: Props) => {
    const { movieId } = useParams()
    // const currentMovieData = data.filter(movie => movie.id === movieId);
    return (
        <>
            <article className={classes.article}>
                <Container>
                    <div className={classes['article__inner']}>
                        <img
                            src=''
                            alt='Movie poster'
                            className={classes['article__poster']}
                        />
                        <div>
                            <header className={classes['article__header']}>
                                <div className={classes['article__title-bar']}>
                                    <h1 className={classes['article__title']}>
                                        {movieId}
                                    </h1>
                                    <span
                                        className={
                                            classes['article__rating']
                                        }
                                    >
                                        8.9
                                    </span>
                                </div>
                                <ul className={classes['article__genres']}>
                                    <li>genre a</li>
                                    <li>genre b</li>
                                </ul>
                                <div className={classes['article__info']}>
                                    <time dateTime='1979'>1979</time>
                                    <span>duration</span>
                                </div>
                            </header>
                            <section
                                className={classes['article__description']}
                            >
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Dignissimos assumenda,
                                    adipisci nostrum repellendus, quidem
                                    consequuntur illum officia placeat voluptate
                                    perferendis sunt facilis iste ab quisquam
                                    esse vero aliquid, nihil eum!
                                </p>
                            </section>
                        </div>
                    </div>
                </Container>
            </article>
        </>
    );
}

export default MovieDetailsPageTop;
