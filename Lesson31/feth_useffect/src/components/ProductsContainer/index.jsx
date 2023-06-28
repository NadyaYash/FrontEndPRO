import React, {useState, useEffect} from 'react'
import { get_products } from '../../requests/products_req';
import Product from '../Product';

export default function ProductsContainer() {

    const [products, setProducts] = useState([]);
    useEffect(()=>{get_products(setProducts)}, []);

    console.log(products);

    useEffect(()=>{
      setProducts(JSON.parse(localStorage.getItem('products')) || products)
    }, []);
  
    useEffect(()=> {
      localStorage.setItem('products', JSON.stringify(products))
    }, [products]);
  

    
  return (
    <div>
        {
            products.map(el => <Product {...el} key = {el.id}/>)
        }
    </div>
  )
}
