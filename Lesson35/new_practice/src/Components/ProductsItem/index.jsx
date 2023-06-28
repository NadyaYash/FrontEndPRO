import React from 'react'
import s from './index.module.css'
import { Link } from 'react-router-dom'

export default function ProductsItem({id,images, title, discription, price}) {
 const product_link = `product/${id}`
 
  return (
    <Link to={product_link}><div className={s.product_item}>
    <img src={images[0]} alt={title}/>
    <p>{title}</p>
    <p>{discription}</p>
    <p>{price}</p>
</div></Link>
  )
}
