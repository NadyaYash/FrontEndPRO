import React from 'react'
import Comment from '../Comment'
import AddCommentForm from '../AddCommentForm'


export default function Comments_container({comments, post_id}) {
  return (
    <div>
        <AddCommentForm post_id = {post_id}/>
        {comments.map (el => <Comment key={el.id} {...el} post_id={post_id} />)}
    </div>
  )
}
