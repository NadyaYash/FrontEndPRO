import React from 'react'
import { Link } from 'react-router-dom'

export default function Product({id,category, title, price}) {
  return (
    <Link to={`/product/${id}`}><div>
    <p>{category}</p>
    <p>{title}</p>
    <p>{price}</p>
  </div></Link>
  )
}
