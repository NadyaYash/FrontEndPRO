import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';
import { useEffect } from 'react'
import { getProducts } from '../../requests/product_req'
import ProductItem from '../ProductItem'
import s from './index.module.css'
import { filterProductByPriceAction, sortProductsAction } from '../../store/reducers/productReducer';


export default function ProductsContainer() {
    const dispatch = useDispatch();
    const products_state = useSelector(state => state.products)
    useEffect(() => { dispatch(getProducts) }, []);
    console.log(products_state);
    const sort = event => dispatch(sortProductsAction(event.target.value));
    const filter_price = event => {
        event.preventDefault();
        const{min, max} = event.target;
        const min_value = min.value || 0;
        const max_value = max.value || Infinity;
        dispatch(filterProductByPriceAction({min_value, max_value}))
    }

    return (
        <div>

            <form onSubmit={filter_price}>
                <input type='number' name= 'min' placeholder='min' />
                <input type='number' name= 'max' placeholder='min' />
                <button>Filter</button>
            </form>


            <label>
                <span>Sorted</span>
                <select onInput={sort}>
                    <option value='title'>By title</option>
                    <option value='price'>By price</option>
                    
                </select>
            </label>
            <div className={s.container}>
                {products_state
                .filter(el => !el.hide_price)
                .map(el => <ProductItem key={el.id} {...el} />)}
            </div>
        </div>
    )

}
