import React, {useState, useEffect} from 'react'
import { get_products } from '../../requests/products_req';
import Product from '../Product';

export default function ProductsContainer() {

    const [products, setProducts] = useState([]);
    useEffect(()=>{get_products(setProducts)}, []);

    console.log(products);

    
  return (
    <div>
        {
            products.map(el => <Product {...el} key = {el.id}/>)
        }
    </div>
  )
}
