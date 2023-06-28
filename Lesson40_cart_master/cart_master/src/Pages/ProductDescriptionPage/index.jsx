import React, { useEffect } from 'react'
import { getSingleProduct } from '../../async_actions/singleProduct_req'
import { useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import s from './index.module.css'
import { addToCartAction } from '../../store/reducers/cartReducer';

export default function ProductDescriptionPage() {

  const dispatch = useDispatch();
  const { productId } = useParams();
  const singleProduct_state = useSelector(state => state.singleProduct)
  const { id, category, images, title, description, price } = singleProduct_state;
  const addToCart = () => dispatch(addToCartAction({ id: +id, images, title, price }))
  const categoryRoat = `/categories/${category}`


  useEffect(() => {
    dispatch(getSingleProduct(productId))
  }, [])
  return (
    <div className={s.product}>
      {images && <img src={images[0]} alt={title} />}
      <div>
        <p>{title}</p>
        <p>{description}</p>
        <p>{price}$</p>
        <Link to={categoryRoat}>

          <p className={s.category}>{category}</p>
        </Link>


        <div onClick={addToCart} className={s.addBtn}>Add to cart</div>
      </div>
    </div>
  )
}
