import React from 'react'
import s from './index.module.css'

export default function ClotheItem({title, price, size, discount}) {

  const new_price = price - price*discount;

  const titleUp = title[0].toUpperCase() + title.slice(1);

  const price_style =  {
    backgroundColor: new_price >= 100  ? 'lightgreen' : 'pink'}
    
  

  
  return (
    <div className={s.clothes_style} style= {price_style}>
        <p>Title: {titleUp}</p>
        <p>Old price: {price}</p>
        <p>New price: {price - price*discount}</p>
        <p>Size: {size}</p>
    </div>
  )
}
