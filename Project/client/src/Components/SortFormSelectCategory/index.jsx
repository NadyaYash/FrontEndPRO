import React from 'react'
import s from './index.module.css'
import { useDispatch } from 'react-redux';
import { sortProductsCategoryAction } from '../../store/reducers/singleCategoryReducer';





export default function SortFormSelectCategory() {
    const dispatch = useDispatch();


    const sort = event => dispatch(sortProductsCategoryAction(event.target.value));

    return (
        <div className={s.sortBlock}>
            <p id={s.sortedTitle}>Sorted</p>
            <select id={s.sorted} onInput={sort}>
                <option value='default'>By default</option>
                <option value='price'>Price low to high</option>
                <option value='title'>Name A to Z</option>
                <option value='priceLess'>Price high to low</option>
                <option value='titleZ'>Name Z to A</option>
            </select>
        </div>






    );
};