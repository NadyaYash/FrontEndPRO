import React from 'react'
import Card from '../Card'
import s from './index.module.css'
import { useContext } from 'react'
import { Context } from '../../context'

export default function CardsContainer() {

  const {cards, change_lang, delete_card} = useContext(Context);

  return (
    <div className={s.cards_container}>
      {
        cards.map(el => <Card key={el.id} {...el} change_lang = {change_lang} delete_card = {delete_card}/>)
      }
    </div>
  )
}