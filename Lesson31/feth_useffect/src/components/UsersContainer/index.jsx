import React, {useState, useEffect} from 'react'
import { get_users } from '../../requests/users_req';
import User from '../User';

export default function UsersContainer() {


    const [users, setUsers] = useState([])
    useEffect(() => {get_users(setUsers);}, []);

    useEffect(()=>{
      setUsers(JSON.parse(localStorage.getItem('users')) || users)
    }, []);
  
    useEffect(()=> {
      localStorage.setItem('users', JSON.stringify(users))
    }, [users]);
  

    console.log(users);
    
  return (
    <div>
        {
            users.map(el => <User {...el} key = {el.id}/> )
        }
    </div>
  )
}
