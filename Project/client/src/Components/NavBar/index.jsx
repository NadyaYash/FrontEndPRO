import React from 'react'
import { Link } from 'react-router-dom'
import s from './index.module.css'
import plant from '../../dataImages/plant.png'
import vector from '../../dataImages/Vector.png'



export default function NavBar() {
  return (
    <header className={s.header}>
      <div className={s.picture_catalog}>
        <img src={plant} alt='logo' />
      </div>
      <Link className={s.catalog_btn} to='/categories'>Catalog
      </Link>
      <nav className={s.nav}>

        <Link to='/'>Main Page</Link>
        <Link to='/all_items'>All products</Link>
        <Link to='/sales'>Sales</Link>
      </nav>
      <Link to='/cart'><img src={vector} alt='cart' /></Link>
    </header>

  )
}
