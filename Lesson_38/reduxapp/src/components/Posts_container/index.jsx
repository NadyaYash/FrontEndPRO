import React from 'react'
import { useSelector } from 'react-redux'
import Post from '../Post'

export default function Posts_container() {
    const posts_state = useSelector(state=> state.posts)
  return (
    <div>
        {posts_state.map(el=> <Post key={el.id} {...el} />)}
    </div>
  )
}
