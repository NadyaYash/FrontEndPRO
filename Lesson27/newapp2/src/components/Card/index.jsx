import React from 'react'
import s from './index.module.css'


export default function Card({id, rus, eng, lang, change_lang, delete_card}) {
  
  const lang_l = lang === 'eng' ? eng : rus;

  const back = {
    backgroundColor: lang === 'eng' ? 'rgb(41, 128, 185)' : 'white',
    color: lang === 'eng' ? 'white' : 'rgb(41, 128, 185)'

  }

 

  return (
    <div
     className={s.card}
     style= {back}

     onClick={() => change_lang(id)}
     onDoubleClick = {() => delete_post(id)}  >
        
          {lang_l}
        
    </div>
  )

    
}
