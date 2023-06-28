import React, {useState, useEffect} from 'react'
import { getCategories } from '../../requests/product_req'
import Category from '../Category';
import s from './index.module.css'

export default function CategoriesContainer() {
    
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        getCategories(setCategories)
    }, [])

    console.log(categories)
    

  return (
    <div className={s.categories_container}>
    {
        categories.map(el=> <Category key={el.id} {...el}/>)
    }    
    </div>
  )
}
