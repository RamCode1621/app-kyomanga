import React from 'react'
import './style.css'
import {Link} from 'react-router-dom'

function GetBackIconLink() {
  return (
    <Link className="getBackIconLink" to="/dashboard">
        <i className="fas fa-arrow-circle-left"></i>
    </Link>
  )
}

export default GetBackIconLink