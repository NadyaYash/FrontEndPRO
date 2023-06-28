import React from 'react'
import { Link } from 'react-router-dom'

export default function Category({el}) {

    const productsRout = `/products/${el}`

  return (
    <div>
       <Link to={productsRout}><p>{el}</p></Link> 
    </div>
  )
}
