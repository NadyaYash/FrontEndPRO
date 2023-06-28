import React from 'react'
import CategoriesContainer from '../../Components/CategoriesContainer'
import s from './index.module.css'

export default function CategoriesPage() {
  return (
    <div className={s.categoriesCartPage}>
      <h1 className={s.title}>Categories</h1>
      <CategoriesContainer />
    </div>
  )
}
