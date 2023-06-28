import './App.css';
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import CategoriesPage from './pages/CategoriesPage';
import AllItemsPage from './pages/AllItemsPage';
import SingleItemPage from './pages/SingleItemPage';
import CartPage from './pages/CartPage';
import NotFoundPage from './pages/NotFoundPage';
import Nav from './Components/NavBar';
import SalesPage from './pages/SalesPage';
import Footer from './Components/Footer';
import SingleCategoryPage from './pages/SingleCategoryPage';

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='categories' element={<CategoriesPage />} />
        <Route path='all_items' element={<AllItemsPage />} />
        <Route path='sales' element={<SalesPage />} />
        <Route path='/product/:productId' element={<SingleItemPage />} />
        <Route path='cart' element={<CartPage />} />
        <Route path='*' element={<NotFoundPage />} />
        <Route path='/category/:categoryId' element={<SingleCategoryPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
