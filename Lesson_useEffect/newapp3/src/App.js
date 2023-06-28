import './App.css';
import {Routes, Route} from 'react-router-dom'
import CategoriesPage from './Pages/CategoriesPage'
import ProductsPage from './Pages/ProductsPage';

function App() {
  return (
    <div>
     <Routes>
     <Route path='/' element={<CategoriesPage/>} />
                <Route path='/products/:category_id' element={<ProductsPage/>} /> */
      </Routes>       
    </div>
  );
}

export default App;
