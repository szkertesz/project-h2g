import { useAppDispatch } from '../app/hooks';
import { addMovie } from '../features/movies/moviesSlice';
import { SetStateAction, useState } from 'react';

import classes from './AddMovieForm.module.scss';
import modalClasses from './Modal.module.scss';
import Button from '../ui/Button';
import CustomSelect from './CustomSelect';
import Modal from '../components/Modal';
import IconCheck from '../assets/images/icon-check.svg';
// RTKQ code
// import { useAddNewDataMutation } from '../features/api/apiSlice';

interface Props {}

type Genres = string[];

const AddMovieForm: React.FC<Props> = () => {
    const [genres, setGenre] = useState<Genres>([]);
    const [vote_average, setRating] = useState(1);
    const [release_date, setRelease] = useState('');
    const [runtime, setRuntime] = useState(1);
    const [poster_path, setThumbnail] = useState('');
    const [title, setTitle] = useState('');
    const [overview, setDescription] = useState('');

    const [addRequestStatus, setAddRequestStatus] = useState('idle');
    const [isOpen, setIsOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalContent, setModalContent] = useState('');
    const [modalIcon, setModalIcon] = useState(false);
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

    const onGenreChanged = (e: [{ value: string; label: string }]) => {
        const genresData = e.map((genre) => genre.value);
        console.log(genresData);
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
                setModalTitle('Congratulations!');
                setModalIcon(true)
                setModalContent(
                    `The movie has been added to database successfully`
                );
                setIsOpen(true);
                setGenre([]);
                setRating(0);
                setRelease('');
                setRuntime(0);
                setThumbnail('');
                setTitle('');
                setDescription('');
            } catch (err) {
                setModalTitle('Failure!');
                setModalContent(
                    `The movie has been failed to add to database :(`
                );
                setIsOpen(true);
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
        } else {
            setModalTitle('Can\'t save movie');
            setModalContent(`Please, fill all the required fields`);
            setIsOpen(true);
        }
    };

    return (
        <>
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
            <Modal
                handleClose={() => setIsOpen(false)}
                isOpen={isOpen}
                size={'medium'}
                title={modalTitle}
            >
                {modalIcon ? 
                    <img
                        src={IconCheck}
                        alt=''
                        className={modalClasses['modal__icon']}
                    /> : ''
                }
                <p>{modalContent}</p>
            </Modal>
        </>
    );
};

export default AddMovieForm;
