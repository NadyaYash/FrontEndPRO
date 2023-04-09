import React from 'react'
import { words } from '../../data/words'
import Card from '../Card'
import s from './index.module.css'

export default function CardsContainer({cards}) {
    
  return (
    <div className={s.cards_container}>
        {cards.map(el => <Card {...el} key = {el.id} />)}
    </div>
  )
}
