import React from 'react'
import Card from '../Card'
import s from './index.module.css'

export default function CardsContainer({ cards, change_lang, delete_card}) {

  return (
    <div className={s.cards_container}>
      {
        cards.map(el => <Card key={el.id} {...el} change_lang = {change_lang} delete_card = {delete_card}/>)
      }
    </div>
  )
}