import './App.css';
import {Routes, Route} from 'react-router-dom'
import MainPage from './Pages/MainPage';
import UsersPage from './Pages/UsersPage';
import ProductsPage from './Pages/ProductsPage';
import ProductsByCategoryPage from './Pages/ProductsByCategoryPage';
import ProductDescriptionPage from './Pages/ProductDescriptionPage';
import UsersCardsPage from './Pages/UsersCardsPage';
import UserDescriptionPage from './Pages/UserDescriptionPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='users' element={<UsersPage/>}/>
        <Route path='products' element={<ProductsPage/>}/>
        <Route path='/products/:category_id' element={<ProductsByCategoryPage />} />
        <Route path='/products/:category_id/product/:description_id' element={<ProductDescriptionPage/>}/>
        <Route path='/users/:role' element={<UsersCardsPage/>}/>
                <Route path='/users/:role/:user_id' element={<UserDescriptionPage/>}/>
        

      </Routes>
    </div>
  );
}

export default App;
