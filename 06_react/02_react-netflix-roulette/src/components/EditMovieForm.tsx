import classes from './AddMovieForm.module.scss';
import Button from '../ui/Button';
import CustomSelect from './CustomSelect';

import { SetStateAction, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editMovie } from '../features/movies/moviesSlice'
import { RootState } from '../app/store'

import { Movie } from '../interfaces/Movie'

// RTKQ
// import {
//     useGetSingleDataQuery,
//     useEditDataMutation,
// } from '../features/api/apiSlice';

interface Props {
    movieId: string
}

const EditMovieForm: React.FC<Props> = ({movieId}) => {
    console.log(movieId)
    const movieToEdit = useSelector((state: RootState) => state.movies.find(movie => movie.id === movieId) as Movie)
    // RTKQ code
    // const { data } = useGetSingleDataQuery(movieId);
    // const [updateMovie] = useEditDataMutation();
    console.log(movieToEdit)
    const [genre, setGenre] = useState<string>(movieToEdit.genre);
    const [url, setUrl] = useState(movieToEdit.movie_url);
    const [rating, setRating] = useState(Number(movieToEdit.rating));
    const [release_date, setRelease] = useState(`${movieToEdit.release_date}-01-01`);
    const [runtime, setRuntime] = useState(movieToEdit.runtime);
    const [thumbnail, setThumbnail] = useState(movieToEdit.thumbnail);
    const [title, setTitle] = useState(movieToEdit.title);
    const [description, setDescription] = useState(movieToEdit.description);

    const dispatch = useDispatch()
    // const history = useHistory();

    const onGenreChanged = (e: [{ value: string; label: string }]) => {
        const genresData = e.map((genre) => genre.value).join();
        setGenre(genresData);
    };
    const onUrlChanged = (e: { target: { value: SetStateAction<string> } }) => {
        setUrl(e.target.value);
    };
    const onRatingChanged = (e: {
        target: { value: any };
    }) => {
        setRating(e.target.value);
    };
    const onReleaseChanged = (e: { target: { value: string } }) => {
        const year = new Date(e.target.value).getFullYear().toString();
        setRelease(year);
    };
    const onRuntimeChanged = (e: {
        target: { value: SetStateAction<string> };
    }) => {
        setRuntime(e.target.value);
    };
    const onThumbnailChanged = (e: {
        target: { value: SetStateAction<string> };
    }) => {
        setThumbnail(e.target.value);
    };
    const onTitleChanged = (e: {
        target: { value: SetStateAction<string> };
    }) => {
        setTitle(e.target.value);
    };
    const onDescriptionChanged = (e: {
        target: { value: SetStateAction<string> };
    }) => {
        setDescription(e.target.value);
    };

    const canSave = [
        genre,
        url,
        rating,
        release_date,
        runtime,
        thumbnail,
        title,
        description,
    ].every(Boolean);

    // const onSubmit = () => console.log(release)
    const onSubmit = () => {
        if (canSave) {
            dispatch(editMovie({
                genre,
                url,
                rating,
                release_date,
                runtime,
                thumbnail,
                title,
                description,
            }))
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
                    <label htmlFor='movieUrl'>Movie URL</label>
                    <input
                        type='text'
                        id='movieUrl'
                        name='movieUrl'
                        placeholder='https://'
                        onChange={onUrlChanged}
                        value={url}
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
                        value={rating}
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
                        type='text'
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
                        value={thumbnail}
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
                        onChange={onDescriptionChanged}
                        value={description}
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
