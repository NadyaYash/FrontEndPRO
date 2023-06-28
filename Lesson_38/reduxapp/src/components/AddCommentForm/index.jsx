import React, { useContext } from 'react'
import s from './index.module.css'
import { useDispatch } from 'react-redux';
import { addCommentAction } from '../../store/reducers/post_reducer';


export default function AddCommentForm({post_id}) {


  const dispatch = useDispatch();

  
    const add_comment_submit = event =>{
        event.preventDefault();
        const {comment} = event.target;

        const comment_obj = {
          id: Date.now(),
          text: comment.value
        }

        dispatch(addCommentAction({
          post_id,
          comment_obj
        }));

        comment.value = '';


      }

  return (
    <form className={s.formStyle} onSubmit={add_comment_submit}>
        <input type="text" name = 'comment' placeholder='Ваш коментарий' />
        <button>Добавить</button>
    </form>
  )
}
