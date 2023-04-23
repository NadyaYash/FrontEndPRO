import React from 'react'
import { Context } from '../../context'
import { useContext } from 'react'
import User from '../User'


export default function UsersContainer() {
    const {users} = useContext(Context)
  

  return (
    <div>
        {
        
        users.map(el => <User key={el.id} {...el}/>)
        
        }
        
    </div>
  )
}
