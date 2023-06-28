import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { getDescription } from '../../requests/product_req'

export default function ProductDescriptionPage() {
  const [product, setProduct] = useState([])
  const {images, title, description, price} = product;
  const {description_id} = useParams();
  useEffect(()=> {getDescription(description_id, setProduct)}, []);

    
  return (
    <div>
      <img src={images} alt = {title}/>
      <p>{title}</p> 
      <p>{description}</p> 
      <p>{price}$</p> 
        
    </div>
  )
}
