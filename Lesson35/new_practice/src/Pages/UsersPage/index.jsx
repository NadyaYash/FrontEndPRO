import React from 'react'
import { Link } from 'react-router-dom'
import s from './index.module.css'


export default function UsersPage() {
  return (
    <div className={s.users}>
        <Link to= '/' >Main</Link>
        <Link to={`/users/customer`}>Customers</Link>
        <Link to={`/users/admin`}>Admins</Link>
        
    </div>
  )
}
