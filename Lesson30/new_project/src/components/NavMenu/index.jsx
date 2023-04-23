import React from 'react'
import {Link} from 'react-router-dom'
import s from './index.module.css'

export default function NavMenu() {
  return (
    <div className= {s.header}>
        
        <Link to= '/configurations'><div>Configurations</div></Link>
        <Link to= '/teams'><div>Teams</div></Link>
       
    </div>
  )
}
