import classes from './AddMovieForm.module.scss'
import Button from '../ui/Button';
import CustomSelect from './CustomSelect';

interface Props {}

const AddMovieForm: React.FC<Props> = ({}) => {
    return (
        <form action=''>
            <h2 className={classes['movie-form__title']}>Add movie</h2>
            <div className={classes['movie-form__fieldset']}>
                <div className={classes['movie-form__group']}>
                    <label htmlFor='movieTitle'>Title</label>
                    <input type='text' id='movieTitle' name='movieTitle' />
                </div>
                <div className={classes['movie-form__group']}>
                    <label htmlFor='movieRelease'>Release date</label>
                    <input
                        type='date'
                        id='movieRelease'
                        name='movieRelease'
                        placeholder='Select Date'
                    />
                </div>
                <div className={classes['movie-form__group']}>
                    <label htmlFor='movieUrl'>Movie URL</label>
                    <input
                        type='text'
                        id='movieUrl'
                        name='movieUrl'
                        placeholder='https://'
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
                    />
                </div>
                <div className={classes['movie-form__group']}>
                    <label htmlFor='movieRuntime'>Runtime</label>
                    <input type='text' id='movieRuntime' name='movieRuntime' />
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