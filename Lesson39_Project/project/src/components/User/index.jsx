import React from 'react'
import { deleteUserAction } from '../../store/reducers/userReducer'
import { useDispatch } from 'react-redux'

export default function User({id, firstName, lastName, age}) {
    const dispatch = useDispatch();
  return (
    <div onClick={() => {dispatch(deleteUserAction(id))}}>
        <p>{firstName}</p>
        <p>{lastName}</p>
        <p>{age}</p>
    </div>
  )
}
