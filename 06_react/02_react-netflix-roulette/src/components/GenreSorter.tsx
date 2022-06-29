import React, { useState } from "react";
import classes from './GenreSorter.module.scss';

function GenreSorter() {
    const [selectedCategory, setSelectedCategory] = useState<string>()

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        console.log(event.target.value);
        setSelectedCategory(event.target.value)
    }

    return (
        <div className={classes['genre-sorter']}>
            <label htmlFor='sortingCategories'>sort by</label>
            <select
                name='sortingCategories'
                id='sortingCategories'
                onChange={handleSelectChange}
                defaultValue={'release date'}
            >
                <option value='release date'>release date</option>
                <option value='b'>b</option>
                <option value='c'>c</option>
            </select>
        </div>
    );
}

export default GenreSorter