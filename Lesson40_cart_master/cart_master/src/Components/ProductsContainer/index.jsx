import React from 'react'
import Product from '../Product'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getProducts } from '../../async_actions/products_req';
import { useEffect } from 'react';
import s from './index.module.css';


export default function ProductsContainer({ products_state }) {


  return (
    <div className={s.products_container}>
      {products_state.map(el => <Product key={el.id} {...el} />)}
    </div>
  )
}