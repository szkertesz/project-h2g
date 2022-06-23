function GenreSorter() {
    return (
        <div>
            <label htmlFor='sortingCategories'>sort by</label>
            <select name='sortingCategories' id='sortingCategories'>
                <option value='a'>a</option>
                <option value='b'>b</option>
                <option value='c'>c</option>
            </select>
        </div>
    );
}

export default GenreSorter