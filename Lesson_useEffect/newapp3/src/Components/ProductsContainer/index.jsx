import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { get_products } from '../../requests/products_req';
import Product from '../Product';

export default function ProductsContainer() {
    const [products, setProducts] = useState([])
    const {category_id} = useParams();


    useEffect(()=> {
        get_products(category_id, setProducts)}, []
    );
    
  return (
    <div>
        {
            products.map(el=> <Product {...el} key={el.id}/>)
        }
    </div>
  )
}
