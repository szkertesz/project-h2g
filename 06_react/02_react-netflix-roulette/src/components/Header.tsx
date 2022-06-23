function Header() {
    return (
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
    );
}

export default Header
