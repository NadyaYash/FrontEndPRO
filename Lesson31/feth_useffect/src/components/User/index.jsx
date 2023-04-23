import React from 'react'
import s from './index.module.css'


export default function User({firstName, lastName, image}) {
  return (
    <div className={s.user_card}>
       <p>{firstName} {lastName}</p> 
       
        <img src = {image} alt = 'photo'/>   
    </div>
  )
}
