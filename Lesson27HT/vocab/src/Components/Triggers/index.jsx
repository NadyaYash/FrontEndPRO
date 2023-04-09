import React from 'react'
import { words } from '../../data/words'

export default function Triggers({change_to_eng, change_to_rus}) {

   

  return (
    <div>
        <button onClick={change_to_eng}>ENG</button>
        <button onClick={change_to_rus}>RUS</button>
    </div>
  )
}
