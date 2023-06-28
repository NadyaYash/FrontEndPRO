import React from 'react'
import { useDispatch } from 'react-redux'
import { delete_product_action } from '../../store/reducers/productReducer';

export default function Product({id, title, price}) {

    const dispatch = useDispatch();
    
  return (
    
    <div>
        <p>{title}</p>
        <p>{price}</p>
        <span onClick={()=> dispatch(delete_product_action(id))} >X</span>
    </div>
    
    
  )
}


