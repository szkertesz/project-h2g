import Container from '../../ui/Container';
import classes from './MovieDetailsPageHeader.module.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo_netflixroulette.svg';
import searchIcon from '../../assets/images/icon-search.svg';

function MovieDetailsPageHeader() {
    return (
        <header className={classes.header}>
            <Container>
                <div className={classes['header__inner']}>
                    <Link to='/'>
                        <img src={logo} alt='logo' />
                    </Link>
                    <Link to='/' className={classes['header__search']}>
                        <img src={searchIcon} alt='search icon' />
                    </Link>
                </div>
            </Container>
        </header>
    );
}

export default MovieDetailsPageHeader
