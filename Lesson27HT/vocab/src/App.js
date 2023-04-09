import React, {useState} from 'react';
import './App.css';
import CardsContainer from './Components/CardsContainer/'
import Triggers from './Components/Triggers'
import { words } from './data/words';

function App() {
  const [cards, setCards] = useState(words);

  const change_to_eng = () => {
  setCards(cards.map(el=>{
      el.lang = 'eng'
  return el}))
  }

  const change_to_rus = () => {
    setCards(cards.map(el=>{
      el.lang = 'rus'
  return el}))
  }



  return (
    <div>
      
      <CardsContainer cards = {cards} />
      <Triggers change_to_eng={change_to_eng} change_to_rus={change_to_rus}  />
    </div>
  );
}

export default App;
