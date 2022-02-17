import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'

function LinkDashboard({path,text}) {
  return (
    <Link to={path} className='linkDashboard'>{text}</Link>
  )
}

export default LinkDashboard