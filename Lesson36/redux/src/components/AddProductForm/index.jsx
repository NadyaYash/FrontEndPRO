import React from 'react'
import { useDispatch } from 'react-redux';
import { add_product_action } from '../../store/reducers/productReducer';

export default function AddProductForm() {

    const dispatch = useDispatch();
    const addProduct = (event) =>{
        event.preventDefault();
        const {title, price} = event.target;

        const product = {
            id: Date.now(),
            title: title.value,
            price:price.value
        }
            dispatch(add_product_action(product));
            event.target.reset();

    }
  return (
    <div>
        <form onSubmit={addProduct}>
        <input type= 'text' placeholder='Title' name = 'title'/>
        <input type= 'text' placeholder='Price' name = 'price'/>
        <button>Submit</button>
    </form>
    </div>
  )
}
