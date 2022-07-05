import { Route, Routes } from 'react-router-dom';
import { Movie } from './interfaces/Movie';
import { useGetDataQuery } from './features/api/apiSlice';
import './App.css';
import HomeAndMovieDetailsPageLayout from './pages/HomeAndMovieDetailsPageLayout';
import HomePageHeader from './pages/home-page/HomePageHeader';
import MovieDetailsPageHeader from './pages/movie-details-page/MovieDetailsPageHeader';
import LoginPage from './pages/LoginPage';

/* Temporary pages for component demos */
import AddMovieFormPage from './pages/AddMovieFormPage';
import ModalPage from './pages/ModalPage';

function App() {
    const { data } = useGetDataQuery();
    const movieData = data?.movies as Movie[];
    // const movieIds = movieData?.map((movie: Movie, index: number) => movie.id)
    // console.log(movieIds)
    console.warn(movieData);
    return (
        <>
            <Routes>
                <Route path='*' element={<HomeAndMovieDetailsPageLayout />}>
                    <Route index element={<HomePageHeader />}></Route>
                    <Route path='movies' element={<HomePageHeader />}></Route>
                    <Route
                        path='movie/*'
                        element={<MovieDetailsPageHeader />}
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
