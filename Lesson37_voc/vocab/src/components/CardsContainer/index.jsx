import React from 'react'
import { useSelector } from 'react-redux'
import CardItem from '../CardItem'
import { changeToEng, deleteAllAction } from '../../store/reducers/cardReducer'
import { useDispatch } from 'react-redux'
import { changeToRus } from '../../store/reducers/cardReducer'



export default function CardsContainer() {

    const dispatch = useDispatch();
      

    const cards_state = useSelector(state=> state.cards)
    

  return (
    <div>

        {cards_state.map(el=> <CardItem key={el.id} {...el}/>)}
        <button onClick={()=> dispatch(deleteAllAction())}>Delete all cards</button>
        <br></br>
        <button onClick={()=> {dispatch(changeToRus())}}>RUS</button>
        <button onClick={()=> {dispatch(changeToEng())}}>ENG</button>
    </div>
  )
}
