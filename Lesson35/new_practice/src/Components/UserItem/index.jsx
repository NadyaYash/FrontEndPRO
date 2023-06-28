import React from 'react'
import s from './index.module.css'
import { Link } from 'react-router-dom'

export default function UserItem({id,avatar,name, role, email}) {

  return (
    <Link to={`${id}`}><div className={s.user_item}>
    <img src={avatar} alt={name}/>
    <p>Name {name}</p>
    <p>Role {role}</p>
    <a href={`mailto:${email}`}>{email}</a>
</div></Link>
  )
}
