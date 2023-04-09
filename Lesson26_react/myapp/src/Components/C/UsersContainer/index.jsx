import React, { useState} from 'react'
import { users } from '../../../data/users'
import User from '../User'
import s from './index.module.css'

export default function UsersContainer() {
  let [list, setList] = useState(users);
  const age_sort = () => {
    cards.sort((x, y) => x.age - y.age);
    
    setList(list = cards.map(el=> < User {...el} key= {el.id}/>));
    // const sort_by_age = () => setCards(cards.slice().sort((a, b) => a.age - b.age));
  }
  
  
  const firstname_sort = () => {
    cards.sort((x, y) => x.firstname.localeCompare(y.firstname));
    
    setList(list = cards.map(el=> < User {...el} key= {el.id}/>));
    // const sort_by_name = () => setCards([...cards].sort((a, b) => a.firstname.localeCompare(b.firstname)));

  }
 
  
  return (

    <div>
       <div className={s.container}>
        {users.map(el=> < User {...el} key= {el.id}/>)}
        

    </div>
    <button onClick={age_sort}>Sort by age</button>
    <button onClick={firstname_sort}>Sort by name</button>
    </div>

   
  )
}
