import React from 'react'
import s from './index.module.css'
import { Context } from '../../context'
import { useContext } from 'react'

export default function User({member, team, id}) {

  const {delete_member} = useContext(Context)
    

  return (
    <div onClick={() => delete_member(id)} className={s.user_card}>
      <p>{member}</p>
      <p>{team}</p>
    </div>
  )
}
