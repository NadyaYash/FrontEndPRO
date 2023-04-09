import React from 'react'
import { posts } from '../data/posts'
import Post from './Post'

export default function Posts_container() {
  return (
    <div>
        {posts.map(el => <Post {...el} />)}
    </div>
  )
}
