import React from 'react'
import { products } from '../../data/products';
import s from './index.module.css'

export default function Products({id, title, country, price, discount}) {
    const new_price = price - price*discount;
    const class_prime = new_price > 50 ? 'prime' : "not prime"
    
  return (
    <div className={s.cards_style}>
        <p>Title: {title}</p>
        <p>Country: {country}</p>
        <p>Price: {price}</p>
        <p>New price: {new_price}</p>
        <p>Class: {class_prime} </p>
    </div>
  )
}
