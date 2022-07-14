import React, { useEffect, useState } from "react";
import classes from './GenreSorter.module.scss';
import { filterMoviesByGenre, sortMoviesByCriterion } from '../features/movies/moviesSlice';
import { useAppDispatch } from "../app/hooks";

function GenreSorter() {
    const dispatch = useAppDispatch();
    const [selectedCriterion, setSelectedCriterion] = useState<string>('')
    const [direction, setDirection] = useState<string>('')
    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCriterion(event.target.value)
    }
    const handleDirectionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDirection(event.target.value)
    }
    useEffect(() => {
        dispatch(sortMoviesByCriterion({selectedCriterion, direction}));
    }, [selectedCriterion, direction, dispatch]);
    return (
        <div className={classes['genre-sorter']}>
            <label htmlFor='sortingCriteria'>sort by</label>
            <select
                name='sortingCriteria'
                id='sortingCriteria'
                onChange={handleSelectChange}
                defaultValue={'title'}
            >
                <option value='id'>ID</option>
                <option value='title' selected>
                    Title
                </option>
                <option value='vote_average'>Rating</option>
                <option value='release_date'>Release date</option>
                <option value='runtime'>Duration</option>
            </select>
            <fieldset>
                <input
                    type='radio'
                    id='asc'
                    name='direction'
                    value='asc'
                    onChange={handleDirectionChange}
                />
                <label htmlFor='asc'>ascending</label>
                <input
                    type='radio'
                    id='desc'
                    name='direction'
                    value='desc'
                    onChange={handleDirectionChange}
                />
                <label htmlFor='desc'>descending</label>
            </fieldset>
        </div>
    );
}

export default GenreSorter