import React from 'react'
import { add_user_action } from '../../store/reducers/userReducer';
import { useDispatch } from 'react-redux';

export default function AddUserForm() {
    const dispatch = useDispatch();
    const addForm = event => {
        event.preventDefault();
        const {name, age} = event.target;
        const user = {
            id: Date.now(),
            name: name.value,
            age:+age.value
        }
        dispatch(add_user_action(user));
        event.target.reset();
        
    }
  return (
    <form onSubmit={addForm}>
        <input type= 'text' placeholder='Name' name = 'name'/>
        <input type= 'text' placeholder='Age' name = 'age'/>
        <button>Submit</button>
    </form>
  )
}
