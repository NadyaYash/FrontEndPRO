import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { getProduct } from '../../requests/product_req';

export default function SingleProductPage() {
  const {productId} = useParams();
  const [product, setProduct] = useState({});
  const { title, description, image, price } = product;
useEffect(()=> {getProduct(productId, setProduct)},[])


  
  return (
    <div>
       <p>{title}</p>
      <img src={image} alt={title} />
      <p>{description}</p>
      <p>{price} $</p>
      </div> 
  )
}
