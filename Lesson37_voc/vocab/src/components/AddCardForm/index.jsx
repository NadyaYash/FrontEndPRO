import React from 'react'
import { addCardAction } from '../../store/reducers/cardReducer';
import { useDispatch } from 'react-redux';

export default function AddCardForm() {
    const dispatch = useDispatch();

    const addCard = event =>{
        event.preventDefault();
        const {rus, eng} = event.target;
        const word = {
          id: Date.now(),
          rus: rus.value,
          eng: eng.value,
          lang:'eng'
        }
        dispatch(addCardAction(word))
        event.target.reset();
    }

  return (
    <form onSubmit={addCard}>
        <input type='text' placeholder='eng word' name = 'eng' />
        <input type='text' placeholder='rus world' name = 'rus' />
        <button>Submit</button>
    </form>
  )
}
