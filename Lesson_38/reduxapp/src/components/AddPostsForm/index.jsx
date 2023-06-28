
import { useDispatch } from 'react-redux'
import s from './index.module.css'
import { addPostAction } from '../../store/reducers/post_reducer';


export default function AddPostsForm() {

  const dispatch = useDispatch();

   
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
        dispatch(addPostAction(post));
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
