import React from 'react'
import { useState, useEffect } from 'react'
import { getPosts } from '../../requests/posts_req';
import Post from '../Post';

export default function PostsContainer() {
    const [posts, setPosts] = useState([]);
    useEffect(()=> {getPosts(setPosts)}, [])

  return (
    <div>
        {
            posts.map(el=> <Post key = {el.id} {...el}/>)
        }
    </div>
  )
}
