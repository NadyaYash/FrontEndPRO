import React, {useContext} from 'react'
import { Context } from '../../context';
import s from './index.module.css'


export default function AddPostsForm() {

  const {add_post} = useContext(Context);
  
    const add_post_submit = event =>{
        event.preventDefault();
        const {title, text} = event.target;
        const post = {
          id: Date.now(),
          title:title.value,
          text:text.value,
          like: 'false',
          comments: []
            
        }
        add_post(post);
        title.value = '';
        text.value = '';

      }
  return (
    <form className={s.form} onSubmit={add_post_submit}>
        <input type="text" name = 'title' placeholder='Ваш заголовок' />
        <input type="text" name = 'text' placeholder='Ваш текст'/>
        <button>Опубликовать</button>
    </form>
  )
}
