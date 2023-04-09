import React from 'react'
import ClotheItem from '../ClotheItem'
import { clothes } from '../../data/clothes'
import s from './index.module.css'

export default function ClotheContainer() {
  return (
    <div>
        {clothes.map(el => <ClotheItem {...el} key={el.id}/>)}
    </div>
  )
}
