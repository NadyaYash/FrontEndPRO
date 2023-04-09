import './App.css';
import {Routes, Route} from 'react-router-dom'
import MainPage from './pages/MainPage';
import Nav from './components/Nav';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import UsersPage from './pages/UsersPage';

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<MainPage/>} />
        <Route path='about' element={<AboutPage/>} />
        <Route path='products' element={<ProductsPage/>} />
        <Route path= 'users' element={<UsersPage />}/>
      </Routes>
    </div>
  );
}

export default App;
