import classes from './AddMovieForm.module.scss'
import Button from '../ui/Button';
import CustomSelect from './CustomSelect';
import { SetStateAction, useState } from 'react'

interface Props {}

const AddMovieForm: React.FC<Props> = ({}) => {
    const [genre, setGenre] = useState('')
    const [id, setId] = useState('')
    const [url, setUrl] = useState('')
    const [rating, setRating] = useState('')
    const [release, setRelease] = useState('')
    const [runtime, setRuntime] = useState('')
    const [thumbnail, setThumbnail] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const onGenreChanged = (e: { target: { value: SetStateAction<string>; }; }) => setGenre(e.target.value)
    const onIdChanged = (e: { target: { value: SetStateAction<string>; }; }) => setId(e.target.value)
    const onUrlChanged = (e: { target: { value: SetStateAction<string>; }; }) => setUrl(e.target.value)
    const onRatingChanged = (e: { target: { value: SetStateAction<string>; }; }) => setRating(e.target.value)
    const onReleaseChanged = (e: { target: { value: SetStateAction<string>; }; }) => setRelease(e.target.value)
    const onRuntimeChanged = (e: { target: { value: SetStateAction<string>; }; }) => setRuntime(e.target.value)
    const onThumbnailChanged = (e: { target: { value: SetStateAction<string>; }; }) => setThumbnail(e.target.value)
    const onTitleChanged = (e: { target: { value: SetStateAction<string>; }; }) => setTitle(e.target.value)
    const onDescriptionChanged = (e: { target: { value: SetStateAction<string>; }; }) => setDescription(e.target.value)

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
                <div
                    className={`
                        ${classes['movie-form__group']} ${classes['movie-form__group--full']}
                    `}
                >
                    <label htmlFor='movieOverview'>Overview</label>
                    <textarea
                        id='movieOverview'
                        name='movieOverview'
                        rows={5}
                        onChange={onDescriptionChanged}
                    ></textarea>
                </div>
                <div className={classes['movie-form__actions']}>
                    <Button isGhost={true}>reset</Button>
                    <Button type='submit'>submit</Button>
                </div>
            </div>
        </form>
    );
}

export default AddMovieForm