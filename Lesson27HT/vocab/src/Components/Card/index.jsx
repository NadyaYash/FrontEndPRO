import React from 'react'
import s from './index.module.css'


export default function Card({id, eng, rus, lang}) {
    const lang_word = lang === 'eng'? eng : rus;
    const back = {
        backgroundColor: lang === 'eng'? 'white' : 'rgb(41, 128, 185)',
        color : lang === 'eng' ? 'rgb(41, 128, 185)' : 'white'
    }
  return (
    <div className={s.card_styles} style= {back}>
       <p>{lang_word}</p>
    </div>
  )
}
