import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { getProducts } from '../../requests/products_req';
import Product from '../Product';
export default function ProductsContainer() {

  const {category}=useParams();
  const [products, setProducts] = useState([])
  useEffect(()=>{getProducts(category,setProducts)}, [])
  
  
  return (
    <div>
      {products.map(el => <Product key={el.id} {...el}/>)}
    </div>
  )
}
