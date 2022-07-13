import classes from './AddMovieForm.module.scss';
import Button from '../ui/Button';
import CustomSelect from './CustomSelect';
import { SetStateAction, useState } from 'react';
// RTKQ code
// import { useAddNewDataMutation } from '../features/api/apiSlice';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { addMovie } from '../features/movies/moviesSlice';
import { nanoid } from '@reduxjs/toolkit';

interface Props {}
type Genres = string[]
const AddMovieForm: React.FC<Props> = () => {
    const [genres, setGenre] = useState<Genres>([]);
    const [vote_average, setRating] = useState(1);
    const [release_date, setRelease] = useState('');
    const [runtime, setRuntime] = useState(1);
    const [poster_path, setThumbnail] = useState('');
    const [title, setTitle] = useState('');
    const [overview, setDescription] = useState('');
    const [addRequestStatus, setAddRequestStatus] = useState('idle');
    // RTKQ code
    // const [addNewData, { isLoading }] = useAddNewDataMutation()
    const dispatch = useAppDispatch();
    // RTKQ code
    // const canSave = [
    //     genre,
    //     url,
    //     rating,
    //     release_date,
    //     runtime,
    //     thumbnail,
    //     title,
    //     description,
    // ].every(Boolean) && !isLoading
    const canSave =
        [
            genres,
            vote_average,
            release_date,
            runtime,
            poster_path,
            title,
            overview,
        ].every(Boolean) && addRequestStatus === 'idle';

    const onGenreChanged = (e: [{ value: string, label: string }]) => {
        const genresData = e.map(genre => genre.value);
        console.log(genresData)
        setGenre(genresData);
    };
    const onRatingChanged = (e: {
        target: { value: SetStateAction<string> };
    }) => {
        setRating(Number(e.target.value));
    };
    const onReleaseChanged = (e: { target: { value: string } }) => {
        const year = new Date(e.target.value).getFullYear().toString();
        setRelease(year);
    };
    const onRuntimeChanged = (e: {
        target: { value: SetStateAction<string> };
    }) => {
        setRuntime(Number(e.target.value));
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

    const onSubmit = async () => {
        if (canSave) {
            try {
                setAddRequestStatus('pending');
                await dispatch(
                    addMovie({
                        title,
                        tagline: 'tagline',
                        vote_average,
                        vote_count: 0,
                        release_date,
                        poster_path,
                        overview,
                        budget: 0,
                        genres,
                        runtime,
                    })
                ).unwrap();
                //   "title": "La La Land",
                //   "tagline": "Here's to the fools who dream.",
                //   "vote_average": 7.9,
                //   "vote_count": 6782,
                //   "release_date": "2016-12-29",
                //   "poster_path": "https://image.tmdb.org/t/p/w500/ylXCdC106IKiarftHkcacasaAcb.jpg",
                //   "overview": "Mia, an aspiring actress, serves lattes to movie stars in between auditions and Sebastian, a jazz musician, scrapes by playing cocktail party gigs in dingy bars, but as success mounts they are faced with decisions that begin to fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain in each other threaten to rip them apart.",
                //   "budget": 30000000,
                //   "revenue": 445435700,
                //   "runtime": 128,
                //   "genres": [
                //     "Comedy",
                //     "Drama",
                //     "Romance"
                //   ]
                setGenre([]);
                setRating(0);
                setRelease('');
                setRuntime(0);
                setThumbnail('');
                setTitle('');
                setDescription('');
            } catch (err) {
                console.error('Failed to save the new movie: ', err);
            } finally {
                setAddRequestStatus('idle');
            }
            // RTKQ code
            // try {
            //     await addNewData({
            //         id: nanoid(),
            //         genre,
            //         url,
            //         rating,
            //         release_date,
            //         runtime,
            //         thumbnail,
            //         title,
            //         description,
            //     }).unwrap()
            // RTKQ code
            // } catch (error) {
            //     console.warn('Failed to add movie: ', error)
            // }
        }
    };

    return (
        <form action=''>
            <h2 className={classes['movie-form__title']}>Add movie</h2>
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
                            { value: 'fantasy', label: 'Fantasy' },
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

export default AddMovieForm;
