import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import IndexPage from './pages/IndexPage'
import MoviePage from './pages/MoviePage';
import './App.css';

function App() {
    return (
        <Routes>
            <Route path='/' element={<IndexPage />}></Route>
            <Route path='/login' element={<LoginPage />}></Route>
            <Route path='/movies/:title' element={<MoviePage />}></Route>
        </Routes>
    );
}

export default App;
