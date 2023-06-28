import React from 'react'
import s from './index.module.css'
import { Link } from 'react-router-dom'

export default function Category({id, name, image}) {
    const category_route = `/products/${id}`;
  return (
    <Link to={category_route}><div className={s.category_card}>
    <p>{name}</p>
    <img src = {image} alt = 'image' />
    </div>
    </Link>
    
   
  )
}
