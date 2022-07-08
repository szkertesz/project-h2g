import classes from './AddMovieForm.module.scss';
import Button from '../ui/Button';
import CustomSelect from './CustomSelect';
// import { useParams } from 'react-router-dom';
import { SetStateAction, useState } from 'react';

import {
    useGetSingleDataQuery,
    useEditDataMutation,
} from '../features/api/apiSlice';

interface Props {
    movieId: any
}

const EditMovieForm: React.FC<Props> = ({movieId}) => {
    const { data } = useGetSingleDataQuery(movieId);
    const [updateMovie] = useEditDataMutation();

    const [genre, setGenre] = useState<string>('');
    const [url, setUrl] = useState('');
    const [rating, setRating] = useState('');
    const [release_date, setRelease] = useState('');
    const [runtime, setRuntime] = useState('');
    const [thumbnail, setThumbnail] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    // const history = useHistory();

    const onGenreChanged = (e: [{ value: string; label: string }]) => {
        const genresData = e.map((genre) => genre.value).join();
        setGenre(genresData);
        console.log(genresData);
    };
    const onUrlChanged = (e: { target: { value: SetStateAction<string> } }) => {
        setUrl(e.target.value);
        console.log(url);
    };
    const onRatingChanged = (e: {
        target: { value: SetStateAction<string> };
    }) => {
        setRating(e.target.value);
        console.log(rating);
    };
    const onReleaseChanged = (e: { target: { value: string } }) => {
        const year = new Date(e.target.value).getFullYear().toString();
        setRelease(year);
    };
    const onRuntimeChanged = (e: {
        target: { value: SetStateAction<string> };
    }) => {
        setRuntime(e.target.value);
        console.log(runtime);
    };
    const onThumbnailChanged = (e: {
        target: { value: SetStateAction<string> };
    }) => {
        setThumbnail(e.target.value);
        console.log();
    };
    const onTitleChanged = (e: {
        target: { value: SetStateAction<string> };
    }) => {
        setTitle(e.target.value);
        console.log(title);
    };
    const onDescriptionChanged = (e: {
        target: { value: SetStateAction<string> };
    }) => {
        setDescription(e.target.value);
        console.log(description);
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
    const onSubmit = async () => {
        if (canSave) {
            await updateMovie({
                id: movieId,
                genre,
                url,
                rating,
                release_date,
                runtime,
                thumbnail,
                title,
                description,
            })

            setGenre('');
            setUrl('');
            setRating('');
            setRelease('');
            setRuntime('');
            setThumbnail('');
            setTitle('');
            setDescription('');

            // history.push(`/movies/${movieId}`)

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
                    />
                </div>
                <div className={classes['movie-form__group']}>
                    <label htmlFor='movieRuntime'>Runtime</label>
                    <input
                        type='text'
                        id='movieRuntime'
                        name='movieRuntime'
                        onChange={onRuntimeChanged}
                    />
                </div>
                <div className={classes['movie-form__group']}>
                    <label htmlFor='movieThumbnail'>Poster image URL</label>
                    <input
                        type='text'
                        id='movieThumbnail'
                        name='movieThumbnail'
                        onChange={onThumbnailChanged}
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
