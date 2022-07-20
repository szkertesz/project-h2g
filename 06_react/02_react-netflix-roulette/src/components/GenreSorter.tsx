import React, { useEffect, useState } from "react";
import classes from './GenreSorter.module.scss';
import { useAppDispatch } from "../app/hooks";
import { setSortParams } from "../features/movies/moviesSlice";

function GenreSorter() {
    const dispatch = useAppDispatch();
    const [selectedCriterion, setSelectedCriterion] = useState<string>('releaseDate')
    const [order, setOrder] = useState<string>('ascending')
    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCriterion(event.target.value)
    }
    const handleorderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setOrder(event.target.value)
    }
    useEffect(() => {
        dispatch(setSortParams({criterion: selectedCriterion, order: order}))
    }, [selectedCriterion, order, dispatch]);
    return (
        <div className={classes['genre-sorter']}>
            <label htmlFor='sortingCriteria'>sort by</label>
            <select
                name='sortingCriteria'
                id='sortingCriteria'
                onChange={handleSelectChange}
                defaultValue={'releaseDate'}
            >
                <option value='releaseDate'>Release date</option>
                <option value='rating'>Rating</option>
                <option value='runtime'>Duration</option>
            </select>
            <fieldset>
                <input
                    type='radio'
                    id='asc'
                    name='order'
                    value='ascending'
                    onChange={handleorderChange}
                    defaultChecked
                />
                <label htmlFor='asc' title='ascending order'>
                    &uarr;
                </label>
                <input
                    type='radio'
                    id='desc'
                    name='order'
                    value='descending'
                    onChange={handleorderChange}
                />
                <label htmlFor='desc' title='descending order'>
                    &darr;
                </label>
            </fieldset>
        </div>
    );
}

export default GenreSorter