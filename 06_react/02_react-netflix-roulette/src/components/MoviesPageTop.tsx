import Container from '../ui/Container';
import Button from '../ui/Button';
import classes from './MoviesPageTop.module.scss';
import logo from '../assets/images/logo_netflixroulette.svg';

function HeaderMovies() {
    return (
        <header className={classes.header}>
            <Container>
                <div className={classes.header__top}>
                    <a href='/' className={classes.header__logo}>
                        <img src={logo} alt='logo' />
                    </a>
                    <button className={classes.header__button}>
                        + add movie
                    </button>
                </div>
                <div className={classes.header__content}>
                    <h1 className={classes.header__title}>FIND YOUR MOViE</h1>
                    <form action='' className={classes.header__form}>
                        <input
                            type='search'
                            className={classes.header__search}
                            placeholder='What do you want to watch?'
                        />
                        <Button type={'submit'} isGhost={false}>
                            search
                        </Button>
                    </form>
                </div>
            </Container>
        </header>
    );
}

export default HeaderMovies;
