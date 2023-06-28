import React, {useEffect} from 'react'
import { getUsers } from '../../async_actions/users_req';
import { useSelector } from 'react-redux';
import User from '../User';
import { useDispatch } from 'react-redux';

export default function UsersContainer() {
    const dispatch = useDispatch();
    const users_state = useSelector(state => state.users)
    useEffect(() => {dispatch(getUsers)}, []);
  return (
    <div>
        {users_state.map(el => <User key= {el.id} {...el}/> )}
    </div>
  )
}
