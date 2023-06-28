import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getSingleCategory } from '../../async_actions/categories_req'
import { useSelector } from 'react-redux'
import ProductsContainer from '../../Components/ProductsContainer'

export default function SingleCategoryPage() {

  const dispatch = useDispatch();
  const { el } = useParams();
  useEffect(() => {
    dispatch(getSingleCategory(el))
  }, []);

  const products_state = useSelector(state => state.singleCategory)
  console.log(products_state);

  return (
    <div>
      <ProductsContainer products_state={products_state} />
    </div>
  )
}
