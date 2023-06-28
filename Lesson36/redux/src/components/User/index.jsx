import React from 'react'
import s from './index.module.css'
import { delete_user_action } from '../../store/reducers/userReducer'
import { useDispatch } from 'react-redux'

export default function User({id, name, age}) {
    const dispatch = useDispatch();
  return (
    <div className={s.user_card}>
        <p>{name}</p>
        <p>{age}</p>
        <span onClick={() => dispatch (delete_user_action(id))}>X</span>
    </div>
  )
}
