import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { setSearchedMovie } from '../../features/movies/moviesSlice';

import Container from '../../ui/Container';
import Button from '../../ui/Button';
import classes from './HomePageHeader.module.scss';
import logo from '../../assets/images/logo_netflixroulette.svg';
import Modal from '../../components/Modal';
import AddMovieForm from '../../components/AddMovieForm';

function HeaderMovies() {
    const dispatch = useAppDispatch()
    const [isOpen, setIsOpen] = useState(false);
    const [movieToSearch, setMovieToSearch] = useState<string>('');

    const searchInputChange = (
        event: React.FormEvent<HTMLInputElement>
    ) => {
        setMovieToSearch(event.currentTarget.value);
        // dispatch(setSearchedMovie(movieToSearch));
    };

    const searchMovie = () => {
        dispatch(setSearchedMovie(movieToSearch));
    };

    return (
        <header className={classes.header}>
            <Container>
                <div className={classes.header__top}>
                    <Link to='/' className={classes.header__logo}>
                        <img src={logo} alt='logo' />
                    </Link>
                    <button
                        onClick={() => setIsOpen(true)}
                        className={classes.header__button}
                    >
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
                            onChange={searchInputChange}
                        />
                        <Button type={'button'} isGhost={false} onClick={searchMovie}>
                            search
                        </Button>
                    </form>
                </div>
            </Container>
            <Modal
                handleClose={() => setIsOpen(false)}
                isOpen={isOpen}
                size={'large'}
            >
                <AddMovieForm />
            </Modal>
        </header>
    );
}

export default HeaderMovies;
