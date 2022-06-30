import classes from './AddMovieForm.module.scss'
import Select, {
    components,
    DropdownIndicatorProps,
} from 'react-select';
import SelectOption from './SelectOption';
import Button from '../ui/Button';
import arrowIcon from '../assets/images/icon-arrow.svg'

interface Props {}

const AddMovieForm: React.FC<Props> = ({}) => {
    const selectOptions = [
        { value: 'crime', label: 'Crime' },
        { value: 'documentary', label: 'Documentary' },
        { value: 'horror', label: 'Horror' },
        { value: 'comedy', label: 'Comedy' },
    ];
    const DropdownIndicator = (
        props: DropdownIndicatorProps
    ) => {
        return (
            <components.DropdownIndicator {...props}>
                <img src={arrowIcon} alt="" />
            </components.DropdownIndicator>
        );
    };
    const IndicatorSeparator = () => {
        return null;
    };
    const backgroundColorInput = String(
        getComputedStyle(document.documentElement).getPropertyValue(
            '--color-bg-input'
        )
    );
    const colorAccent = String(
        getComputedStyle(document.documentElement).getPropertyValue(
            '--color-accent'
        )
    );
    const colorLight = String(
        getComputedStyle(document.documentElement).getPropertyValue(
            '--color-light'
        )
    );
    const heightInput = String(
        getComputedStyle(document.documentElement).getPropertyValue(
            '--height-input'
        )
    );
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
                    {/* <input type='text' id='movieGenre' name='movieGenre' /> */}
                    <Select
                        options={selectOptions}
                        isMulti
                        isClearable={false}
                        closeMenuOnSelect={false}
                        hideSelectedOptions={false}
                        components={{
                            Option: SelectOption,
                            DropdownIndicator,
                            IndicatorSeparator,
                        }}
                        styles={{
                            multiValue: (base) => ({
                                ...base,
                                border: `none`,
                                backgroundColor: 'transparent',
                                color: colorAccent,
                            }),
                            multiValueLabel: (base) => ({
                                ...base,
                                border: `none`,
                                backgroundColor: 'transparent',
                                color: colorLight,
                            }),
                            control: (base) => ({
                                ...base,
                                height: heightInput,
                                border: `none`,
                                backgroundColor: backgroundColorInput,
                                borderRadius: 4,
                                color: 'white',
                            }),
                            container: (base) => ({
                                ...base,
                                height: heightInput,
                                backgroundColor: 'transparent',
                                padding: 0,
                            }),
                            singleValue: (base) => ({
                                ...base,
                                color: 'green',
                            }),
                            valueContainer: (base) => ({
                                ...base,
                                display: 'flex',
                                alignItems: 'center',
                                height: heightInput,
                                background: backgroundColorInput,
                                color: 'purple',
                                borderRadius: '4px',
                                paddingTop: '0',
                            }),
                            option: (base) => ({
                                ...base,
                                backgroundColor: backgroundColorInput,
                                color: colorLight,
                                display: 'flex',
                                alignItems: 'center',
                                height: '2rem',
                            }),
                            menu: (base) => ({
                                ...base,
                                backgroundColor: backgroundColorInput,
                            }),
                            input: (base) => ({
                                ...base,
                                height: heightInput,
                                margin: '0',
                                padding: '0',
                            }),
                        }}
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