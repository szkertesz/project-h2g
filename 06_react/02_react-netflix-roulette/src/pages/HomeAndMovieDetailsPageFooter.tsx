import Container from '../ui/Container';
import Logo from '../assets/images/logo_netflixroulette.svg';
import classes from './HomeAndMovieDetailsPageFooter.module.scss';

function HomeAndMovieDetailsPageFooter() {
    return (
        <footer className={classes.footer}>
            <Container className={classes['footer__inner']}>
                <img src={Logo} alt='logo' className={classes['footer__logo']} />
            </Container>
        </footer>
    );
}

export default HomeAndMovieDetailsPageFooter;
