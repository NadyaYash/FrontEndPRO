import React from 'react'
import { useParams } from 'react-router-dom'
import { getUser } from '../../requests/users_req'

export default function UserDescriptionPage() {
    const {user_id} = useParams();
    getUser(user_id);

  return (
    <div>UserDescriptionPage</div>
  )
}
