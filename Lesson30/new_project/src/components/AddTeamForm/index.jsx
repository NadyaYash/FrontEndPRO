import s from './index.module.css'
import { Context } from '../../context';
import React, {useContext} from 'react'


export default function AddTeamForm() {
    const {addTeam} = useContext(Context)

const add_team = event => {
    event.preventDefault();
    const {team} = event.target;
    const team_name = team.value;
    addTeam(team_name);
    team.value = '';
}

  return (
    <form className={s.form_style}onSubmit={add_team}>
        <p>Add Team</p>
        <input type="text" placeholder='Team name' name='team' />
        <button>Add Team</button>
        
    </form>
  )
}
