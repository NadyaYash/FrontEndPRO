import React from 'react'
import { useSelector } from 'react-redux';
import Cart from '../Cart';
import { clearCartAction } from '../../store/reducers/cartReducer';
import { useDispatch } from 'react-redux';


export default function CartContainer() {
  const dispatch = useDispatch()
  const cart_state = useSelector(state => state.cart)
  const total = cart_state.reduce((acc, { price, count }) => acc + price * count, 0)
  return (
    <div>
      {cart_state.map(el => <Cart key={el.id} {...el} />)}
      <button onClick={() => dispatch(clearCartAction())}>Clear cart</button>
      <p>Total: {total} </p>
    </div>
  )
}
