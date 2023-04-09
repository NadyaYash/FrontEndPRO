import React from 'react'

export default function Products({product, price, country}) {
  return (
    <div>
        <p>Product: {product}</p>
        <p>Price: {price}</p>
        <p>Country: {country}</p>
    </div>
  )
}
