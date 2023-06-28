import React from 'react'
import CartContainer from '../../Components/CartContainer'
import OrderDetails from '../../Components/OrderDetails'
import s from './index.module.css'
import { Link } from 'react-router-dom'
import sign from '../../dataImages/sign_more.png'
export default function CartPage() {
  return (
    <div className={s.generalCartPage}>
      <h1 className={s.title}>Shopping cart</h1>
      <Link to='/all_items'><div id={s.back}>
        <p>Back to the store</p>
        <img src={sign} alt='sign' />
      </div>
      </Link>
      <div className={s.cartPage}>
        <div><CartContainer /></div>
        <div><OrderDetails /></div>
      </div>
    </div>

  )
}
