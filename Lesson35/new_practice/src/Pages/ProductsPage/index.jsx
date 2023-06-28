import React from 'react'
import { Link } from 'react-router-dom'
import s from './index.module.css'
import CategoriesContainer from '../../Components/CategoriesContainer'

export default function ProductsPage() {
  return (
    <div className={s.products}>
        <Link to= '/' >Main</Link>
        <CategoriesContainer/>
    </div>
  )
}
