function IndexPage() {
    return (
        <>
            <header>
                <div>
                    <a href='/'>
                        <img src='' alt='logo' />
                    </a>
                    <button>+ add movie</button>
                </div>
                <h1>FIND YOUR MOViE</h1>
                <form action=''>
                    <input type='search' />
                    <button type='submit'>search</button>
                </form>
            </header>
            <main>
                <section>
                    <div className='genres'>
                        <ul>
                            <li>
                                <button>all</button>
                            </li>
                            <li>
                                <button>documentary</button>
                            </li>
                            <li>
                                <button>comedy</button>
                            </li>
                            <li>
                                <button>horror</button>
                            </li>
                            <li>
                                <button>crime</button>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <label htmlFor='sortingCategories'>sort by</label>
                        <select name='sortingCategories' id='sortingCategories'>
                            <option value='a'>a</option>
                            <option value='b'>b</option>
                            <option value='c'>c</option>
                        </select>
                    </div>
                </section>
                <section>
                    <h2>results</h2>
                    <p>n movies found</p>
                    <article>
                        <div>
                            <div>
                                <h3>Title</h3>
                                <ul>
                                    <li>genre x</li>
                                    <li>genre y</li>
                                    <li>genre z</li>
                                </ul>
                            </div>
                            <time dateTime='year'>year</time>
                        </div>
                        <img src='' alt='' />
                    </article>
                </section>
            </main>
            <footer>
                <img src='' alt='logo' />
            </footer>
        </>
    );
}

export default IndexPage;
