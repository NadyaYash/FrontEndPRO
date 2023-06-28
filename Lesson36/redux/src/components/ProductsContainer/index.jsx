import React from 'react'
import { useSelector } from 'react-redux'
import Product from '../Product';
import { useDispatch } from 'react-redux';
import { delete_all_products } from '../../store/reducers/productReducer';

export default function ProductContainer() {

    const dispatch = useDispatch();

    const products_state = useSelector(state => state.products);

   
  return (
    <div>
    <div>
        {products_state.map(el=> <Product key = {el.id} {...el}/>)}
    </div>
    <div onClick={()=> dispatch(delete_all_products())}>Delete all products</div>
    </div>
  )
}
