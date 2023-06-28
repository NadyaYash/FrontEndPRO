import React from 'react'
import s from './index.module.css'

export default function Post({id, title, body, userId, tags}) {
  return (
    <div className={s.posts}>
        <p>{title}</p>
        <p>{body}</p>
        <p>{userId}</p>
        <p>{tags[0]}</p>
    </div>
  )
}
