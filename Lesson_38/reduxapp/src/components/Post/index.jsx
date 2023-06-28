import React from 'react'
import s from './index.module.css'
import { changeLikeAction, deletePostAction } from '../../store/reducers/post_reducer'
import { useDispatch } from 'react-redux'
import Comments_container from '../Comments_container'


export default function Post({comments, id, title, text, like}) {

    const dispatch = useDispatch()
    
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
          <p className={s.par} onClick={()=> dispatch(deletePostAction(id))}>X</p>
          <button onClick={() => dispatch(changeLikeAction(id))} style={likely_style}>{likely}</button>
          <Comments_container comments={comments} post_id = {id}/>
      </div>
    )
  }
  