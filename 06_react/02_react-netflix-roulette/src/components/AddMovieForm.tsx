import classes from './AddMovieForm.module.scss'
import Button from '../ui/Button';
import CustomSelect from './CustomSelect';
import { SetStateAction, useState } from 'react';
// import { useDispatch } from 'react-redux';
import { useAddNewDataMutation } from '../features/api/apiSlice';
import { nanoid } from '@reduxjs/toolkit';
// import { movieAdded } from '../features/movies/moviesSlice';

interface Props {}

const AddMovieForm: React.FC<Props> = () => {
    const [genre, setGenre] = useState<string>('');
    const [url, setUrl] = useState('')
    const [rating, setRating] = useState('')
    const [release_date, setRelease] = useState('')
    const [runtime, setRuntime] = useState('')
    const [thumbnail, setThumbnail] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    // const dispatch = useDispatch();
    const [addNewData, { isLoading }] = useAddNewDataMutation()
    const canSave = [
        genre,
        url,
        rating,
        release_date,
        runtime,
        thumbnail,
        title,
        description,
    ].every(Boolean) && !isLoading

    // const onGenreChanged = (e: { target: { value: SetStateAction<string>; }; }) => setGenre(e.target.value)
    // const onGenreChanged = (e: any) => {
    //     console.log(e)
    // }
    const onGenreChanged = (e: [{ value: string, label: string }]) => {
        const genresData = e.map((genre) => genre.value).join();
        setGenre(genresData);
        console.log(genresData);
    };
    const onUrlChanged = (e: { target: { value: SetStateAction<string>; }; }) => {
        setUrl(e.target.value)
        console.log(url)
    }
    const onRatingChanged = (e: { target: { value: SetStateAction<string>; }; }) => {
        setRating(e.target.value)
        console.log(rating)
    }
    const onReleaseChanged = (e: { target: { value: string; }; }) => {
        const year = new Date(e.target.value).getFullYear().toString();
        setRelease(year)
    }
    const onRuntimeChanged = (e: { target: { value: SetStateAction<string>; }; }) => {
        setRuntime(e.target.value)
        console.log(runtime)
    }
    const onThumbnailChanged = (e: { target: { value: SetStateAction<string>; }; }) => {
        setThumbnail(e.target.value)
        console.log()
    }
    const onTitleChanged = (e: { target: { value: SetStateAction<string>; }; }) => {
        setTitle(e.target.value)
        console.log(title)
    }
    const onDescriptionChanged = (e: { target: { value: SetStateAction<string>; }; }) => {
        setDescription(e.target.value)
        console.log(description)
    }

    // const onSubmit = () => console.log(release)
    const onSubmit = async () => {
        if (canSave) {
            try {
                await addNewData({
                    id: nanoid(),
                    genre,
                    url,
                    rating,
                    release_date,
                    runtime,
                    thumbnail,
                    title,
                    description,
                }).unwrap()
                // dispatch(
                    //     movieAdded({
                        //         id: nanoid(),
            //         genre,
            //         url,
            //         rating,
            //         release,
            //         runtime,
            //         thumbnail,
            //         title,
            //         description,
            //     })
            // );
                setGenre('');
                setUrl('');
                setRating('');
                setRelease('');
                setRuntime('');
                setThumbnail('');
                setTitle('');
                setDescription('');
            } catch (error) {
                console.warn('Failed to add movie: ', error)
            }
        }
    }

    return (
        <form action=''>
            <h2 className={classes['movie-form__title']}>Add movie</h2>
            <div className={classes['movie-form__fieldset']}>
                <div className={classes['movie-form__group']}>
                    <label htmlFor='movieTitle'>Title</label>
                    <input type='text' id='movieTitle' name='movieTitle' onChange={onTitleChanged} />
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
                    <input type='text' id='movieRuntime' name='movieRuntime' onChange={onRuntimeChanged}/>
                </div>
                <div className={classes['movie-form__group']}>
                    <label htmlFor='movieThumbnail'>Poster image URL</label>
                    <input type='text' id='movieThumbnail' name='movieThumbnail' onChange={onThumbnailChanged}/>
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
                    <Button type='button' onClick={onSubmit}>submit</Button>
                </div>
            </div>
        </form>
    );
}

export default AddMovieForm