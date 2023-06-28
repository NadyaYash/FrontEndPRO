
import './App.css';
import AddProductForm from './components/AddProductForm';
import AddUserForm from './components/AddUserForm';
import ProductContainer from './components/ProductsContainer';
import UsersContainer from './components/UsersContainer';

function App() {
  return (
    <div>
      <AddUserForm/>
        <UsersContainer/>
        <br></br>
        <AddProductForm/>
        <ProductContainer />
    </div>
  );
}

export default App;
