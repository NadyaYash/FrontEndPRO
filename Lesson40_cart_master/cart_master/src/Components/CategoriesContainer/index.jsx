import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCategories } from '../../async_actions/categories_req';
import Category from '../Category';
import s from './index.module.css'

export default function CategoriesContainer() {
  const dispatch = useDispatch();
  const categories_state = useSelector(state => state.categories);

  useEffect(() => dispatch(getCategories), []);

  return (
    <div className={s.container}>
      {
        categories_state.map((el, index) => <Category key={index} el={el} />)
      }
    </div>
  )
}


