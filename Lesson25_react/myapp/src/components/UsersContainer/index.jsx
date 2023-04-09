import React from 'react'
import { users } from '../../data/users'
import User from '../User'
import s from './index.module.css'

export default function UsersContainer() {
  return (
    <div>
      {
        users.map(el => <User {...el} key={el.id}/>)
      }
    </div>
  )
}
