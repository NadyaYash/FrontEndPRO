import {Routes, Route} from 'react-router-dom'
import React from 'react';
import MainPage from './pages/MainPage';
import ProductsPage from './pages/ProductsPage';
import UsersPage from './pages/UsersPage';




function App() {
    return (
        
      <div>
        
        <Routes>
        <Route path='/' element={<MainPage/>} />
        <Route path='products' element={<ProductsPage/>} />
        <Route path='users' element={<UsersPage/>}/>
      </Routes>
      </div>
    );
  }
  
  export default App;