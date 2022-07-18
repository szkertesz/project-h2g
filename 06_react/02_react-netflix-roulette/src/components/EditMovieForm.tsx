import classes from './AddMovieForm.module.scss';
import Button from '../ui/Button';
import CustomSelect from './CustomSelect';

import { ChangeEvent, SetStateAction, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { editMovie } from '../features/movies/moviesSlice'
import { RootState } from '../app/store'
import { Movie } from '../interfaces/Movie'

// RTKQ
// import {
//     useGetSingleDataQuery,
//     useEditDataMutation,
// } from '../features/api/apiSlice';

interface Props {
    movieId: number,
}

const EditMovieForm: React.FC<Props> = ({movieId}) => {
    const movieToEdit = useAppSelector(state => state.movies.data.find(movie => movie.id === movieId) as Movie)
    // RTKQ code
    // const { data } = useGetSingleDataQuery(movieId);
    // const [updateMovie] = useEditDataMutation();
    const [title, setTitle] = useState(movieToEdit.title);
    const [genres, setGenres] = useState(movieToEdit.genres);
    const [vote_average, setVoteAverage] = useState(movieToEdit.vote_average);
    const [release_date, setReleaseDate] = useState(movieToEdit.release_date);
    const [runtime, setRuntime] = useState(movieToEdit.runtime);
    const [poster_path, setPosterPath] = useState(movieToEdit.poster_path);
    const [overview, setOverview] = useState(movieToEdit.overview);

    const dispatch = useAppDispatch()

    const onGenreChanged = (e: [{ value: string; label: string }]) => {
        const genresData = e.map((genre) => genre.value);
        setGenres(genresData);
    };
    const onRatingChanged = (e: {
        target: { value: any };
    }) => {
        setVoteAverage(Number(e.target.value));
    };
    const onReleaseChanged = (e: { target: { value: string } }) => {
        const year = new Date(e.target.value).getFullYear().toString();
        setReleaseDate(year);
    };
    const onRuntimeChanged = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event);
        setRuntime(Number(event.target.value));
    };
    const onThumbnailChanged = (e: {
        target: { value: SetStateAction<string> };
    }) => {
        setPosterPath(e.target.value);
    };
    const onTitleChanged = (e: {
        target: { value: SetStateAction<string> };
    }) => {
        setTitle(e.target.value);
    };
    const onOverviewChanged = (e: {
        target: { value: SetStateAction<string> };
    }) => {
        setOverview(e.target.value);
    };

    const canSave = [
        title,
        genres,
        vote_average,
        release_date,
        runtime,
        poster_path,
        overview
    ].every(Boolean);

    // const onSubmit = () => console.log(release)
    const onSubmit = () => {
        if (canSave) {
            dispatch(editMovie({
                id: movieId,
                title,
                genres,
                vote_average,
                release_date,
                runtime,
                poster_path,
                overview
            }))
            // navigate(`movie/${movieId}`)
        }
    };

    return (
        <form action=''>
            <h2 className={classes['movie-form__title']}>Edit movie</h2>
            <div className={classes['movie-form__fieldset']}>
                <div className={classes['movie-form__group']}>
                    <label htmlFor='movieTitle'>Title</label>
                    <input
                        type='text'
                        id='movieTitle'
                        name='movieTitle'
                        onChange={onTitleChanged}
                        value={title}
                    />
                </div>
                <div className={classes['movie-form__group']}>
                    <label htmlFor='movieRelease'>Release date</label>
                    <input
                        type='date'
                        id='movieRelease'
                        name='movieRelease'
                        placeholder='Select Date'
                        onChange={onReleaseChanged}
                        value={release_date}
                    />
                </div>
                <div className={classes['movie-form__group']}>
                    <label htmlFor='movieRating'>Rating</label>
                    <input
                        type='number'
                        id='movieRating'
                        name='movieRating'
                        min='1'
                        max='10'
                        step='0.1'
                        onChange={onRatingChanged}
                        value={vote_average}
                    />
                </div>
                <div className={classes['movie-form__group']}>
                    <label htmlFor='react-select-2-input'>Genre</label>
                    <CustomSelect
                        options={[
                            { value: 'crime', label: 'Crime' },
                            { value: 'documentary', label: 'Documentary' },
                            { value: 'horror', label: 'Horror' },
                            { value: 'comedy', label: 'Comedy' },
                            { value: 'fantasy', label: 'Fantasy' },
                        ]}
                        handleChange={onGenreChanged}
                        // defaultValue={genre.split(',').map(gen => {
                        //     return {label: gen, value: gen}
                        // })}
                    />
                </div>
                <div className={classes['movie-form__group']}>
                    <label htmlFor='movieRuntime'>Runtime</label>
                    <input
                        type='number'
                        id='movieRuntime'
                        name='movieRuntime'
                        onChange={onRuntimeChanged}
                        value={runtime}
                    />
                </div>
                <div className={classes['movie-form__group']}>
                    <label htmlFor='movieThumbnail'>Poster image URL</label>
                    <input
                        type='text'
                        id='movieThumbnail'
                        name='movieThumbnail'
                        onChange={onThumbnailChanged}
                        value={poster_path}
                    />
                </div>
                <div
                    className={`${classes['movie-form__group']} ${classes['movie-form__group--full']}`}
                >
                    <label htmlFor='movieOverview'>Overview</label>
                    <textarea
                        id='movieOverview'
                        name='movieOverview'
                        rows={3}
                        onChange={onOverviewChanged}
                        value={overview}
                    ></textarea>
                </div>
                <div className={classes['movie-form__actions']}>
                    <Button isGhost={true}>reset</Button>
                    <Button type='button' onClick={onSubmit}>
                        submit
                    </Button>
                </div>
            </div>
        </form>
    );
};

export default EditMovieForm;
