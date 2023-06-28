import React from 'react'
import ProductsContainer from '../../Components/ProductsContainer'
import s from './index.module.css'

import SortFormByPrice from '../../Components/SortFormByPrice'
import SortFormSelect from '../../Components/SortFormSelect'
import SortFormCheckBox from '../../Components/SortFormCheckBox'

export default function AllItemsPage() {
  return (
    <div className={s.allItems}>
      <h1>All products</h1>
      <div className={s.formsBlock}>
        <SortFormByPrice />
        <SortFormCheckBox />
        <SortFormSelect />
      </div>
      <ProductsContainer />
    </div>
  )
}
