import React, {useContext} from 'react'
import s from './index.module.css'
import CommentsContainer from '../CommentsContainer'
import { Context } from '../../context';

export default function Post({comments, id, title, text, like}) {
  const {change_like, delete_post} = useContext(Context); 
  const likely = like ? 'Liked' : 'Like?'

    const likely_style = {
        backgroundColor: like ? '#003153' : 'white',
        color: like? 'white' : '#003153',
        border: like ? '1px solid transparent' : '1px solid #003153'
    }

  return (
    <div className={s.post_item}>
        <h3>{title}</h3>
        <p>{text}</p>
        <p className={s.par} onClick={() => delete_post(id)}>X</p>
        <button onClick={()=>change_like(id)} style={likely_style}>{likely}</button>
        <CommentsContainer comments = {comments} post_id = {id}  />
    </div>
  )
}
