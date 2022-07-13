import { Route, Routes } from 'react-router-dom';
import HomeAndMovieDetailsPageLayout from './pages/HomeAndMovieDetailsPageLayout';
import HomePageHeader from './pages/home-page/HomePageHeader';
import MovieDetailsPageTop from './pages/movie-details-page/MovieDetailsPageTop';
import LoginPage from './pages/LoginPage';
import './App.css';


/* Temporary pages for component demos */
import ModalPage from './pages/ModalPage';
import EditMovieFormPage from './pages/EditMovieFormPage';

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
                <Route path='edit-movie' element={<EditMovieFormPage />}></Route>
            </Routes>
        </>
    );
}

export default App;
