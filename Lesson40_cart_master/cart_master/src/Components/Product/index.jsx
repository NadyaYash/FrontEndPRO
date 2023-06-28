import React from 'react'
import s from './index.module.css'
import { addToCartAction } from '../../store/reducers/cartReducer'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'


export default function Product({ id, images, title, price }) {
  const dispatch = useDispatch();
  const addToCart = () => dispatch(addToCartAction({ id, images, title, price }))
  const productRoat = `/product/${id}`
  return (
    <div className={s.product_item}>
      <Link to={productRoat}>
        <div>
          <p>Product: {title}</p>
          <p>Price: {price} $</p>
          <img src={images[0]} alt={title} />
        </div>
      </Link>
      <button className={s.add_btn} onClick={addToCart}>Add to cart</button>
    </div>

  )
}
