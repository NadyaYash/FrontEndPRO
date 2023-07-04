import React from 'react'
import { useParams } from 'react-router-dom';
import { getSingleCategory } from '../../async_actions/categories_req';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import ProductItem from '../ProductItem'
import s from './index.module.css'
import SortFormByPriceCategory from '../SortFormByPriceCategory';
import SortFormCheckBoxCategory from '../SortFormCheckBoxCategory';
import SortFormSelectCategory from '../SortFormSelectCategory';
import { getCategories } from '../../async_actions/categories_req';


export default function ItemByCategoryContainer() {
  const { categoryId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingleCategory(categoryId))
  }, [])
  const singleCategory_state = useSelector(state => state.singleCategory);

  const categories_state = useSelector(state => state.categories);

  useEffect(() => { dispatch(getCategories) }, []);

  const category = categories_state.find(el => el.id === parseInt(categoryId));

  return (
    <div>
      {category && (
        <div>

          <h1 id={s.title}>{category.title}</h1>
        </div>
      )}

      <div className={s.formsBlock}>
        <SortFormByPriceCategory />
        <SortFormCheckBoxCategory />
        <SortFormSelectCategory />
      </div>
      <div className={s.productsByCategoryContainer}>
        {
          singleCategory_state
            .filter(el => !el.hide_price && el.hide_sale)
            .map(el => <ProductItem key={el.id} {...el} />)
        }
      </div>
    </div>

  )
}
