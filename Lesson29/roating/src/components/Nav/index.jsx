import React from 'react'
import s from './index.module.css'
import {Link} from 'react-router-dom'

export default function Nav() {
  return (
    <div className={s.navMenu}>
        <Link to= '/'><div>Main</div></Link>
        <Link to= '/about'><div>About</div></Link>
        <Link to= '/products'><div>Products</div></Link>
        <Link to= '/users'><div>Users</div></Link>


    </div>
  )
}
