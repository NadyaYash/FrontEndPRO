import React from 'react'
import SalesContainer from '../../Components/SalesContainer'
import s from './index.module.css'
import SortFormByPrice from '../../Components/SortFormByPrice'
import SortFormSelect from '../../Components/SortFormSelect'



export default function SalesPage() {
  return (
    <div className={s.salesPage}>
      <h1>Products with sale</h1>
      <div className={s.formsBlock}>
        <SortFormByPrice />
                <SortFormSelect />
      </div>
      <SalesContainer />
    </div>
  )
}
