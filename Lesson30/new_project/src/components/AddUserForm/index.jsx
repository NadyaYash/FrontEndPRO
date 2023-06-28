import React from 'react'
import s from './index.module.css'
import Select from 'react-select'
import { Context } from '../../context'
import { useContext } from 'react'

export default function AddUserForm() {

  const {teams, add_member} = useContext(Context)



    const addUser = event =>{
        event.preventDefault();
        const {member, team} = event.target;
            
        
        add_member(member.value, team.value);
        member.value = '';
       
    }

    

  return (
    <form className={s.form_style} onSubmit={addUser}>
        <p>Add team member</p>
        <input type="text" placeholder='Team members name' name='member' />
        <Select options={teams} name='team'/>
        <button>Add member</button>

    </form>
  )
}
