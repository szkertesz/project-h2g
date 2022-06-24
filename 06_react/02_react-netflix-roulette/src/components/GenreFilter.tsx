import React, { useEffect } from "react";

function GenreFilter() {
    const [value, setValue] = React.useState('all')
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
   }
    return (
        <fieldset>
            <legend></legend>
            <div>
                <input
                    type='radio'
                    name='genre'
                    id='all'
                    value='all'
                    checked={value === 'all'}
                    onChange={handleChange}
                />
                <label htmlFor='all'>All</label>
            </div>
            <div>
                <input
                    type='radio'
                    name='genre'
                    id='documentary'
                    value='documentary'
                    checked={value === 'documentary'}
                    onChange={handleChange}
                />
                <label htmlFor='documentary'>documentary</label>
            </div>
            <div>
                <input
                    type='radio'
                    name='genre'
                    id='comedy'
                    value='comedy'
                    checked={value === 'comedy'}
                    onChange={handleChange}
                />
                <label htmlFor='comedy'>comedy</label>
            </div>
            <div>
                <input
                    type='radio'
                    name='genre'
                    id='horror'
                    value='horror'
                    checked={value === 'horror'}
                    onChange={handleChange}
                />
                <label htmlFor='horror'>horror</label>
            </div>
            <div>
                <input
                    type='radio'
                    name='genre'
                    id='crime'
                    value='crime'
                    checked={value === 'crime'}
                    onChange={handleChange}
                />
                <label htmlFor='crime'>crime</label>
            </div>
        </fieldset>
    );
}

export default GenreFilter;
