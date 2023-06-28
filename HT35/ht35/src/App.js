import {Route, Routes} from 'react-router-dom'
import './App.css';
import CategoriesPage from './Pages/CategoriesPage';
import ProductsPage from './Pages/ProductsPage';
import SingleProductPage from './Pages/SingleProductPage';


function App() {
  return (
    <div>
      <Routes>
      <Route path='/' element={<CategoriesPage/>}/>
      <Route path='/products/:category' element={<ProductsPage/>}/>
      <Route path='/product/:productId/' element={<SingleProductPage/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
