import React from 'react'
import { Link } from 'react-router-dom'
import s from './index.module.css'

export default function NavMenu() {
  return (
    <div className={s.nav_menu}>

      <Link to='/'><div>Products</div></Link>
      <Link to='/cart'><div>Cart</div></Link>
      <Link to='/categories'>Categories</Link>

    </div>
  )
}
