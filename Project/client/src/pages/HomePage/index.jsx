import React from 'react'
import SaleBlock from '../../Components/SaleBlock'
import GetDiscount from '../../Components/GetDiscount'
import FourCategories from '../../Components/FourCategories'
import s from './index.module.css'
import { Link } from 'react-router-dom'
import RandomSales from '../../Components/RandomSales'


export default function HomePage() {
  return (
    <div className={s.home}>
      <SaleBlock />
      <div id={s.catalog}>
      <h1>Catalog</h1>
      <Link to='/categories' className={s.categoriesBtn}>All categories</Link>
      </div>
      <FourCategories />
      <GetDiscount />
      <h2>Sale</h2>
      <RandomSales />
    </div>
  )
}
