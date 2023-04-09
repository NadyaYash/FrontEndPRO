import React, { useContext } from 'react'
import Post from '../Post'
import s from './index.module.css'
import { Context } from '../../context'

export default function PostsContainer() {
  const {posts} = useContext(Context)
  return (
    <div className={s.container}>
        {posts.map(el => <Post {...el} key = {el.id} /> )}
    </div>
  )
}
