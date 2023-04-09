import React from 'react'
import User from "./User"
import {users} from '../data/users'

export default function Users_container() {

      
  return (
    <div>
       {
        users.map(el => <User {...el} key={el.id}/>)
      }
    </div>
  )
}
