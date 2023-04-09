import React from 'react'
import s from './index.module.css'


export default function Add_card_form({add_card}) {

  const add_card_submit = event => {
    event.preventDefault();
    const {rus, eng} = event.target;
    const card = {
      id: Date.now(),
      rus: rus.value,
      eng: eng.value,
      lang:'eng'
    }
    add_card(card);
    rus.value = '';
    eng.value = '';
  }
  return (
    
        <form className={s.form} onSubmit={add_card_submit}>
            <input type="text" name = 'rus' placeholder='Russian' />
            <input type="text" name = 'eng' placeholder='English' />
            
            <button>Add</button>
        
    </form>
  )
}
