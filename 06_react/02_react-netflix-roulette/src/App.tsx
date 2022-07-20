import { Route, Routes } from 'react-router-dom';
import HomeAndMovieDetailsPageLayout from './pages/HomeAndMovieDetailsPageLayout';
import HomePageHeader from './pages/home-page/HomePageHeader';
import MovieDetailsPageTop from './pages/movie-details-page/MovieDetailsPageTop';
import LoginPage from './pages/LoginPage';
import './App.css';

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<HomeAndMovieDetailsPageLayout />}>
                    <Route path='movies' element={<HomePageHeader />}></Route>
                    <Route
                        path='movie/*'
                        element={<MovieDetailsPageTop />}
                    ></Route>
                </Route>
                <Route index element={<LoginPage />}></Route>
                <Route path='/login' element={<LoginPage />}></Route>
            </Routes>
        </>
    );
}

export default App;
