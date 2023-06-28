import React, {useState, useEffect} from 'react'
import ProductsItem from '../ProductsItem';
import { useParams } from 'react-router-dom';
import { getProductsByCategory } from '../../requests/product_req';
import s from './index.module.css'

export default function ProductsContainer() {
    const {categoryId} = useParams();
    const [products, setProducts] = useState([])
    useEffect(()=> {getProductsByCategory(category_id, setProducts)},[])
    return (
        <div className={s.categories_container}>
    {products.map(el=> <ProductsItem {...el} key={el.id}/>)}
    </div>
  )
}
