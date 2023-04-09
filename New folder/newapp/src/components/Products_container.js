import React from 'react'
import Products from './Products'
import { products } from '../data/products'

export default function Products_container() {
  return (
    <div>
        {products.map(el => <Products {...el} /> )}
    </div>
  )
}
