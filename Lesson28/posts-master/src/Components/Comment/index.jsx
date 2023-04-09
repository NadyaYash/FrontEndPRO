import React, {useContext} from 'react'
import s from './index.module.css'
import { Context } from '../../context';

export default function Comment({id, text, post_id = {post_id}}) {

  const {delete_comment} = useContext(Context)

  return (
    <div className={s.comment_item}>
       <p onClick={() => delete_comment(post_id, id)}>{text}</p> 
    </div>
  )
}