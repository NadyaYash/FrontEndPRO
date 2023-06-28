import React from 'react'
import { useSelector } from 'react-redux'
import User from '../User';
import s from './index.module.css'
import { delete_all_users_action } from '../../store/reducers/userReducer';
import { useDispatch } from 'react-redux';

export default function UsersContainer() {

  const dispatch = useDispatch();

  const users_state = useSelector(state => state.users);

  return (
    <div>
      <div>
        {
          users_state.map(el => <User key={el.id} {...el} />)
        }
      </div>
      <div 
        className={s.delete_btn}
        onClick={() => dispatch(delete_all_users_action())}
      >
        Delete all users
      </div>
    </div>
  )
}