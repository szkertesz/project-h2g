import React, { useState } from "react";

function GenreSorter() {
    const [selectedCategory, setSelectedCategory] = useState<string>()

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        console.log(event.target.value);
        setSelectedCategory(event.target.value)
    }

    return (
        <div>
            <label htmlFor='sortingCategories'>sort by</label>
            <select
                name='sortingCategories'
                id='sortingCategories'
                onChange={handleSelectChange}
                defaultValue={'a'}
            >
                <option value='a'>a</option>
                <option value='b'>b</option>
                <option value='c'>c</option>
            </select>
        </div>
    );
}

export default GenreSorter