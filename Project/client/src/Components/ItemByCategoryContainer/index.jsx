import React from 'react'
import { useParams } from 'react-router-dom';
import { getSingleCategory } from '../../async_actions/categories_req';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import ProductItem from '../ProductItem'
import s from './index.module.css'
// import SortForm from '../SortForm';

export default function ItemByCategoryContainer() {
  const { categoryId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingleCategory(categoryId))
  }, [])
  const singleCategory_state = useSelector(state => state.singleCategory);


  return (
    <div>
      <h1 id={s.title}>{singleCategory_state?.category?.title}</h1>
      {/* <SortForm /> */}
      <div className={s.productsByCategoryContainer}>
        {
          singleCategory_state?.data?.filter(el => !el.hide_price).
          map(el => <ProductItem key={el.id} {...el} />)
        }
      </div>
    </div>

  )
}
