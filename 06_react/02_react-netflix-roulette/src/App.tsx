import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import IndexPage from './pages/IndexPage'
import './App.css';

function App() {
    return (
        <>
        <Routes>
            <Route path='/' element={<IndexPage />}></Route>
            <Route path='/login' element={<LoginPage />}></Route>
        </Routes>
        </>
    );
}

export default App;
