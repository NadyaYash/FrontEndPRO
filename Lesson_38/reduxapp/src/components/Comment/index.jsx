import React from 'react'
import s from './index.module.css'
import { deleteCommentAction } from '../../store/reducers/post_reducer'
import { useDispatch } from 'react-redux'

export default function Comment({id, text, post_id}) {

    const dispatch = useDispatch();

    
  
    return (
      <div onClick={()=> dispatch(deleteCommentAction({comment_id: id, post_id}))} className={s.comment_item}>
         <p >{text}</p> 
      </div>
    )
  }
