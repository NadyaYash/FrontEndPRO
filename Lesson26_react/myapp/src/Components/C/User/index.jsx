import React from 'react'
import s from './index.module.css'
export default function User({firstname, lastname, age, country, active}) {
  const user_styles= {
    backgroundColor: active ? 'lightblue' : 'lightpink'
  }

  const status = active ? 'Online' : 'Offline';

  return (
    <div className={s.user_style} style={user_styles}>
        <p>Name: {firstname} {lastname}</p>
        <p>Age: {age}</p>
        <p>Country: {country}</p>
        <p>Status: {status} </p>
        
    </div>
        
  )
}
