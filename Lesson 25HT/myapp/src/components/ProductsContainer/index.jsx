import React from 'react'
import Products from '../Products'
import { products } from '../../data/products';

export default function ProductsContainer() {
  return (
    <div>
        {
        products.map(el => <Products {...el} key={el.id}/>)
        }

    </div>
  )
}

