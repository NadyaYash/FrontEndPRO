import './App.css';
import { Routes, Route } from 'react-router-dom'
import ProductPage from './Pages/ProductPage';
import CartPage from './Pages/CartPage';
import NavMenu from './Components/NavMenu';
import ProductDescriptionPage from './Pages/ProductDescriptionPage';
import CategoriesPage from './Pages/CategoriesPage';
import SingleCategoryPage from './Pages/SingleCategoryPage';


function App() {
  return (
    <div>
      <NavMenu />
      <Routes>
        <Route path='/' element={<ProductPage />} />
        <Route path='cart' element={<CartPage />} />
        <Route path='/product/:productId' element={<ProductDescriptionPage />} />
        <Route path='/categories' element={<CategoriesPage />} />
        <Route path='/categories/:el' element={<SingleCategoryPage />} />
      </Routes>
    </div>
  );
}

export default App;
