import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { filterMovies } from "../features/movies/moviesSlice";
import classes from './GenreFilter.module.scss';


function GenreFilter() {
    const dispatch = useDispatch()
    const [value, setValue] = React.useState<string>()
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }
    useEffect(() => {
        dispatch(filterMovies(value));
    }, [value, dispatch]);
    return (
        <fieldset className={classes['genre-filter']}>
            <legend className='visually-hidden'>Filter Movies by Genre</legend>
            <div className={classes['genre-filter__group']}>
                <input
                    type='radio'
                    name='genre'
                    id='all'
                    value='all'
                    checked={value === 'all'}
                    onChange={handleChange}
                    className='visually-hidden'
                />
                <label htmlFor='all'>All</label>
            </div>
            <div className={classes['genre-filter__group']}>
                <input
                    type='radio'
                    name='genre'
                    id='documentary'
                    value='documentary'
                    checked={value === 'documentary'}
                    onChange={handleChange}
                    className='visually-hidden'
                />
                <label htmlFor='documentary'>documentary</label>
            </div>
            <div className={classes['genre-filter__group']}>
                <input
                    type='radio'
                    name='genre'
                    id='comedy'
                    value='comedy'
                    checked={value === 'comedy'}
                    onChange={handleChange}
                    className='visually-hidden'
                />
                <label htmlFor='comedy'>comedy</label>
            </div>
            <div className={classes['genre-filter__group']}>
                <input
                    type='radio'
                    name='genre'
                    id='horror'
                    value='horror'
                    checked={value === 'horror'}
                    onChange={handleChange}
                    className='visually-hidden'
                />
                <label htmlFor='horror'>horror</label>
            </div>
            <div className={classes['genre-filter__group']}>
                <input
                    type='radio'
                    name='genre'
                    id='crime'
                    value='crime'
                    checked={value === 'crime'}
                    onChange={handleChange}
                    className='visually-hidden'
                />
                <label htmlFor='crime'>crime</label>
            </div>
            <div className={classes['genre-filter__group']}>
                <input
                    type='radio'
                    name='genre'
                    id='fantasy'
                    value='fantasy'
                    checked={value === 'fantasy'}
                    onChange={handleChange}
                    className='visually-hidden'
                />
                <label htmlFor='fantasy'>fantasy</label>
            </div>
        </fieldset>
    );
}

export default GenreFilter;
