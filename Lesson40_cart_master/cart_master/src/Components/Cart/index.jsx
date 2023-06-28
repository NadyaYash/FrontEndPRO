import React from 'react'
import s from './index.module.css'
import { countMoreAction, countLessAction, deleteCartAction } from '../../store/reducers/cartReducer'
import { useDispatch } from 'react-redux'

export default function Cart({ id, title, images, count, price }) {

  const dispatch = useDispatch()

  return (
    <div className={s.cart_item}>
      <img src={images[0]} alt={title} />
      <p>{title}</p>
      <p>{price} $</p>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(countMoreAction(id))}>+</button>
        <button onClick={() => dispatch(countLessAction(id))}>-</button>
        <span onClick={() => dispatch(deleteCartAction(id))}>X</span>
      </div>

    </div>
  )
}
