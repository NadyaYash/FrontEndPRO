import React from 'react'
import s from './index.module.css'
import { useDispatch } from 'react-redux';
import { filterProductsByCheckbox } from '../../store/reducers/productReducer';




export default function SortFormCheckBox() {
    const dispatch = useDispatch();

    const filter_checkbox = event => dispatch(filterProductsByCheckbox(event.target.checked))

    return (


        <form>
            <label className={s.discountedForm}>
                <span>Discounted items</span>
                <input name="discount" type="checkbox" onChange={filter_checkbox} />
            </label>

        </form>



    );
};


