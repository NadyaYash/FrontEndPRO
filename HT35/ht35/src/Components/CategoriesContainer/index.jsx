import React, {useState, useEffect} from 'react'
import { getCategory } from '../../requests/category_req'
import { Link } from 'react-router-dom'
import Category from '../Category'



export default function CategoriesContainer() {

    const [categories, setCategories] = useState([])
    useEffect(()=>{getCategory(setCategories)}, [])
    
    
  return (
    <div>
     
        {categories.map(el=> <Category el={el} key= {Date.now()}/>)}
    </div>
  )
}
