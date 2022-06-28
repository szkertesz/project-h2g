import Footer from '../components/Footer';
import Container from '../ui/Container';
import Genres from '../components/Genres';
import MovieList from '../components/MovieList';
import { Outlet } from 'react-router-dom';

import { useState } from 'react';
import Modal from '../components/Modal';

function Layout() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <Outlet />
            <main>
                <Container>
                    <button onClick={() => setIsOpen(true)}>modal</button>
                    <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
                        <p>This is Modal Content!</p>
                    </Modal>
                    <Genres />
                    <MovieList />
                </Container>
            </main>
            <Footer />
        </>
    );
}

export default Layout;
