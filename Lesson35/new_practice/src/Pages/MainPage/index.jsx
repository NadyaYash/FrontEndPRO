import React from 'react'
import { Link } from 'react-router-dom'
import s from './index.module.css'


export default function MainPage() {
  return (
    <div className={s.menu_items}>
        <Link to= 'users' >Users</Link>
        <Link to= 'products' >Products</Link>
    </div>
  )
}
