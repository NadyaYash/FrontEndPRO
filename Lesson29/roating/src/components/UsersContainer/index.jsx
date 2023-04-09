import React from 'react'
import User from '../User'
import { users } from '../../data/users'

export default function UsersContainer() {
  return (
    <div>

    {users.map(el => <User {...el} key= {el.id}/>)}

    </div>
  )
}
