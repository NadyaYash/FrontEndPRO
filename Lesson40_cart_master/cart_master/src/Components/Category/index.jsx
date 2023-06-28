import React from 'react'
import s from './index.module.css'
import { Link } from 'react-router-dom';

export default function Category({ el }) {
  const new_el = el[0].toUpperCase() + el.slice(1);
  const roatCategory = `/categories/${el}`

  return (

    <div className={s.category}>
      <Link to={roatCategory} >
        <p>{new_el}</p>
      </Link>
    </div>

  )
}
