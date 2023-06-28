import React from 'react'
import s from './index.module.css'
import { Context } from '../../context';
import { useContext } from 'react';


export default function Add_card_form() {

  const {add_card} = useContext(Context);

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
