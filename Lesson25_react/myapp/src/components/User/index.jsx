import React from 'react'
import s from './index.module.css'

export default function User({id, firstname, lastname, age, active}) {

  const status = active ? 'online' : 'offline';

  const user_styles = {
    backgroundColor: active ? 'lightgreen' : 'lightyellow'
  }
  return (
    <div className={s.user_card} style={user_styles}>
        <p>Name: {`${firstname} ${lastname}`}</p>
        
        <p>age: {age}</p>
        <p>Status: {status}</p>
    </div>
  )
}
