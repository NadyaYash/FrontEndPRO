import React from 'react'
import { Link } from 'react-router-dom'
import ProductsContainer from '../../components/ProductsContainer'

export default function ProductsPage() {
  return (
    <div>
      <Link to='/'>
        <button>MainPage</button>
      </Link>
      <ProductsContainer/>
    </div>
  )
}
