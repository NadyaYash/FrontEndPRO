import React from 'react'
import { useDispatch } from 'react-redux';
import { add_user_action } from '../../store/reducers/userReducer';


export default function AddUserForm() {

    const dispatch = useDispatch();
    const submit = event => {
        event.preventDefault();
        const {firstName, lastName, age} = event.target;
        const user = {
            id: Date.now(),
            firstName: firstName.value,
            lastName: lastName.value,
            age:+age.value
            
        }
        event.target.reset()
        dispatch(add_user_action(user));
        

    }
  return (
    <form onSubmit={submit}>
        <input type='text' placeholder='First Name' name = 'firstName' />
        <input type='text' placeholder='Last Name' name = 'lastName' />
        <input type='text' placeholder='Age' name='age' />
        <button>Submit</button>
    </form>
  )
}
