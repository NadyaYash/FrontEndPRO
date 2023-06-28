import React from 'react'
import s from './index.module.css'
import bush from '../../dataImages/bush.png'
import { Link } from 'react-router-dom'

export default function SaleBlock() {
  return (
    <div className={s.saleBlock}>
      <div className={s.salesStyle}>
        <p id={s.sale}>Sale</p>
        <p id={s.season}>New season</p>
        <Link to='/sales'><div id={s.saleBtn}>Sale</div></Link>
      </div>
      <img src={bush} alt='bush' />



    </div>
  )
}
