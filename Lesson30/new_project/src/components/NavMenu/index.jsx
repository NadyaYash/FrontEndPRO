import React from 'react'
import {Link} from 'react-router-dom'
import s from './index.module.css'

export default function NavMenu() {
  return (
    <div>
        
        <Link to= '/configurations'><div cl>Configurations</div></Link>
        <Link to= '/teams'><div>Teams</div></Link>
       
    </div>
  )
}
