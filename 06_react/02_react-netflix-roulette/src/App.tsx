import { Route, Routes } from 'react-router-dom';
import HomeAndMovieDetailsPageLayout from './pages/HomeAndMovieDetailsPageLayout';
import HomePageHeader from './pages/home-page/HomePageHeader';
import MovieDetailsPageTop from './pages/movie-details-page/MovieDetailsPageTop';
import LoginPage from './pages/LoginPage';
import './App.css';

/* Temporary pages for component demos */
import AddMovieFormPage from './pages/AddMovieFormPage';
import ModalPage from './pages/ModalPage';

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<HomeAndMovieDetailsPageLayout />}>
                    <Route index element={<HomePageHeader />}></Route>
                    <Route path='movies' element={<HomePageHeader />}></Route>
                    <Route
                        path='movie/*'
                        element={<MovieDetailsPageTop />}
                    ></Route>
                </Route>
                <Route path='/login' element={<LoginPage />}></Route>
                {/* Temporary pages for component demos */}
                <Route path='modal' element={<ModalPage />}></Route>
                <Route path='add-movie' element={<AddMovieFormPage />}></Route>
            </Routes>
        </>
    );
}

export default App;
