import React, { useEffect } from 'react'
import ProductsContainer from '../../Components/ProductsContainer'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../async_actions/products_req'



export default function ProductPage() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProducts)
  }, [])

  const products_state = useSelector(state => state.products)

  return (
    <div>
      <ProductsContainer products_state={products_state} />
    </div>
  )
}
