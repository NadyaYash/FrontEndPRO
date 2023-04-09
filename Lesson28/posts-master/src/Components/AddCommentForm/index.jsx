import React, { useContext } from 'react'
import s from './index.module.css'
import { Context } from '../../context';

export default function AddCommentForm({post_id}) {

  const {add_comment} = useContext(Context);
    const add_comment_submit = event =>{
        event.preventDefault();
        const {comment} = event.target;
        add_comment(post_id, comment.value);        
        comment.value = '';

      }

  return (
    <form className={s.formStyle} onSubmit={add_comment_submit}>
        <input type="text" name = 'comment' placeholder='Ваш коментарий' />
        <button>Добавить</button>
    </form>
  )
}
