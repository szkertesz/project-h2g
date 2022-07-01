import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import Layout from './ui/Layout'
import MoviesPage from './pages/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import './App.css';

function App() {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<MoviesPage />}></Route>
                <Route path='movies' element={<MoviesPage />}></Route>
                <Route path='movie' element={<MovieDetailsPage />}></Route>
            </Route>
            <Route path='/login' element={<LoginPage />}></Route>
        </Routes>
    );
}

export default App;
