import './App.css';
import {Routes, Route} from 'react-router-dom'
import Main from './pages/Main';
import AboutUs from './pages/AboutUs';
import NotFound from './pages/NotFound';


function App() {
  return (
    <div>

      
      
      <Routes>
      
      <Route path='/' element={<Main />}/>
      
      <Route path= 'about_us' element= {<AboutUs/>}/>

      <Route path='*' element={<NotFound />}/>

       
      </Routes>

     

    </div>
  );
}

export default App;
